import { Link, useLocation } from "react-router-dom";

export default function AuthCTA(){
    const {pathname} = useLocation();
    const isLogin = pathname.includes("login");
    
  

    return(
        <div className="pb-5">
        <h1 className="mb-1 fw-bold">
            {isLogin ?"Sign in": "Sign up"}
        </h1>
        <span>
            {isLogin?(
                <>
                Don’t have an account?
                <Link to="/register/" className="ms-1">Sign up</Link>
                </>
            ) : (
             <>
             Already have an account?
             <Link to="/login/">Sign in</Link>
             </>   
            )}

        </span>
        </div>
    );
}
