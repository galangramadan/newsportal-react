const CardNews = ({ news }) => {
    const isNews = (news) => {
        return news.data.map((data, i) => {
            return (
                <div
                    className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row"
                    key={i}
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
                                {data.title}
                            </a>
                        </h2>

                        <p className="text-gray-500">{data.description}</p>

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
        });
    };
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-4 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
                    {!news ? <div>Tidak ada berita</div> : isNews(news)}
                </div>
            </div>
        </div>
    );
};

export default CardNews;
