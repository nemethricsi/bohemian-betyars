import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div className={clsx('absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label')}>
      <div className="flex items-center rounded-full border bg-white/70 p-1 text-[13px] uppercase text-black backdrop-blur-md">
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h3>
        <Price
          className="flex-none rounded-full bg-bb-black p-2 text-bb-yellow"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
