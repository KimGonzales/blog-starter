import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
};

// Page 1 lives at "/" rather than "/page/1" so there is one canonical URL for it.
export function pageHref(page: number) {
  return page === 1 ? "/" : `/page/${page}`;
}

export function Pagination({ currentPage, totalPages }: Props) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const hasNewer = currentPage > 1;
  const hasOlder = currentPage < totalPages;

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-between gap-6 mb-32"
    >
      {hasNewer ? (
        <Link
          href={pageHref(currentPage - 1)}
          className="text-lg font-bold hover:underline"
        >
          ← Newer posts
        </Link>
      ) : (
        <span className="text-lg font-bold text-neutral-500">
          ← Newer posts
        </span>
      )}

      <ul className="flex items-center gap-4">
        {pages.map((page) => (
          <li key={page}>
            {page === currentPage ? (
              <span aria-current="page" className="text-lg font-bold underline">
                {page}
              </span>
            ) : (
              <Link
                href={pageHref(page)}
                className="text-lg hover:underline"
                aria-label={`Page ${page}`}
              >
                {page}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {hasOlder ? (
        <Link
          href={pageHref(currentPage + 1)}
          className="text-lg font-bold hover:underline"
        >
          Older posts →
        </Link>
      ) : (
        <span className="text-lg font-bold text-neutral-500">
          Older posts →
        </span>
      )}
    </nav>
  );
}
