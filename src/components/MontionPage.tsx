import { motion as m } from "framer-motion";

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  type?: "left" | "right" | "bottom" | "top";
  delay?: number;
  initialOpacity?: number;
  finalOpacity?: number;
  initialX?: number;
  initialY?: number;
  finalX?: number;
  finalY?: number;
};

export default function MotionPage({
  children,
  className,
  type,
  delay,
  initialOpacity = 0,
  finalOpacity = 1,
  initialX = 0,
  initialY = 0,
  finalX = 0,
  finalY = 0,
}: Props) {
  const variants = {
    left: {
      hidden: { opacity: initialOpacity, x: initialX, y: initialY },
      enter: { opacity: finalOpacity, x: finalX, y: finalY },
      exit: { opacity: initialOpacity, x: -finalX, y: initialY },
    },
    right: {
      hidden: { opacity: initialOpacity, x: initialX, y: initialY },
      enter: { opacity: finalOpacity, x: finalX, y: finalY },
      exit: { opacity: initialOpacity, x: -finalX, y: initialY },
    },
    bottom: {
      hidden: { opacity: initialOpacity, x: initialX, y: initialY },
      enter: { opacity: finalOpacity, x: finalX, y: finalY },
      exit: { opacity: initialOpacity, x: initialX, y: -finalY },
    },
    top: {
      hidden: { opacity: initialOpacity, x: initialX, y: initialY },
      enter: { opacity: finalOpacity, x: finalX, y: finalY },
      exit: { opacity: initialOpacity, x: initialX, y: -finalY },
    },
  };

  return (
    <m.div
      variants={variants[type || "left"]}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ ease: "easeInOut", duration: 0.75, delay }}
      className={className}
    >
      {children}
    </m.div>
  );
}
