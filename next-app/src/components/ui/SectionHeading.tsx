interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  copy?: string;
  inverse?: boolean;
}

export function SectionHeading({ index, eyebrow, title, copy, inverse = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading${inverse ? ' section-heading--inverse' : ''}`}>
      <div className="section-heading__meta">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
