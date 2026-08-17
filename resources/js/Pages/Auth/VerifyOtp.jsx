import GuestLayout from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useRef } from "react";

export default function VerifyOtp() {
    const { status } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        otp: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("verification.otp.verify"));
    };

    const resend = () => {
        post(route("verification.otp.resend"));
    };

    return (
        <GuestLayout>
            <Head title="Verify Email" />

            <div className="max-w-md mx-auto mt-10 text-center">
                <h2 className="text-2xl font-bold mb-4">
                    Enter Verification Code
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                    We've sent a 6-digit code to your email. Please enter it
                    below.
                </p>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    <input
                        type="text"
                        maxLength={6}
                        value={data.otp}
                        onChange={(e) => setData("otp", e.target.value)}
                        className="w-full text-center text-2xl tracking-widest border rounded-md py-3 px-4"
                        placeholder="000000"
                        autoFocus
                    />
                    <InputError message={errors.otp} className="mt-2" />

                    <PrimaryButton
                        className="w-full mt-4 justify-center"
                        disabled={processing}
                    >
                        Verify
                    </PrimaryButton>
                </form>

                <button
                    onClick={resend}
                    className="mt-4 text-sm text-indigo-600 hover:underline"
                >
                    Resend Code
                </button>
            </div>
        </GuestLayout>
    );
}
