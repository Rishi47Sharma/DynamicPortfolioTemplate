import { useEffect, useState } from "react";
import { transformUserDataObj } from "../utils/transformData";
import { userServices } from "../services";

const useFetchUserData = (userId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dynamicData, setDynamicData] = useState({ socialData: [] });
  const [badApiData, setbadApiData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const userData = await userServices.fetchUserData(userId);
        setDynamicData(transformUserDataObj(userData));
      } catch (error) {
        setbadApiData(error);
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, [userId]);
  return { isLoading, dynamicData, badApiData };
};
export default useFetchUserData;
