type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`${alignment} max-w-4xl`}> 
      {eyebrow ? (
        <div className="text-xs font-semibold tracking-[0.25em] text-[color:var(--secondary)] uppercase">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[color:var(--primary)] sm:text-6xl lg:text-[clamp(3rem,5vw,4.5rem)] leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-lg leading-9 text-[color:var(--secondary)] sm:text-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
