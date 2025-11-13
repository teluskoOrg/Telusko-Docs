import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Telusko Docs'
      // title: (
      //   <div className="border-2 border-green-600 px-4 py-0.5 bg-transparent">
      //     <span className="text-white font-bold text-lg tracking-wider">TELUSKO DOCS</span>
      //   </div>
      // )
    },
  };
}
