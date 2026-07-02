import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

/** Consistent section header: mono eyebrow, serif title, optional lead. */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: Props) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col ${alignment} max-w-2xl ${className}`}>
      {eyebrow && (
        <span className="eyebrow mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-brass/60" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className="text-fluid-title font-normal leading-[1.05] text-balance text-ink">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-slate text-pretty">
          {lead}
        </p>
      )}
    </Reveal>
  );
}
