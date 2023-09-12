/**
 * renders a form for user to sign in
 * sign in button signs in user
 * cancel button returns user to list of courses
 */
import { useRef } from "react";

const UserSignIn = () => {
    // State
    const email = useRef(null);
    const password = useRef(null);

    return (
        <>
            <div className="form--centered">
                <h2>Sign In</h2>
                <form>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        ref={email}
                        defaultValue=""
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    ref={password}
                    defaultValue="" />
                    <button className="button" type="submit">
                        Sign In
                    </button>
                    <button
                        className="button button-secondary"
                        onclick="event.preventDefault(); location.href='index.html';"
                    >
                        Cancel
                    </button>
                </form>
                <p>
                    Don't have a user account? Click here to{" "}
                    <a href="sign-up.html">sign up</a>!
                </p>
            </div>
        </>

    )
}

export default UserSignIn;
