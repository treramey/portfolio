import { BentoGridDemo } from '@/components/bento';
import { TextRevealCard } from '@/components/ui/text-reveal-card';

export default function HomePage() {
  return (
    <div className="w-full">
      <div className="flex h-64 w-full flex-1 flex-col justify-center">
        <TextRevealCard
          text={'DFW, USA, 33°9\'19.34" N 96°49\'7.44" W'}
          revealText="DFW, USA, Frisco TX"
        ></TextRevealCard>
        <h1 className="font-nb-architect text-7xl font-bold text-neutral-800 sm:text-8xl">
          Trevor
        </h1>
      </div>
      <BentoGridDemo />
    </div>
  );
}
