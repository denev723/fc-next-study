import { SomeComponent } from "@/domains/next-functions/head/SomeComponent";
// import Head from "next/head";
import { FC, useState } from "react";

const HeadMain: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <main>
      {/* <Head>
        <title>TITLE</title>
        <meta name="description" content="HEAD MAIN" />
      </Head> */}
      <button onClick={() => setVisible(!visible)}>MOUNT SOME COMPONENT</button>
      {visible && <SomeComponent />}
    </main>
  );
};

export { HeadMain };
