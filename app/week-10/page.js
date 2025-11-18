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
        <main className = "flex flex-col items-center justify-center min-h-screen px-6">
            <div className = "w-full max-w-md text-center bg-[#93B7BE] dark:bg-[#2D3047] shadow-lg rounded-2xl p-8">
                <h1 className ="text-3xl font-bold text-[#2D3047] dark:text-[#93B7BE] mb-10">
                LOGIN
                </h1>

                {!user ? (
                    <div className = "space-y-4">
                        <p className = "text-[#2D3047] dark:text-[#E8E9EB]">
                        Sign in with GitHub to access your shopping list.
                        </p>
                        <button
                        onClick={handleLogin}
                        className ="w-full rounded-lg bg-[#2D3047] py-2 font-semibold text-[#93B7BE] shadow transition hover:opacity-80
                                    dark:bg-[#93B7BE] dark:text-[#2D3047]"
                        >
                        Sign in with GitHub
                        </button>
                    </div>
                ) : (
                    <div className =" space-y-6">
                        <p className = "text-[#2D3047] dark:text-[#E8E9EB]">
                        Welcome,{" "}
                        <span className = "font-semibold text-[#2D3047] dark:text-[#93B7BE]">
                            {user.displayName ?? "User"}
                        </span>{" "}
                        ({user.email})
                        </p>

                        <div className = "flex justify-center gap-4">
                            <Link
                                href = "/week-9/shopping-list"
                                className = "rounded-lg bg-[#2D3047] dark:bg-[#93B7BE] text-[#93B7BE] dark:text-[#2D3047] px-4 py-2 font-medium shadow transition hover:opacity-80"
                            >
                                Go to Shopping List
                            </Link>

                            <button
                                onClick={handleLogout}
                                className = "rounded-lg border border-[#2D3047] dark:border-[#93B7BE] text-[#2D3047] dark:text-[#E8E9EB] px-4 py-2 font-medium hover:bg-red-400 hover:text-white hover:opacity-70"
                            >
                                Log out
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}