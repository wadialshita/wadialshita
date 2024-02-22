import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { cn } from 'lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={cn('yesborder-b', className)} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="yesflex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                'yesflex yesflex-1 yesitems-center yesjustify-between yespy-4 yestext-sm yesfont-medium yestransition-all hover:yesunderline [&[data-state=open]>svg]:yesrotate-180',
                className,
            )}
            {...props}
        >
            {children}
            <ChevronDownIcon className="yesh-4 yesw-4 yesshrink-0 yestext-muted-foreground yestransition-transform yesduration-200" />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="yesoverflow-hidden yestext-sm data-[state=closed]:yesanimate-accordion-up data-[state=open]:yesanimate-accordion-down"
        {...props}
    >
        <div className={cn('yespb-4 yespt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
