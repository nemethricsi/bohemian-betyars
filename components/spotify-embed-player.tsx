const SpotifyEmbedPlayer = ({ height = 400 }: { height?: number }) => {
  return (
    <iframe
      style={{ borderRadius: 12 }}
      src="https://open.spotify.com/embed/artist/2ezYPSKWBfnFTobN9puCow?utm_source=generator&theme=0"
      width="100%"
      height={height}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyEmbedPlayer;
