import React from 'react';
import { Button as DefaultButton } from 'components/ui/button';
import { cn } from 'lib/utils';

interface ButtonProps {
    children?: React.ReactNode;

    color?: 'black' | 'sand' | 'red' | 'orange';
    size?: string;
    className?: string;
    loading?: boolean;
    asChild?: boolean;
    loaderColor?: string;
    withoutCaption?: boolean;
}

export const Button = React.memo(
    ({
        children,
        loading,
        loaderColor = '#ffffff',
        className,
        withoutCaption,
        ...props
    }: (ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) | any) => (
        <DefaultButton
            className={cn('hover:bg-blue-500 h-12', className, loading && 'w-fit')}
            {...props}
            data-cmp="Button"
        >
            {children}
        </DefaultButton>
    ),
);
