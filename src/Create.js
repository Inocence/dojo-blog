import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const bodys = { title: title, body: body, author: author };
        setIsPending(true);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(bodys)
            })
            .then((res) => {
                setIsPending(false);
                navigate('/');
            });
        }, 1000);

    }

    return (
        <div className="p-2">
            <h2 className="text-xl text-red-500 font-medium">Create a post</h2>
            <form onSubmit={ handleSubmit }>
                <ul>
                    <li className="mt-5 flex flex-col">
                        <label className="">Blog title: </label>
                        <input
                            className="border-2 border-black rounded-md"
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            required />
                    </li>
                    <li className="mt-5 flex flex-col">
                        <label>Blog body: </label>
                        <textarea
                            className="border-2 border-black rounded-md"
                            onChange={(e) => setBody(e.target.value)}
                            required></textarea>
                    </li>
                    <li className="mt-5 flex flex-col">
                        <label>Blog author: </label>
                        <select
                            className="border-2 border-black rounded-md"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}>
                            <option value="mario">mario</option>
                            <option value="jack">jack</option>
                            <option value="polly">polly</option>
                        </select>
                    </li>
                    <li className="mt-5 flex flex-col">
                        {!isPending && <button className="rounded-md p-2 w-40 m-auto hover:shadow-md bg-red-700 text-white">Add Blog</button>}
                        {isPending && <button className="rounded-md p-2 w-40 m-auto hover:shadow-md bg-red-300 text-white">Adding Blog</button>}
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default Create;