import Navbar from "@/Components/Navbar";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
const EditNews = (props) => {
    const [values, setValues] = useState({
        id: props.myNews.id,
        title: props.myNews.title,
        description: props.myNews.description,
        category: props.myNews.category,
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
        router.post("/news/update", values);
        setValues({
            title: "",
            description: "",
            category: "",
        });
    };

    return (
        <>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <h1 className="mb-4 text-2xl text-center">Edit Berita</h1>
                <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
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
                            defaultValue={props.myNews.title}
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
                            defaultValue={props.myNews.description}
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
                            defaultValue={props.myNews.category}
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            onChange={handleChange}
                            required
                        />
                        <button
                            className="px-4 py-2 mt-4 rounded-md bg-slate-400"
                            type="submit"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditNews;
