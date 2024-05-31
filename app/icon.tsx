import LogoChickenLegIcon from 'components/icons/logo-chicken-leg';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          color: 'white',
          fontSize: 24,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 999
        }}
      >
        <LogoChickenLegIcon className="h-4 w-4 fill-bb-white" />
      </div>
    ),
    {
      ...size
    }
  );
}
