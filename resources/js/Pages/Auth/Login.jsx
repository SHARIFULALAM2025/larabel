import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login({ status, canResetPassword }) {
    const [eye, setEye] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="relative bg-background min-h-screen px-4  flex items-center justify-center">
                <div className="relative w-full max-w-xl mx-auto shadow-2xl bg-card/95 p-8 border border-border backdrop-blur-md rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-foreground mb-6">
                        Welcome back
                    </h2>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-success text-center">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-4">
                        {/* Email */}
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    placeholder="Enter your email"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <div className="relative">
                                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                                <TextInput
                                    id="password"
                                    type={eye ? "text" : "password"}
                                    name="password"
                                    value={data.password}
                                    autoComplete="current-password"
                                    placeholder="Password..."
                                    className="pr-10"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />
                                <div
                                    onClick={() => setEye(!eye)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted cursor-pointer"
                                >
                                    {eye ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        {/* Remember + Forgot password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-foreground">
                                    Remember me
                                </span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="text-sm text-accent hover:underline"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>

                        {/* Submit */}
                        <PrimaryButton
                            type="submit"
                            className="w-full py-3"
                            disabled={processing}
                        >
                            {processing ? "Logging in..." : "Log in"}
                        </PrimaryButton>
                    </form>

                    <p className="text-center text-sm text-foreground mt-4">
                        Don't have an account?
                        <Link
                            href={route("register")}
                            className="text-accent font-bold hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
}
