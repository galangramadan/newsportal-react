import CardNews from "@/Components/Homepage/CardNews";
import Pagination from "@/Components/Homepage/Pagination";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
const Homepage = (props) => {
    return (
        <>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <CardNews news={props.news} />
            <Pagination meta={props.news.meta} />
        </>
    );
};

export default Homepage;
