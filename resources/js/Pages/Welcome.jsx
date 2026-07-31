//import PrimaryButton from '@/Components/PrimaryButton';
import { Head } from '@inertiajs/react';

import GuestLayout from "@/Layouts/GuestLayout";
import Hero from '@/Components/Home/Hero';
import Notice from '@/Components/Home/Notice';


 const Welcome=({ auth, laravelVersion, phpVersion })=> {


    return (
        <GuestLayout>
            <div className="w-full min-w-0 max-w-full">
                <Head title="home" />
                <Hero />
                <Notice />
            </div>
        </GuestLayout>
    );
}
export default Welcome;