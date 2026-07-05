interface PreviewVideoProps {
  src: string
  poster?: string
  label?: string
  className?: string
}

export function PreviewVideo({ src, poster, label, className }: PreviewVideoProps) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-xl border border-border/70 bg-card shadow-lg">
        <video
          controls
          playsInline
          preload="metadata"
          poster={poster}
          className="aspect-video w-full bg-black"
        >
          <source src={src} type="video/mp4" />
          {'Váš prohlížeč nepodporuje přehrávání videa.'}
        </video>
      </div>
      {label ? (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {label}
        </figcaption>
      ) : null}
    </figure>
  )
}
