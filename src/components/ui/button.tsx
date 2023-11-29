import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'flex items-center text-sm gap-1 hover:bg-opacity-80 text-indigo-500 rounded drop-shadow-md',
    {
        variants: {
            variant: {
                default: 'h-0 uppercase',
                underline: 'h-0 underline underline-offset-3 uppercase ',
                outline: 'border-[2.5px] rounded-none text-maastrichtBlue ',
                contained: 'bg-teal-500 text-white',
            },
            size: {
                default: 'h-fit p-2',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    // eslint-disable-next-line react/require-default-props
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
