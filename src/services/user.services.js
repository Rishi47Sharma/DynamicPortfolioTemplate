const baseUrl = "https://portfolio-backend-30mp.onrender.com/api/v1/get/user";

//
export const fetchUserData = async (userID) => {
  try {
    const response = await fetch(`${baseUrl}/${userID}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const userData = await response.json();
    return userData?.user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
