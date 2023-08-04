import { Head } from "@inertiajs/react";
const Homepage = (props) => {
    console.log(props.news);
    return (
        <>
            <Head title={props.title} />
            <div className="flex justify-center items-center min-h-screen bg-slate-100">
                <div>
                    {props.news ? (
                        props.news.map((data, i) => {
                            console.log(data);
                            return (
                                <div
                                    key={i}
                                    className="p-4 m-2 bg-white text-black shadow-md border"
                                >
                                    <p className="font-bold text-3xl">
                                        {data.title}
                                    </p>
                                    <p>{data.description}</p>
                                    <p>{data.category}</p>
                                    <p>{data.author}</p>
                                </div>
                            );
                        })
                    ) : (
                        <p>Tidak ada berita untuk saat ini.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Homepage;
