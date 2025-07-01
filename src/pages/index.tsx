/* eslint-disable @next/next/no-html-link-for-pages */
export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <a href="/routing">Static</a>
        </li>
        <li>
          <a href="/routing/dynamic/1234">Dynamic</a>
        </li>
        <li>
          <a href="/routing/nested/123/routing">Nested</a>
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
