'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Business, QuoteItem, QuoteRequest, QuoteCustomer } from '@/domain';
import { getBusiness, DEFAULT_BUSINESS_ID } from '@/data/businesses';
import { createQuoteRequest } from '@/lib/quoteBuilder';
import { getWhatsAppQuoteUrl } from '@/lib/whatsapp';

interface QuoteContextType {
  quoteItems: QuoteItem[];
  addItem: (item: QuoteItem) => void;
  removeItem: (id: string) => void;
  updateItem: (id: string, updates: Partial<QuoteItem>) => void;
  clearQuote: () => void;
  isQuoteDrawerOpen: boolean;
  setIsQuoteDrawerOpen: (open: boolean) => void;
  openQuoteDrawer: () => void;
  closeQuoteDrawer: () => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  totalUnits: number;
  estimatedTotal: number | undefined;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  business: Business;
  businessId: string;
  setBusinessId: (id: string) => void;
  customer: QuoteCustomer;
  updateCustomer: (data: Partial<QuoteCustomer>) => void;
  generalNotes: string;
  setGeneralNotes: (notes: string) => void;
  getFormattedQuoteRequest: () => QuoteRequest;
  getWhatsAppUrl: () => { url: string; isConfigured: boolean; message: string };
  customPhone: string;
  setCustomPhone: (phone: string) => void;
  // Compatibilidad legacy
  cart: QuoteItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  whatsappPhone: string;
}


const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('vi_quote_items');
        if (saved) {
          return JSON.parse(saved);
        }
      } catch {
        // Ignorar errores de SSR / storage
      }
    }
    return [];
  });

  const [customPhone, setCustomPhoneState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem('vi_custom_phone') || '';
      } catch {
        return '';
      }
    }
    return '';
  });

  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [businessId, setBusinessId] = useState<string>(DEFAULT_BUSINESS_ID);
  const [customer, setCustomer] = useState<QuoteCustomer>({});
  const [generalNotes, setGeneralNotes] = useState<string>('');

  const baseBusiness = getBusiness(businessId);
  const business: Business = {
    ...baseBusiness,
    whatsappPhone: customPhone || baseBusiness.whatsappPhone || process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, '') || '',
  };

  const setCustomPhone = (phone: string) => {
    const clean = phone.replace(/\D/g, '');
    setCustomPhoneState(clean);
    try {
      if (clean) {
        localStorage.setItem('vi_custom_phone', clean);
      } else {
        localStorage.removeItem('vi_custom_phone');
      }
    } catch {
      // Ignorar
    }
  };

  // Guardar en localStorage ante cambios
  useEffect(() => {
    try {
      localStorage.setItem('vi_quote_items', JSON.stringify(quoteItems));
    } catch {
      // Ignorar
    }
  }, [quoteItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addItem = (item: QuoteItem) => {
    setQuoteItems((prev) => [...prev, item]);
    showToast(`✓ "${item.title}" añadido a tu cotización`);
  };

  const removeItem = (id: string) => {
    setQuoteItems((prev) => prev.filter((it) => it.id !== id));
  };

  const updateItem = (id: string, updates: Partial<QuoteItem>) => {
    setQuoteItems((prev) =>
      prev.map((it) => {
        if (it.id !== id) return it;
        const updated = { ...it, ...updates };
        if (updated.unitPrice && updated.pricingType === 'fixed') {
          updated.estimatedSubtotal = updated.unitPrice * updated.totalQuantity;
        }
        return updated;
      })
    );
  };

  const clearQuote = () => {
    setQuoteItems([]);
    try {
      localStorage.removeItem('vi_quote_items');
    } catch {
      // Ignorar
    }
  };

  const updateCustomer = (data: Partial<QuoteCustomer>) => {
    setCustomer((prev) => ({ ...prev, ...data }));
  };

  const totalUnits = quoteItems.reduce((sum, item) => sum + item.totalQuantity, 0);

  const hasUnpriced = quoteItems.some((it) => it.estimatedSubtotal === undefined);
  const estimatedTotal = hasUnpriced
    ? undefined
    : quoteItems.reduce((sum, it) => sum + (it.estimatedSubtotal || 0), 0);

  const getFormattedQuoteRequest = (): QuoteRequest => {
    return createQuoteRequest({
      businessId,
      items: quoteItems,
      customer,
      generalNotes,
    });
  };

  const getWhatsAppUrl = () => {
    const request = getFormattedQuoteRequest();
    return getWhatsAppQuoteUrl(request, business);
  };

  const openQuoteDrawer = () => setIsQuoteDrawerOpen(true);
  const closeQuoteDrawer = () => setIsQuoteDrawerOpen(false);

  return (
    <QuoteContext.Provider
      value={{
        quoteItems,
        addItem,
        removeItem,
        updateItem,
        clearQuote,
        isQuoteDrawerOpen,
        setIsQuoteDrawerOpen,
        openQuoteDrawer,
        closeQuoteDrawer,
        isAdminOpen,
        setIsAdminOpen,

        totalUnits,
        estimatedTotal,
        toastMessage,
        showToast,
        business,
        businessId,
        setBusinessId,
        customer,
        updateCustomer,
        generalNotes,
        setGeneralNotes,
        getFormattedQuoteRequest,
        getWhatsAppUrl,
        customPhone,
        setCustomPhone,
        // Compatibilidad legacy
        cart: quoteItems,
        isCartOpen: isQuoteDrawerOpen,
        setIsCartOpen: setIsQuoteDrawerOpen,
        totalItems: totalUnits,
        subtotal: estimatedTotal || 0,
        whatsappPhone: business.whatsappPhone,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote debe utilizarse dentro de un QuoteProvider');
  }
  return context;
};

// Hook de compatibilidad para evitar romper referencias previas
export const useCart = () => {
  return useQuote();
};
