"use client";

import Link from "next/link";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async() => {
        try {
            // Sign in to Firebase with GitHub authentication
            await gitHubSignIn();
        } catch (err) {
            console.error(err);
            alert("Log-in failed. Please try again.")
        }
    };

    const handleLogout = async() => {
        try {
            // Sign out of Firebase
            await firebaseSignOut();
        } catch (err) {
            console.error(err);
            alert("Log-out failed. Please try again.")
        }
    }

    return (
        <main>
        <h1>Week 9 — Login</h1>

        {!user ? (
            <div>
            <p>Sign in with GitHub to access your shopping list.</p>
            <button onClick={handleLogin}>Sign in with GitHub</button>
            </div>
        ) : (
            <div>
            <p>
                {/* Display some of the user's information */}
                Welcome, {user.displayName ?? "User"} ({user.email})
            </p>
            <div>
                <Link href="/week-9/shopping-list">Go to Shopping List</Link>
                <button onClick={handleLogout}>Log out</button>
            </div>
            </div>
        )}
        </main>
    );
}