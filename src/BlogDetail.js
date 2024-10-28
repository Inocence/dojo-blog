import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const navigate = useNavigate();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = (e) => {
        e.preventDefault();
        setIsDeleting(true);
        setTimeout(() => {
            fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
            })
            .then(() => {
                setIsDeleting(false);
                navigate('/');
            });
        }, 1000);
    };


    return (
        <div className="">
            {isPending && <p className="">Loading...</p>}
            {error && <p>{error}</p>}
            {blog && (
                <div className="p-2">
                    <h2 className="text-xl text-red-500 font-medium">Blog Detail - {id}</h2>
                    <p className="">written by {blog.author}</p>
                    <div className="">{blog.body}</div>
                    <form onSubmit={handleDelete}>
                        {!isDeleting && <button className="mt-5 rounded-md p-2 w-40 m-auto hover:shadow-md bg-red-700 text-white">Delete Blog</button>}
                        {isDeleting && <button className="mt-5 rounded-md p-2 w-40 m-auto hover:shadow-md bg-red-300 text-white">Deleting Blog</button>}
                    </form>
                </div>
            )}
        </div>
    );
}

export default BlogDetail;