'use client';

import dynamic from 'next/dynamic';
import type { ReactPlayerProps } from 'react-player';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoPlayer = (props: ReactPlayerProps) => {
  return (
    <div className="mx-auto aspect-video max-w-4xl">
      <ReactPlayer width="100%" height="100%" {...props} />
    </div>
  );
};

export default VideoPlayer;
