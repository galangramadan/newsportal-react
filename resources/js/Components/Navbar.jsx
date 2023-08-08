import { Link } from "@inertiajs/react";

const Navbar = ({ user }) => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <header className="flex items-center justify-between py-4 md:py-8">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                        aria-label="logo"
                    >
                        Portalnews
                    </a>

                    <nav className="hidden gap-12 lg:flex">
                        <a
                            href="#"
                            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center gap-1 text-lg font-semibold text-indigo-500"
                        >
                            Features
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-800"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                        >
                            Pricing
                        </a>
                        <a
                            href="#"
                            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                        >
                            About
                        </a>
                    </nav>
                    <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
                        {!user ? (
                            <>
                                <Link
                                    href={route("login")}
                                    as="button"
                                    className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base"
                                >
                                    Login
                                </Link>

                                <Link
                                    href={route("register")}
                                    as="button"
                                    className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                                >
                                    Register
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={route("dashboard")}
                                    as="button"
                                    className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base"
                                >
                                    Setting
                                </Link>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                                >
                                    Logout
                                </Link>
                            </>
                        )}
                    </div>

                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Menu
                    </button>
                </header>
            </div>
        </div>
    );
};

export default Navbar;
