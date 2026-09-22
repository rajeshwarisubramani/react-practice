import  { useState, useEffect } from "react";

export const useUserProfile = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Create the async function inside the effect
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
          {
            headers: {
              Accept: "application/vnd.github+json",
              "X-GitHub-Api-Version": "2022-11-28",
            },
          },
        );

        // Check if the response status is OK (e.g., 200)
        if (!response.ok) {
          throw new Error(`User not found (${response.status})`);
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // 2. Execute the function immediately
    fetchUserData();
  }, [username]); // Re-run if username prop changes

  return { user, loading, error };
}
