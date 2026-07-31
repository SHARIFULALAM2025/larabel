import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";

export default function Register() {
    const [eye, setEye] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="relative min-h-screen bg-background px-4 py-10 flex items-center justify-center">
                <div className="relative w-full max-w-xl mx-auto bg-card border border-border rounded-xl shadow-lg p-8 backdrop-blur-md">
                    <h2 className="font-display  text-2xl font-bold text-center text-foreground mb-6">
                        Create an account
                    </h2>

                    <form onSubmit={submit} className="space-y-5">
                        {/* Name */}
                        <div>
                            <InputLabel htmlFor="name" value="Name*" />
                            <div className="relative mt-1">
                                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    autoComplete="name"
                                    autoFocus
                                    placeholder="Enter Name"
                                    className="pl-10"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <InputLabel htmlFor="email" value="Email*" />
                            <div className="relative mt-1">
                                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    placeholder="Enter your email"
                                    className="pl-10"
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

                        {/* Password + Confirm */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <InputLabel
                                    htmlFor="password"
                                    value="Password*"
                                />
                                <div className="relative mt-1">
                                    <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                                    <TextInput
                                        id="password"
                                        type={eye ? "text" : "password"}
                                        name="password"
                                        value={data.password}
                                        autoComplete="new-password"
                                        placeholder="Password..."
                                        className="pl-10 pr-10"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setEye(!eye)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors"
                                        aria-label={
                                            eye
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {eye ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Confirm Password*"
                                />
                                <div className="relative mt-1">
                                    <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                                    <TextInput
                                        id="password_confirmation"
                                        type={eye ? "text" : "password"}
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        autoComplete="new-password"
                                        placeholder="Confirm Password"
                                        className="pl-10 pr-10"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value,
                                            )
                                        }
                                        required
                                    />
                                </div>
                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <PrimaryButton
                            type="submit"
                            className="w-full py-3 mt-2"
                            disabled={processing}
                        >
                            {processing ? "Signing up..." : "Sign Up"}
                        </PrimaryButton>
                    </form>

                    <p className="text-center text-sm text-muted mt-6">
                        Already have an account?{" "}
                        <Link
                            href={route("login")}
                            className="text-accent font-semibold hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
}
