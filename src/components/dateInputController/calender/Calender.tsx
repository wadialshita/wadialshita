import React from 'react';
import { cn } from 'lib/utils';
import CalendarIcon from 'assets/calendar-2.svg';
import moment from 'moment';
import { isDate } from 'lodash';
import { DatePickerStyled } from './Theme';
interface CalenderProps {
    field: any;
    palceholder?: string;
    inputDescription?: string;
    dateRange?: any;
    disabled?: boolean;
    calenderClassName?: string;
}
export const Calender = ({
    field,
    palceholder,
    dateRange,
    disabled,
    inputDescription,
    calenderClassName,
}: CalenderProps) => {
    const today = new Date();
    return (
        <div className={'relative '}>
            <DatePickerStyled
                maxDate={dateRange == -1 ? today : undefined}
                minDate={dateRange == 1 ? today : undefined}
                onChange={(date: any) => {
                    if (isDate(date)) {
                        field.onChange(moment(date).format('YYYY-MM-DD'));
                    }
                }}
                value={field.value}
                dayPlaceholder="DD "
                yearPlaceholder="YYY"
                monthPlaceholder=" MM"
                calendarIcon={<img src={CalendarIcon} className="ml-auto h-6 w-6 " />}
                clearIcon={null}
                className={cn(
                    'w-full  text-left text-sm font-normal h-10 text-black dark:text-secondaryTextColor  bg-background dark:bg-secondary disabled::dark:bg-secondary ',
                    !field.value && 'text-muted-foregroundc',
                    calenderClassName,
                )}
                calendarClassName={'w-full bg-background dark:bg-secondary'}
                format="dd/MM/y"
                disabled={disabled}
            />
            {inputDescription ? (
                <span
                    className={cn(
                        'absolute top-[25%] text-sm left-[27%] input_description capitalize',
                        disabled ? 'text-muted-foreground' : 'text-black',
                    )}
                >
                    {inputDescription}
                </span>
            ) : null}
        </div>
    );
};
