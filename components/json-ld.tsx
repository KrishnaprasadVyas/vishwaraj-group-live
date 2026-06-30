import Script from "next/script";

type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
  id: string;
};

export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
