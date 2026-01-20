import { useEffect, useState } from "react";

import { setUser } from "../utils/auth";
// import { Loader } from "lucide-react";
import { icons } from "../utils/icons";

// A component that manages a loading state
// It displays a loading state true while waiting for user data to be loaded,
// and renders the child components once the data is successfully loaded.
const MainWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handler = async () => {
      setLoading(true);

      await setUser();

      setLoading(false);
    };
    handler();
  }, []);

  return (
    <main className="min-h-screen transition-all duration-500 overflow-y-auto">
      {loading ? (
        <div className="flex justify-center items-center py-5 px-4 space-x-1">
          {icons.loading} Loading…
        </div>
      ) : (
        children
      )}
    </main>
  );
};

export default MainWrapper;
