import { HeadMain } from "@/domains/next-functions/head";
import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";

interface Props {
  title: string;
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      title: "서버에서 내려준 타이틀입니다.",
    },
  };
};

const HeadPage: FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="HEAD MAIN" />
      </Head>
      <HeadMain />
    </>
  );
};

export default HeadPage;
