/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/routing">Static</Link>
        </li>
        <li>
          <a href="/routing/dynamic/1234">Dynamic</a>
        </li>
        <li>
          <Link href="/routing/nested/123/routing">Nested</Link>
        </li>
        <li>
          <a href="/routing/catch-all-segments/123/456/789">
            Catch-All-Segments
          </a>
        </li>
      </ul>
    </main>
  );
}
