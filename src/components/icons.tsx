export function Badge({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m20 3 5.4 8.4 10-.2-4.7 8.8 4.7 8.8-10-.2L20 37l-5.4-8.4-10 .2L9.3 20l-4.7-8.8 10 .2L20 3Z"
        fill="currentColor"
      />
      <circle
        cx="20"
        cy="20"
        r="6.5"
        stroke="var(--badge-center, #f4f1e9)"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="3" r="2" fill="currentColor" />
      <circle cx="35.4" cy="11.2" r="2" fill="currentColor" />
      <circle cx="35.4" cy="28.8" r="2" fill="currentColor" />
      <circle cx="20" cy="37" r="2" fill="currentColor" />
      <circle cx="4.6" cy="28.8" r="2" fill="currentColor" />
      <circle cx="4.6" cy="11.2" r="2" fill="currentColor" />
    </svg>
  );
}

export function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={down ? "arrow arrow-down" : "arrow"}
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
