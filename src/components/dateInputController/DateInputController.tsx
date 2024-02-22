import { FormDescription, FormField, FormItem, FormLabel, FormMessage } from 'components/ui/form';
import { Calender } from './calender';
import { cn } from 'lib/utils';

interface DateInputControllerProps {
    control: any;
    name: string;
    label?: string;
    palceholder?: string;
    rules?: any;
    description?: string;
    labelClassName?: string;
    descriptionClassName?: string;
    dateRange?: any;
    defaultValue?: any;
    questionHint?: string;
    required?: boolean;
    className?: string;
    containerClassName?: string;
    rest?: any;
    disabled?: boolean;
    inputDescription?: string;
    calenderClassName?: string;
}
const DateInputController = ({
    control,
    name,
    label,
    palceholder,
    description,
    labelClassName,
    descriptionClassName,
    dateRange,
    defaultValue,
    questionHint,
    required,
    className,
    rules,
    disabled,
    containerClassName,
    inputDescription,
    calenderClassName,
    ...rest
}: DateInputControllerProps) => {
    return (
        <div className={cn('flex justify-end items-start w-full', containerClassName)}>
            <FormField
                control={control}
                name={name}
                rules={rules}
                defaultValue={defaultValue}
                render={({ field }) => (
                    <FormItem className={cn(' w-full space-y-1', className)}>
                        {label ? (
                            <div className="flex-col  w-full">
                                <FormLabel
                                    className={cn('font-semibold capitalize', labelClassName)}
                                >
                                    {label}
                                    {required ? (
                                        <span className="text-[#FF0000] pl-[3px] ">*</span>
                                    ) : null}
                                </FormLabel>
                                {description ? (
                                    <FormDescription className={descriptionClassName}>
                                        {description}
                                    </FormDescription>
                                ) : null}
                            </div>
                        ) : null}
                        {questionHint && (
                            <FormDescription
                                className={
                                    ' text-xs text-left text-[#141414] dark:text-secondaryTextColor m-0 mb-2 p-0 mt-0'
                                }
                            >
                                * {questionHint}
                            </FormDescription>
                        )}
                        <Calender
                            field={field}
                            {...{ palceholder, dateRange, inputDescription, calenderClassName }}
                            disabled={disabled}
                        />
                        <FormMessage className="mt-4 text-start" />
                    </FormItem>
                )}
            />
        </div>
    );
};

export { DateInputController };
