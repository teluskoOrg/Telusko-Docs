import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.pageTree}   {...baseOptions()} sidebar={{
    enabled: true,
    tabs:false,
    defaultOpenLevel:0
    
    // replace the default sidebar
    // component:
  }}>
      {children}
    </DocsLayout>
  );
}
