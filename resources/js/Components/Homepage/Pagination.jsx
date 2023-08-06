import { Link } from "@inertiajs/react";

const Pagination = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
    return (
        <div>
            <nav role="navigation" aria-label="Pagination Navigation">
                <ul className="flex list-none items-center justify-center text-sm text-slate-700 md:gap-1">
                    {prev && (
                        <li>
                            <Link
                                href={prev}
                                aria-label="Goto Page 1"
                                className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-indigo-50 hover:stroke-indigo-500 hover:text-indigo-500 focus:bg-indigo-50 focus:stroke-indigo-600 focus:text-indigo-600 focus-visible:outline-none"
                            >
                                <span className="order-2 md:sr-only">Prev</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="-mx-1 h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    role="graphics-symbol"
                                    aria-labelledby="title-01 desc-01"
                                >
                                    <title id="title-01">Previous page</title>
                                    <desc id="desc-01">
                                        link to previous page
                                    </desc>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </Link>
                        </li>
                    )}
                    <li>
                        <Link
                            href={current}
                            className="hidden h-10 items-center justify-center whitespace-nowrap rounded bg-indigo-500 px-4 text-sm font-medium text-white ring-offset-2 transition duration-300 hover:bg-indigo-600 hover:stroke-indigo-500 focus:bg-indigo-700 focus-visible:outline-none md:inline-flex"
                            aria-label="Current Page, Page 3"
                            aria-current="true"
                        >
                            {meta.current_page}
                        </Link>
                    </li>
                    {next && (
                        <li>
                            <Link
                                href={next}
                                aria-label="Goto Page 4"
                                className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-indigo-50 hover:stroke-indigo-500 hover:text-indigo-500 focus:bg-indigo-50 focus:stroke-indigo-600 focus:text-indigo-600 focus-visible:outline-none"
                            >
                                <span className="md:sr-only">Next</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="-mx-1 h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    role="graphics-symbol"
                                    aria-labelledby="title-02 desc-02"
                                >
                                    <title id="title-02">Next page</title>
                                    <desc id="desc-02">link to next page</desc>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
