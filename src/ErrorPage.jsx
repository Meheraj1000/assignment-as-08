import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center m-20 gap-7">
           <div>
           <h1 className="text-7xl text-red-700">404</h1>
           <p className="">Oops...Page npt found</p>
           </div>
           <div>
            <Link to='/' className="btn bg-cyan-400">Go to Home page</Link>
           </div>
        </div>
    );
};

export default ErrorPage;