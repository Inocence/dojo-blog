import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

    return (
        <div className="">
            <h2 className="text-xl font-medium">{title}</h2>
            {blogs.map((blog) => {
                return (

                    <div className="mt-2 p-5 hover:shadow-md" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2 className="text-red-500 text-xl font-medium">{blog.title}</h2>
                            <p>written by {blog.author}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default BlogList;