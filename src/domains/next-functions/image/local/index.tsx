import { FC } from "react";
import tent from "./image.jpg";
import Image from "next/image";

const LocalMain: FC = () => {
  console.log(tent);
  return (
    <main>
      <Image
        src={tent}
        alt="tent"
        width={500}
        placeholder="blur"
        quality={100}
        priority
      />
    </main>
  );
};

export { LocalMain };
