import { cn } from "@/lib/utils"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-4xl grid-cols-1 gap-6 md:auto-rows-[20rem] md:grid-cols-2",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  pointer?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] dark:border-white/[0.2] dark:bg-black dark:shadow-none cursor-pointer relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover/bento:scale-x-100 transition-transform duration-500 origin-left"></div>
      
      {header}
      <div className="transition-all duration-300 group-hover/bento:translate-x-2 relative z-10">
        <div className="text-neutral-500 dark:text-neutral-400 transition-colors duration-300 group-hover/bento:text-blue-500 dark:group-hover/bento:text-blue-400">
          {icon}
        </div>
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200 transition-colors duration-300 group-hover/bento:text-neutral-800 dark:group-hover/bento:text-white">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
          {description}
        </div>
      </div>
    </div>
  )
}
