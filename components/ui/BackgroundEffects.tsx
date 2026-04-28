export function BackgroundEffects() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.22),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(168,85,247,0.12),transparent_35%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 animate-pulse rounded-full bg-violet-600/20 blur-3xl md:h-96 md:w-96" />
    </>
  );
}