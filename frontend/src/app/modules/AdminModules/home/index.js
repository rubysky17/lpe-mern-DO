import React, { useState, useEffect } from "react";
import LPELoading from "app/components/loading";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Loading Data
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <LPELoading />
      ) : (
        <div>
          <p>DashBoard</p>
        </div>
      )}
    </>
  );
}

export default Home;
