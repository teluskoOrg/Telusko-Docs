import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Accordion, Accordions} from 'fumadocs-ui/components/accordion';
import { File,Folder } from 'fumadocs-ui/components/files';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import Quote from '@/components/ui/Quote';
import Badge from '@/components/ui/Badge';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react'

import Video from './components/ui/Video';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img:(props) => <ImageZoom {...(props as any)}/>,
     Accordion,
    Accordions,
    File,
    Step,
    Steps,
    Tabs,
    Tab,
    Folder,
    Card,
    Cards,
    Video,
    Quote,
    Badge,
    ExternalLink,
    Image,
    ...components,
  };
}
