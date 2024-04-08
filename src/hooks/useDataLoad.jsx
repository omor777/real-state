import { useEffect, useState } from "react";

const useDataLoad = () => {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/estateData.json")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setAllData(data);
      });
  }, []);

  return { isLoading, allData}; 
};

export default useDataLoad;
