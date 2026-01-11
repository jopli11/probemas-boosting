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
  const containerAlignment = align === "center" ? "text-center items-center" : "text-left items-start";
  const flexAlignment = align === "center" ? "flex-col items-center" : "items-center gap-3";

  return (
    <div className={`flex flex-col gap-2 ${containerAlignment}`}>
      <div className={`flex ${flexAlignment}`}>
        {align === "left" && <span className="h-1 w-10 rounded-full bg-yellow" />}
        <h2 className="text-h2-mobile font-bold md:text-h2-desktop font-raleway text-white">{title}</h2>
        {align === "center" && <span className="mt-2 h-1 w-12 rounded-full bg-yellow" />}
      </div>
      {subtitle ? (
        <p className="text-white/80 max-w-2xl">{subtitle}</p>
      ) : null}
    </div>
  );
}

