import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard(props) {
    const [values, setValues] = useState({
        title: "",
        description: "",
        category: "",
    });

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/news", values);
        setValues({
            title: "",
            description: "",
            category: "",
        });
    };

    useEffect(() => {
        if (!props.myNews) router.get("/news");
    }, []);

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Berita Saya
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {props.flash.message && (
                            <div
                                className="flex w-full items-start gap-4 rounded border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-500"
                                role="alert"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    role="graphics-symbol"
                                    aria-labelledby="title-06 desc-06"
                                >
                                    <title id="title-06">Icon title</title>
                                    <desc id="desc-06">
                                        A more detailed description of the icon
                                    </desc>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <div>
                                    <h3 className="mb-2 font-semibold">
                                        {props.flash.message}
                                    </h3>
                                </div>
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <label
                                htmlFor="title"
                                className="block mb-2 font-medium text-gray-900"
                            >
                                Judul
                            </label>
                            <input
                                type="text"
                                id="title"
                                placeholder="Masukan Judul"
                                value={values.title}
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                onChange={handleChange}
                                required
                            />
                            <label
                                htmlFor="description"
                                className="block mb-2 font-medium text-gray-900"
                            >
                                Deskripsi
                            </label>
                            <input
                                type="text"
                                id="description"
                                value={values.description}
                                placeholder="Masukan Deskripsi"
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                onChange={handleChange}
                                required
                            />
                            <label
                                htmlFor="category"
                                className="block mb-2 font-medium text-gray-900"
                            >
                                Kategori
                            </label>
                            <input
                                type="text"
                                id="category"
                                value={values.category}
                                placeholder="Masukan Kategori"
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                onChange={handleChange}
                                required
                            />
                            <button
                                className="px-4 py-2 mt-4 rounded-md bg-slate-400"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {props.myNews.length > 0 ? (
                        props.myNews.map((news, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row"
                                >
                                    <a
                                        href="#"
                                        className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                                            loading="lazy"
                                            alt="Photo by Minh Pham"
                                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        />
                                    </a>

                                    <div className="flex flex-col gap-2 p-4 lg:p-6">
                                        <h2 className="text-xl font-bold text-gray-800">
                                            <a
                                                href="#"
                                                className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                            >
                                                {news.title}
                                            </a>
                                        </h2>

                                        <p className="text-gray-500">
                                            {news.description}
                                        </p>
                                        <p className="text-gray-500">
                                            {news.category}
                                        </p>

                                        <div>
                                            <a
                                                href="#"
                                                className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                                            >
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>Anda belum memiliki berita</p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
