import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  [
    "rounded-md border border-solid px-3 py-2 transition-colors duration-300 ease-out",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-black text-white border-slate-900",
          "hover:bg-slate-800",
          "active:bg-slate-500",
        ],
        success: "bg-green-700 text-green-50 border-green-600",
        destructive: "bg-red-700 text-red-50 border-red-600",
      },
      hasSubline: {
        true: "pb-4",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "success",
        hasSubline: true,
        class: "bg-orange-400",
      },
    ],
  }
);

export type ButtonType = VariantProps<typeof buttonVariants>;

/**
 * Advanced typing
 */
export interface ButtonVariantsInterface
  extends Omit<ButtonType, "variant">,
    Required<Pick<ButtonType, "variant">> {}

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & {
    text: string;
  } & ButtonVariantsInterface
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={cn(
        buttonVariants({
          variant: props.variant,
          hasSubline: props.hasSubline,
        }),
        className
      )}
    >
      {props.text}
    </button>
  );
});

Button.displayName = "Button";
