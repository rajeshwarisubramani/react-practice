import { useUserProfile } from "./useUserProfile";

export const GitHubProfile = ({ username = "octocat" }) => {

 const { user, loading, error } = useUserProfile(username);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!user) return null;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "300px",
      }}
    >
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <ul>
        <li>
          <strong>Followers:</strong> {user.followers}
        </li>
        <li>
          <strong>Following:</strong> {user.following}
        </li>
        <li>
          <strong>Public Repos:</strong> {user.public_repos}
        </li>
      </ul>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
};
