import React, { useEffect, useState } from "react";
import LPELoading from "app/components/loading";
import DataTable from "template/adminTemplate/components/table";

function UserManager() {
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
        <div className="container">
          <DataTable />
        </div>
      )}
    </>
  );
}

export default UserManager;
