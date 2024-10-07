import React from 'react';
import { Dropdown } from './dropdown';

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from 'components/ui';
import { cn } from 'lib/utils';
interface DefaultValue {
    label?: string | number;
    value?: string | number;
    [key: string]: string | number | undefined;
}
interface DropdownMenuControllerProps {
    placeholder?: any;
    label?: string | any;
    name: string;
    control: any;
    options: any[];
    defaultValue?: DefaultValue;
    rules?: any;
    labelClassName?: string;
    description?: string;
    descriptionClassName?: string;
    className?: string;
    disabled?: boolean;
    required?: boolean;
    dropDownClassName?: string;
    labelClassNameContanier?: string;
    tabIndex?: number;
}
export const DropdownMenuController = ({
    label,
    name,
    control,
    options,
    defaultValue,
    rules,
    labelClassName,
    description,
    descriptionClassName,
    placeholder,
    className,
    disabled,
    required,
    dropDownClassName,
    labelClassNameContanier,
    tabIndex = -1,
}: DropdownMenuControllerProps) => {
    return (
        <FormField
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field }) => (
                <FormItem className={cn('  w-full ', className)}>
                    {label ? (
                        <div className={cn('flex-col flex mb-2 mt-2', labelClassNameContanier)}>
                            <FormLabel className={cn('capitalize ', labelClassName)}>
                                {label}
                                {required ? (
                                    <span className="text-[#FF0000] pl-[3px]">*</span>
                                ) : null}
                            </FormLabel>
                            {description ? (
                                <FormDescription className={descriptionClassName}>
                                    {description}
                                </FormDescription>
                            ) : null}
                        </div>
                    ) : null}
                    <FormControl className="w-full ">
                        <Dropdown
                            field={field}
                            {...{
                                options,
                                placeholder,
                                name,
                                disabled,
                                dropDownClassName,
                                tabIndex,
                            }}
                        />
                    </FormControl>
                    <FormMessage className="mt-4 text-start" />
                </FormItem>
            )}
        />
    );
};
