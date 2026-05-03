// components/coming-soon-accordion.tsx
'use client';
import { Accordion } from 'fumadocs-ui/components/accordion';

export function ComingSoonAccordion({ title, ...props }: React.ComponentProps<typeof Accordion>) {
  return (
    <Accordion
      {...props}
      value={String(title)}
      title={
        <span className="flex items-center gap-2">
          {title}
          <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            Coming Soon
          </span>
        </span>
      }
    />
  );
}