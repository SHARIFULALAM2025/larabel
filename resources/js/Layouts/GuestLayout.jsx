import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function GuestLayout({ children }) {
    return (
        <div className="w-full min-w-0 max-w-full ">
            <Navbar />
            <div className="w-full min-w-0 max-w-full pt-14">{children}</div>
            <Footer />
        </div>
    );
}
