import { useState } from "react";
import { GitHubProfile } from "./GitHubProfile";

export const LandingPage = () => {
    const [username, setUserName] = useState('');
    return (
        <div>
            <h1>Find User</h1>
            <form>
                <div>
                    <label htmlFor="username"></label>
                    <input type="text" name="username" id="username"
                    placeholder="Enter username" 
                    onChange={(event) => {
                        setUserName(event.target.value)

                    }}/>
                </div>
            </form>

            <div>
                {
                username ?
                <GitHubProfile username={username}/> :
                <p>Enter the username</p>
                }
            </div>


        </div>
    );
}