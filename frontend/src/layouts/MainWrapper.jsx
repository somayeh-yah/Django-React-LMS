import { useEffect, useState } from "react";
import { setUser } from "../utils/auth";
import { Container } from "lucide-react";

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
    <main className="flex-1 overflow-y-auto">
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <p>Loading...</p>
        </div>
      ) : (
        children
      )}
    </main>
  );
};

export default MainWrapper;
