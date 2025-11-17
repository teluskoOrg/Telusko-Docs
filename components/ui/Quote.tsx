export default function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/30 pl-4 py-0.5 italic  text-gray-700 dark:text-gray-300 rounded-r">
      {children}
    </blockquote>
  );
}