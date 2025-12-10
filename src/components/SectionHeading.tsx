type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      <div className="flex items-center gap-3">
        <span className="h-1 w-10 rounded-full bg-probemas-primary" />
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
      </div>
      {subtitle ? (
        <p className="text-probemas-muted max-w-2xl">{subtitle}</p>
      ) : null}
    </div>
  );
}

