interface CartIconProps {
  empty?: boolean;
  className?: string;
}

export default function CartIcon({ empty = true, className = '' }: CartIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#1A1E1E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M9 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2zM1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
      ></path>
      {!empty && (
        <g fill="none">
          <path
            fill="#1A1E1E"
            stroke="#1A1E1E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7.68 14.39L6 6h17l-1.6 8.39a2 2 0 01-2 1.61H9.68a2 2 0 01-2-1.61z"
          ></path>
          <path
            stroke="#F7ED71"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.25"
            d="M12 11.563s.938 1.25 2.5 1.25c1.563 0 2.5-1.25 2.5-1.25"
          ></path>
          <path
            stroke="#F7ED71"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12.625 8.438h.006M16.375 8.438h.006"
          ></path>
        </g>
      )}
    </svg>
  );
}
