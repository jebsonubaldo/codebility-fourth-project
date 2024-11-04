"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "../components/Authentication";
import Loading from "../components/Loading";

export default function Login() {
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("https://fakestoreapi.com/users");
            const users = await response.json();

            const user = users.find(
                (user) => user.username === username && user.password === password
            );

            if (user) {
                login();
                localStorage.setItem("user", JSON.stringify(user));
                router.push("/");
            } else {
                setError("Invalid username or password.");
                setLoading(false);
            }
        } catch (err) {
            console.error("Error logging in:", err);
            setError("An error occurred. Please try again later.");
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="bg-gray-50">
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <Image
                        className="mx-auto h-12 w-auto"
                        src="/images/logo2.png"
                        alt="UrbanShop"
                        width="200"
                        height="200"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            {error && <p className="text-red-500 text-sm">{error}</p>}

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <div>
                                    <a
                                        href="#"
                                        className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Sign in with Google</span>
                                        <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 48 48">
                                            <path
                                                fill="#4285F4"
                                                d="M24 9.5c3.14 0 5.85 1.16 8 3.06l5.9-5.9C34.74 3.73 29.7 1.5 24 1.5 14.82 1.5 7.1 7.56 4.1 15.44l6.92 5.37C12.64 15.6 17.84 9.5 24 9.5z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M47.9 24.5c0-1.56-.14-3.07-.4-4.5H24v9h13.6c-.64 3.26-2.56 6.06-5.4 7.94l6.9 5.38c4.06-3.76 6.8-9.34 6.8-15.82z"
                                            />
                                            <path
                                                fill="#FBBC05"
                                                d="M10.82 28.68c-.96-2.88-.96-6.04 0-8.92l-6.9-5.38c-2.66 5.32-2.66 11.84 0 17.16l6.9-5.38z"
                                            />
                                            <path
                                                fill="#EA4335"
                                                d="M24 47c5.7 0 10.74-1.96 14.6-5.3l-6.9-5.38C29.84 37.84 26.02 39 24 39c-6.16 0-11.36-6.1-12.98-12.18l-6.92 5.37C7.1 40.44 14.82 46.5 24 46.5z"
                                            />
                                        </svg>
                                    </a>
                                </div>

                                <div>
                                    <a
                                        href="#"
                                        className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Sign in with Facebook</span>
                                        <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                fill="#1877F2"
                                                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.493-3.89 3.777-3.89 1.095 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.891h-2.33v6.987C16.343 19.128 20 14.991 20 10z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
