import React, { Suspense } from 'react';

import dynamic from 'next/dynamic';

import { Common } from '@/components/canvas/view';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

export function BentoGridDemo() {
  return (
    <BentoGrid className="mx-auto max-w-4xl">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          // icon={item.icon}
          className={item.className}
          size={i === 0 ? 'md:col-span-2 md:row-span-2' : ''}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>
);

const Blob = dynamic(() => import('@/components/canvas/examples').then((mod) => mod.Blob), {
  ssr: false,
});

const Desktop = dynamic(() => import('@/components/canvas/examples').then((mod) => mod.Desktop), {
  ssr: false,
});

const View = dynamic(() => import('@/components/canvas/view').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className="flex h-96 w-full flex-col items-center justify-center">
      <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-black" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  ),
});

const Test3d = () => (
  <View orbit className="flex h-full w-full flex-col items-center justify-center">
    <Suspense fallback={null}>
      <Desktop scale={2} position={[0, -60, 20]} />
      <Common color={''} />
    </Suspense>
  </View>
);
const items = [
  {
    title: 'I build things for the web',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Test3d />,
    className: 'bg-neutral-900 text-neutral-200',
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    className: '',
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    className: '',
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Power of Communication',
    description: 'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    className: '',
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.',
    header: <Skeleton />,
    className: '',
    // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Joy of Creation',
    description: 'Experience the thrill of bringing ideas to life.',
    header: <Skeleton />,
    className: '',
    // icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
];
