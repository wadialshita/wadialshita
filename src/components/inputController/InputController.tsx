import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from 'components/ui/form';
import { Input } from './Input';
import { cn } from 'lib/utils';

interface InputControllerProps {
    control: any;
    label?: string;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    rules?: any;
    description?: string;
    type?: string;
    name: string;
    containerClassName?: string;
    allowedCharacters?: string;
    otpCahracters?: number;
    defaultValue?: any;
    labelClassName?: any;
    icon?: any;
    required?: boolean;
    filetypes?: string[];
    contentclassname?: string;
    formItemClassName?: string;
    tabIndex?: number;
    readOnly?: boolean;
    allowCopy?: boolean;
    hint?: any;
    max?: number;
    maxLength?: number;
    pattern?: string;
    min?: number;
    minLength?: number;
}
export const InputController = ({
    control,
    label,
    className,
    placeholder,
    disabled,
    rules,
    description,
    type,
    name,
    containerClassName,
    allowedCharacters,
    otpCahracters,
    defaultValue,
    labelClassName,
    required,
    icon,
    filetypes,
    contentclassname,
    formItemClassName,
    tabIndex = -1,
    readOnly,
    hint,
    allowCopy,
    max,
    maxLength,
    pattern,
    min,
    minLength,
}: InputControllerProps) => {
    return (
        <div className={containerClassName}>
            <FormField
                control={control}
                name={name}
                rules={rules}
                defaultValue={defaultValue}
                render={({ field, fieldState, formState }) => {
                    return (
                        <FormItem className={cn('space-y-1', formItemClassName)}>
                            {label ? (
                                <FormLabel
                                    className={cn(
                                        ' font-semibold capitalize pb-[8px]',
                                        labelClassName,
                                    )}
                                >
                                    {label}
                                    {required ? (
                                        <span className="text-[#FF0000] pl-[3px]">*</span>
                                    ) : null}
                                </FormLabel>
                            ) : null}
                            <FormControl>
                                <Input
                                    field={field}
                                    {...{
                                        className,
                                        placeholder,
                                        disabled,
                                        type,
                                        allowedCharacters,
                                        control,
                                        name,
                                        otpCahracters,
                                        fieldState,
                                        formState,
                                        icon,
                                        filetypes,
                                        contentclassname,
                                        tabIndex,
                                        readOnly,
                                        hint,
                                        allowCopy,
                                        max,
                                        maxLength,
                                        pattern,
                                        min,
                                        minLength,
                                    }}
                                />
                            </FormControl>
                            {description ? <FormDescription>{description}</FormDescription> : null}
                            <FormMessage className="text-[#FF0000]" />
                        </FormItem>
                    );
                }}
            />
        </div>
    );
};
