export default function VideoBanner({ src }) {
  return (
    <div className="video-box">
      <video
        className="banner-video"
        data-height
        data-width
        playsInline
        preload="auto"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
        src={src}
        type="video/mp4"
      ></video>
    </div>
  )
}