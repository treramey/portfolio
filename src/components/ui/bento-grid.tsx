import { cn } from '@/lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  size,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  size?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div className={cn('group/bento row-span-1 flex', size)}>
      <div className="flex w-[0.3125rem] shrink-0 flex-col">
        <div className="flex h-[0.3125rem] w-full items-end justify-end">
          <div className="bg-primary-300 h-[0.15625rem] w-[0.15625rem]"></div>
        </div>
        <div className="flex h-full w-full">
          <div className="h-full w-1/2 bg-white"></div>
          <div className="h-full w-1/2 bg-black"></div>
        </div>
        <div className="flex h-[0.3125rem] w-full items-start justify-end">
          <div className="h-[0.15625rem] w-[0.15625rem] bg-white"></div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="bg-primary-300 h-[0.15625rem] w-full"></div>
        <div className="h-[0.15625rem] w-full bg-black"></div>
        <div
          className={cn(
            'flex flex-1 flex-col justify-between space-y-4 p-4 shadow-input',
            className,
          )}
        >
          {header}
          <div className="transition duration-200 group-hover/bento:translate-x-2">
            {icon}
            <div className="mb-2 mt-2 font-sans font-bold text-inherit">{title}</div>
            <div className="font-sans text-xs font-normal text-inherit">{description}</div>
          </div>
        </div>
        <div className="h-[0.15625rem] w-full bg-black"></div>
        <div className="h-[0.15625rem] w-full bg-white"></div>
      </div>
      <div className="flex w-[0.3125rem] shrink-0 flex-col">
        <div className="flex h-[0.3125rem] w-full items-end justify-start">
          <div className="bg-primary-300 h-[0.15625rem] w-[0.15625rem]"></div>
        </div>
        <div className="flex h-full w-full">
          <div className="h-full w-1/2 bg-black"></div>
          <div className="h-full w-1/2 bg-white"></div>
        </div>
        <div className="flex h-[0.3125rem] w-full items-start justify-start">
          <div className="h-[0.15625rem] w-[0.15625rem] bg-white"></div>
        </div>
      </div>
    </div>

    // <div
    //   className={cn(
    //     "group/bento shadow-input row-span-1  ",
    //     className,
    //   )}
    // >
    // {header}
    // <div className="transition duration-200 group-hover/bento:translate-x-2">
    //   {icon}
    //   <div className="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
    //     {title}
    //   </div>
    //   <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
    //     {description}
    //   </div>
    // </div>
    // </div>
  );
};
