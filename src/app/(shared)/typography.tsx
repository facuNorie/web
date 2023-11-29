import React from 'react';
import classnames from 'classnames';

type AllowedTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface TypographyProps
    extends React.HTMLAttributes<HTMLHeadingElement & HTMLParagraphElement> {
    variant: AllowedTags;
    children: React.ReactNode;
}

export const Typography = ({
    variant,
    children,
    className,
    ...props
}: TypographyProps) => {
    const typographyClass = classnames(
        {
            'text-5xl font-extrabold': variant === 'h1',
            'text-4xl font-bold': variant === 'h2',
            'text-3xl font-bold': variant === 'h3',
            'text-2xl font-bold': variant === 'h4',
            'text-xl font-bold': variant === 'h5',
            'text-lg font-bold': variant === 'h6',
            'text-base': variant === 'p',
        },
        className
    );

    const Component = variant;

    return (
        <Component className={typographyClass} {...props}>
            {children}
        </Component>
    );
};
