import React, { useState } from 'react';
import { Input as DefaultInput, Textarea } from 'components/ui';
import { cn } from 'lib/utils';

interface InputProps {
    field?: any;
    type?: string;
    className?: string;
    placeholder?: string;
    allowedCharacters?: string | any;
    disabled?: boolean;
    rules?: any;
    name?: any;
    defaultValue?: string;
    control?: any;
    fieldState?: any;
    formState?: any;
    otpCahracters?: number;
    icon?: any;
    filetypes?: string[];
    hint?: any;
    allowCopy?: boolean;
    min?: number;
    minLength?: number;
}

const unacceptableKeys = [38, 40, 69, 107, 109, 189, 187];

export const Input = ({
    field,
    type,
    className,
    placeholder,
    disabled,
    rules,
    allowedCharacters,
    name,
    defaultValue,
    control,
    otpCahracters,
    fieldState,
    formState,
    icon,
    filetypes,
    hint,
    allowCopy,
    min,
    minLength,
    ...rest
}: InputProps) => {
    const handelOnKeyDown = (e: any) => {
        if (unacceptableKeys?.includes(e.which)) {
            e.preventDefault();
        }
    };

    switch (type) {
        case 'text': {
            return (
                <>
                    <DefaultInput
                        {...field}
                        className={cn('h-10', className)}
                        {...{ placeholder, type, disabled, rules, ...rest }}
                    />
                </>
            );
        }
        case 'textarea': {
            return (
                <>
                    <Textarea
                        {...field}
                        className={cn('h-44', className)}
                        {...{ placeholder, type, disabled, rules, ...rest }}
                    />
                </>
            );
        }

        case 'withHint': {
            return (
                <>
                    <div className="relative">
                        <DefaultInput
                            {...field}
                            className={cn(
                                'h-10',
                                className,
                                fieldState?.isTouched && formState?.errors?.[name]
                                    ? 'border-destructive border-2'
                                    : '',
                            )}
                            {...{ placeholder, type, disabled, rules, ...rest }}
                            type={'number'}
                            autoComplete="off"
                            onKeyDown={handelOnKeyDown}
                            onWheel={(e: any) => e.target?.blur()}
                        />
                        <>
                            <div className="absolute top-[11px] right-2 text-xs">{hint}</div>
                        </>
                    </div>
                </>
            );
        }

        default:
            return (
                <>
                    <DefaultInput
                        {...field}
                        className={cn(
                            'h-10',
                            className,
                            fieldState?.isTouched && formState?.errors?.[name]
                                ? 'border-destructive border-2'
                                : '',
                        )}
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        onKeyDown={type === 'number' ? handelOnKeyDown : () => {}}
                        onWheel={(e: any) => e.target?.blur()}
                        {...{ placeholder, type, disabled, rules, ...rest }}
                        autoComplete="off"
                    />
                </>
            );
    }
};
