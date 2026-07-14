export default function cards({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 w-full max-w-sm">
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">{description}</p>
    </div>
  );
}