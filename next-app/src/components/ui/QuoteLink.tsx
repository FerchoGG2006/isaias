import { quoteHref } from '@/config/brand';

interface QuoteLinkProps {
  className?: string;
  children: React.ReactNode;
  message?: string;
}

export function QuoteLink({ className, children, message }: QuoteLinkProps) {
  const href = quoteHref(message);
  const opensWhatsApp = href.startsWith('https://wa.me');

  return (
    <a
      className={className}
      href={href}
      target={opensWhatsApp ? '_blank' : undefined}
      rel={opensWhatsApp ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
