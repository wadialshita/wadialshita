import React, { useEffect, useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from 'components/ui/dropdown-menu';
import DropdownArrow from 'assets/dropdownArrow.svg';
import { TriggerBox } from './Theme';
interface DropdownProps {
    field: any;
    options: any[];
    placeholder?: string;
    name: string;
    disabled?: boolean;
    dropDownClassName?: string;
    tabIndex?: number;
}
export const Dropdown = ({
    field,
    options,
    placeholder,
    name,
    disabled,
    dropDownClassName,
    tabIndex,
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [DropdownMenuContentWidth, setDropdownMenuContentWidth] = useState<any>();
    const updateDropdownWidth = () => {
        const DropdownMenuTrigger = document.getElementById(name);
        setDropdownMenuContentWidth(DropdownMenuTrigger?.offsetWidth);
    };
    useEffect(() => {
        updateDropdownWidth();
        window.addEventListener('resize', updateDropdownWidth);
        return () => {
            window.removeEventListener('resize', updateDropdownWidth);
        };
    });
    return (
        <DropdownMenu onOpenChange={() => setIsOpen(!isOpen)}>
            <DropdownMenuTrigger
                className={'w-full rounded-md border border-input  h-10'}
                id={name}
                disabled={disabled}
            >
                <TriggerBox disabled={disabled} className={dropDownClassName}   tabindex={tabIndex}>
                    <span className="m-5 text-base font-normal text-[14px] truncate">
                        {field?.value?.value ? (
                            <span className="text-[14px]">
                                {
                                    options?.filter(
                                        (option: any) => option?.value === field?.value?.value,
                                    )?.[0]?.label
                                }{' '}
                            </span>
                        ) : (
                            <span className="text-[14px] text-[#4D5673]">{placeholder}</span>
                        )}
                    </span>
                    {/* <img
                        src={DropdownArrow}
                        className={`max-w-[28px]   w-fit h-fit  ${
                            isOpen ? 'rotate-180 duration-500' : 'rotate-0 duration-500'
                        }`}
                    /> */}
                </TriggerBox>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="bg-[#f7f7f7]"
                style={{
                    width: `${DropdownMenuContentWidth}px`,
                }}
            >
                {options?.map((option: any, idx: number) => (
                    <DropdownMenuItem
                        key={option.value}
                        onClick={(e: any) => {
                            field?.onChange({ value: option?.value, label: option?.label });
                        }}
                        isSelected={field?.value?.value == option.value}
                        isLastItem={idx == options.length - 1}
                        textValue={option}
                    >
                        <span className="full text-black "> {option.label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
