export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className='inline-flex items-center rounded-2xl border border-neutral-200 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:text-neutral-200'>
      {children}
    </span>
  );
}
