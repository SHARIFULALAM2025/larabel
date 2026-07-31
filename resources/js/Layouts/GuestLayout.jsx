import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function GuestLayout({ children }) {
    return (
        <div className="w-full min-w-0 max-w-full overflow-x-hidden">
            <Navbar />
            <div className="w-full min-w-0 max-w-full">{children}</div>
            <Footer />
        </div>
    );
}
