import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "./magicui/animated-gradient-text";

export default function GradientAnimatedText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <AnimatedGradientText>
      <span
        className={cn(
          `border-none inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none`,
          className
        )}
      >
        {children}
      </span>
    </AnimatedGradientText>
  );
}
