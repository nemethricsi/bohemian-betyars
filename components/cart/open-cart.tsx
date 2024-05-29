import CartIcon from 'components/cart/cart-icon';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md text-bb-white transition-colors">
      <CartIcon
        className="h-6 w-6 transition-all ease-in-out hover:scale-110"
        empty={!Boolean(quantity)}
      />

      {/* {quantity ? (
        <div className="absolute right-0 top-0 h-4 w-4 rounded bg-bb-purple text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null} */}
    </div>
  );
}
