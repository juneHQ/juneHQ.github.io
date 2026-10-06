// Core
import { ComponentProps } from 'react';
import { CalendarIcon } from '@heroicons/react/24/solid'
import moment from 'moment';

// Util
import { classNames } from 'lib/utils';

type DateDisplayProps = ComponentProps<'div'> & {
    date: string
    color?: string
    fontWeight?: 'medium' | 'semibold'
}

export const DateDisplay = ( { 
    date, 
    color = 'black', 
    className,
    fontWeight = 'semibold',
    ...props 
}: DateDisplayProps) => {

    const dateFormatted = moment.utc(date).format('DD MMM YY');

    return (
        <div className={classNames('flex gap-2 items-center', className)} {...props}>
            <CalendarIcon className={`h-[25px] w-[25px] text-${color}`}/>
            <p className={`text-[17px] pt-[2px] text-${color} font-${fontWeight}`}>{dateFormatted}</p>
        </div>
    )
}