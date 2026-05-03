import { Card } from 'fumadocs-ui/components/card';

export function ComingSoonCard(props: React.ComponentProps<typeof Card>) {
  return (
    <div className="relative">
      <Card {...props} className="opacity-60 pointer-events-none" />
      <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
        Coming Soon
      </span>
    </div>
  );
}