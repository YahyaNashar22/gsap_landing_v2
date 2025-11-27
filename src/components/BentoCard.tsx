import type { ReactElement } from "react";

interface IBentoCardProps {
  src: string;
  title: ReactElement;
  description?: string;
}

const BentoCard = ({ src, title, description }: IBentoCardProps) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0	bg-black/20 bg-linear-to-b from-black/40 via-black/60 to-black/40" />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
