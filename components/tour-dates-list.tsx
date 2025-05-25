'use client';

import * as Collapsible from '@radix-ui/react-collapsible';

import { TourDateCard } from '@/components/tour-date-card';
import { Button } from '@/components/ui/button';
import { Locale } from '@/i18n-config';
import { BitEvent } from '@/lib/bit';
import { useState } from 'react';

interface TourDatesListProps {
  concerts: BitEvent[];
  locale: Locale;
  ticketsButtonLabel: string;
  showMoreDatesLabel: string;
  showLessDatesLabel: string;
  tourDatesToShow: number;
}

export const TourDatesList = ({
  concerts,
  locale,
  ticketsButtonLabel,
  showMoreDatesLabel,
  showLessDatesLabel,
  tourDatesToShow
}: TourDatesListProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      {concerts.slice(0, tourDatesToShow).map((event) => {
        return (
          <TourDateCard
            key={event.id}
            event={event}
            locale={locale}
            ticketsButtonLabel={ticketsButtonLabel}
          />
        );
      })}
      <Collapsible.Content>
        {concerts.slice(tourDatesToShow).map((event) => {
          return (
            <TourDateCard
              key={event.id}
              event={event}
              locale={locale}
              ticketsButtonLabel={ticketsButtonLabel}
            />
          );
        })}
      </Collapsible.Content>
      {concerts.length > tourDatesToShow && (
        <Collapsible.Trigger
          asChild
          className="mt-4 flex w-full flex-shrink-0 justify-center uppercase underline underline-offset-4 hover:no-underline"
        >
          <Button className="font-normal">
            {open ? showLessDatesLabel : showMoreDatesLabel}
          </Button>
        </Collapsible.Trigger>
      )}
    </Collapsible.Root>
  );
};
