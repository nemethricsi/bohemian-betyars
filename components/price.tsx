'use client';

import { getLocaleFromPathname } from '@/lib/utils';
import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
import { useEffect, useState } from 'react';

const Price = ({
  amount,
  className,
  currencyCode = 'HUF',
  currencyCodeClassName
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => {
  const [formattedPrice, setFormattedPrice] = useState(amount);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  useEffect(() => {
    setFormattedPrice(
      new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'symbol'
      }).format(parseFloat(amount))
    );
  }, [amount, currencyCode]);

  return <p className={className}>{formattedPrice}</p>;
};

export default Price;
