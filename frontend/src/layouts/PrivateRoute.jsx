import {Navigate} from "react-router-dom";
import {userAuthInformationStore} from "../store/auth";

//a private route that checks if user is logged in
//  if not user will navigate to login page
const PrivateRoute = ({ children }) => {
    const loggedIn = userAuthInformationStore((state) => state.isLoggedIn)();
    
    return loggedIn?<>{children}</>:<Navigate to={"/login/"}/>;
}

export default PrivateRoute;