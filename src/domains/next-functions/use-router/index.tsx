import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const UseRouterMain: FC = () => {
  const router = useRouter();

  //   useEffect(() => {
  //     router.events.on("routeChangeStart", () => {
  //       console.log("ROUTE CHANGE START");
  //     });
  //     router.events.on("hashChangeComplete", () => {
  //       console.log("ROUTE CHANGE END");
  //     });
  //   }, [router.events]);

  return (
    <main className="p-10">
      <ol>
        <li>{router.pathname}</li>
        <li>{router.query.query}</li>
        <li>{router.asPath}</li>
      </ol>
      <ol>
        <li>
          <button onClick={() => router.back()}>back</button>
        </li>
        <li>
          <button onClick={() => router.forward()}>forward</button>
        </li>
        <li>
          <button onClick={() => router.reload()}>Reload</button>
        </li>
        {/* 안쓰는게 좋다 */}
        <li>
          <button onClick={() => router.push("/")}>Push to /</button>
          <Link href="/">Push to /</Link>
        </li>
        <li>
          <button onClick={() => router.replace("/")}>Replace</button>
          <Link href="/">Replace</Link>
        </li>
        <li>
          <button onClick={() => router.prefetch("/")}>prefetch</button>
        </li>
      </ol>
    </main>
  );
};

export { UseRouterMain };
