import PageContainer from "@/Components/PageContainer";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Bangla_Literature_and_History = () => {
    return (
        <>
            <Head title="Bangla Literature and History" />
            <PageContainer>
                <h1 className="text-4xl md:text-6xl font-bold text-taupe-300">
                    This is Bangla Literature and History Page
                </h1>
            </PageContainer>
        </>
    );
};

Bangla_Literature_and_History.layout = (page) => (
    <GuestLayout>{page}</GuestLayout>
);
export default Bangla_Literature_and_History;
