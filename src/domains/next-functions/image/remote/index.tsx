import Image, { ImageLoaderProps } from "next/image";
import { FC } from "react";

const RemoteMain: FC = () => {
  return (
    <main>
      <Image
        src="/img/image.jpg"
        alt="tent"
        width={500}
        height={400}
        loader={imageLoader}
      />
    </main>
  );
};

export { RemoteMain };

function imageLoader(params: ImageLoaderProps) {
  const { src, width, quality } = params;

  return `/img${src}?w=${width}&q=${quality}`;
}
