const paths = {
  arrow: "M4 12h15m-6-6 6 6-6 6",
  play: "m9 5 11 7-11 7z",
  pause: "M9 5v14m6-14v14",
  diagonal: "M6 18 18 6M7 6h11v11",
  expand: "M9 4H4v5m11-5h5v5M4 15v5h5m11-5v5h-5",
  chevron: "m6 9 6 6 6-6",
  down: "M12 4v15m-6-6 6 6 6-6",
  menu: "M3 8h18M3 16h18",
  close: "m5 5 14 14M19 5 5 19",
  scope: "M7 3h8l4 4v14H5V3h2Zm8 0v5h4M8 12h8m-8 4h6",
  people:
    "M16 20v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m14-6a4 4 0 0 1 3 4v2M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm3-4a4 4 0 0 1 0 8",
  progress: "M4 19V5m0 14h16M7 14l4-4 3 3 5-6m-4 0h4v4",
  check: "M20 12v8H4V4h12m-8 8 4 4 9-10",
  email: "M3 5h18v14H3zM3 6l9 7 9-7",
  whatsapp:
    "M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-4A8.2 8.2 0 1 1 20.2 11.7ZM9 7.6c-.6 0-1.2.9-1.2 1.8 0 2.5 3.5 5.9 5.9 5.9.9 0 1.8-.6 1.8-1.2l-2.2-1.3-.9.9a7.2 7.2 0 0 1-2.9-2.9l.9-.9Z",
  youtube: "M6 5h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Zm4 4 5 3-5 3Z",
  instagram:
    "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm1.5-5.5h.01",
  pinterest:
    "M9 21.5A10 10 0 1 0 5.5 19M9 21.5l3-12m-1.2 5c.5 1 1.4 1.5 2.5 1.5 2.5 0 4.2-2.3 4.2-5.3C17.5 8 15.5 6 12.3 6 9 6 6.5 8.3 6.5 11.2c0 1.4.6 2.5 1.5 3.1",
  tiktok:
    "M13 3h3a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.8V16a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3Z",
  facebook:
    "M14 21v-8h3l.5-3H14V8c0-1 .5-1.5 1.5-1.5H18V3h-3a5 5 0 0 0-5 5v2H7v3h3v8Z",
};

export function Icon({
  name,
  size = 20,
}: {
  name: keyof typeof paths;
  size?: number;
}) {
  return (
    <svg
      className={name === "diagonal" ? "link-arrow" : undefined}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
