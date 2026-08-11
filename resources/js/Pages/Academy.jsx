
import React from "react";

import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import PageContainer from "@/Components/PageContainer";



const Academy = () => {
    return (
        <>
            <Head title="Academy" />
            <PageContainer>
                <h1 className="text-4xl md:text-6xl font-bold text-taupe-300">
                    This is Academy Page
                </h1>
            </PageContainer>
        </>
    );
};

Academy.layout = (page) => <GuestLayout title="Academy">{page}</GuestLayout>;
export default  Academy ;

