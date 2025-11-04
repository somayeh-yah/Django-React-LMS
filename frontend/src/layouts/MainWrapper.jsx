import { useEffect, useState } from "react";
import { setUser } from "../utils/auth";

// A component that manages a loading state
// It displays a loading state true while waiting for user data to be loaded, 
// and renders the child components once the data is successfully loaded.
const MainWrapper = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const handler = async () => {
            setLoading(true);

            await setUser();

            setLoading(false);
        };
        handler();
    }, []);

    return <>{ loading ? null: children }</>
};

export default MainWrapper;