import { Locale } from '@/i18n-config';
import { BitEvent } from '@/lib/bit';
import { formatTourDate } from '@/lib/utils';
import { ArrowUpRightIcon } from 'lucide-react';

interface TourDateCardProps {
  event: BitEvent;
  locale: Locale;
  ticketsButtonLabel: string;
}

export const TourDateCard = ({
  event,
  locale,
  ticketsButtonLabel
}: TourDateCardProps) => {
  const { day, month, year } = formatTourDate(event.datetime, locale);
  const eventUrl = event.offers[0]?.url;

  return (
    <div className="flex flex-col items-center justify-between gap-6 px-0 py-4 hover:bg-slate-800 sm:flex-row sm:gap-4 sm:p-4 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-neutral-400">
      <div className="flex w-full items-center gap-4 sm:gap-8">
        {/* Date */}
        <div className="flex flex-shrink-0 items-center gap-1">
          <div className="w-11 text-[40px] font-medium sm:w-14 sm:text-5xl">
            {day}
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-medium uppercase sm:text-2xl">
              {month}
            </div>
            <div className="text-lg font-medium sm:text-xl">{year}</div>
          </div>
        </div>
        {/*Separator*/}
        <div className="h-10 w-px bg-bb-yellow" />
        {/*Name and venue*/}
        <div className="flex flex-col">
          <div className="text-base font-medium uppercase sm:text-xl">
            {event.title.length > 0 ? event.title : event.venue.name}
          </div>
          <div className="text-sm font-light uppercase sm:text-base">
            {event.venue.country}
          </div>
        </div>
      </div>
      {eventUrl && (
        <a
          href={eventUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 border border-bb-yellow bg-bb-yellow px-4 py-2 font-bold uppercase text-bb-black hover:bg-bb-yellow hover:text-bb-black sm:w-auto sm:bg-transparent sm:text-bb-yellow"
        >
          <span>{ticketsButtonLabel}</span>
          <ArrowUpRightIcon />
        </a>
      )}
    </div>
  );
};
