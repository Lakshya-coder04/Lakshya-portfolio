export default function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-neutral-200 bg-white/60 p-5 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60 ${className}`}
    >
      {children}
    </div>
  );
}
