import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="">
            <h1 className="">Sorry</h1>
            <p className="">This page cannot be found</p>
            <Link to={'/'} className="text-blue-500 hover:text-blue-700 underline">Back to the home page...</Link>
        </div>
     );
}
 
export default NotFound;