import { Link } from "@inertiajs/react";
import {
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaArrowUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const socialLinks = [
        {
            Icon: FaFacebook,
            href: "https://www.facebook.com/profile.php?id=61577170528426",
        },
        {
            Icon: FaLinkedin,
            href: "https://www.linkedin.com/in/sharifulalam-dev",
        },
        {
            Icon: FaYoutube,
            href: "https://www.youtube.com/@THEBANGLADESHTIMES-x4k",
        },
        {
            Icon: FaXTwitter,
            href: "https://twitter.com",
        },
    ];

    const courses = [
        "প্রোগ্রামিং",
        "গ্রাফিক ডিজাইন",
        "ডিজিটাল মার্কেটিং",
        "ফ্রিল্যান্সিং",
    ];

    const company = ["আমাদের সম্পর্কে", "শিক্ষক হও", "ক্যারিয়ার", "ব্লগ"];

    return (
        <footer className="bg-foreground text-background pt-12 sm:pt-16 pb-8 w-full border-t border-border">
            <div className="">
                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-background/10">
                    {/* Column 1: Brand */}
                    <div className="sm:col-span-2 lg:col-span-4 space-y-4 sm:space-y-5">
                        <Link href="/" className="flex items-center gap-2">
                            <img
                                src="/images/profile-pic.png"
                                alt="Sharif Academy"
                                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                            />
                            <h2 className="font-display text-xl md:text-2xl font-bold text-background">
                                Sharif Academy
                            </h2>
                        </Link>

                        <p className="text-sm leading-relaxed text-background/70 max-w-sm">
                            বাংলাদেশের মানুষের জন্য বাংলায় মানসম্পন্ন শিক্ষা —
                            এটাই আমাদের লক্ষ্য। আমাদের দক্ষ মেন্টরদের সাথে আজই
                            আপনার লার্নিং জার্নি শুরু করুন।
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-1">
                            {socialLinks.map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-background/70 hover:text-background border border-background/15 hover:border-accent hover:bg-accent/20 transition-all duration-300 group"
                                >
                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Courses */}
                    <div className="lg:col-span-2">
                        <h3 className="font-display text-background font-semibold text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 relative inline-block ">
                            কোর্সমূহ
                        </h3>
                        <ul className="space-y-2.5 sm:space-y-3 text-sm text-background/70">
                            {courses.map((label) => (
                                <li key={label}>
                                    <a
                                        href="#"
                                        className="hover:text-accent flex items-center gap-1 group transition-colors duration-200"
                                    >
                                        <span>{label}</span>
                                        <FaArrowUp className="w-3 h-3 rotate-45 opacity-0 group-hover:opacity-100 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div className="lg:col-span-2">
                        <h3 className="font-display text-background font-semibold text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 relative inline-block ">
                            কোম্পানি
                        </h3>
                        <ul className="space-y-2.5 sm:space-y-3 text-sm text-background/70">
                            {company.map((label) => (
                                <li key={label}>
                                    <a
                                        href="#"
                                        className="hover:text-accent transition-colors duration-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="sm:col-span-2 lg:col-span-4">
                        <h3 className="font-display text-background font-semibold text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 relative inline-block">
                            যোগাযোগ
                        </h3>
                        <ul className="space-y-3 sm:space-y-4 text-sm">
                            <li className="flex items-start gap-3 p-3 rounded-xl bg-background/5 border border-background/10">
                                <FaEnvelope className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <div className="space-y-0.5 min-w-0">
                                    <span className="text-xs text-background/50 block">
                                        ইমেইল করুন
                                    </span>
                                    <a
                                        href="mailto:sharifulalam2025@gmail.com"
                                        className="text-background hover:text-accent transition-colors font-medium break-all"
                                    >
                                        sharifulalam2025@gmail.com
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-start gap-3 p-3 rounded-xl bg-background/5 border border-background/10">
                                <FaPhoneAlt className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <div className="space-y-0.5">
                                    <span className="text-xs text-background/50 block">
                                        হটলাইন নম্বর
                                    </span>
                                    <a
                                        href="tel:+8801829197321"
                                        className="text-background hover:text-accent transition-colors font-medium"
                                    >
                                        +88 1829-197321
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-center gap-3 px-3">
                                <FaMapMarkerAlt className="w-5 h-5 text-accent shrink-0" />
                                <span className="text-background/80 font-medium">
                                    ঢাকা, বাংলাদেশ
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-background/50">
                    <div className="text-center sm:text-left">
                        © {new Date().getFullYear()} শরীফ একাডেমি. অল রাইটস
                        রিজার্ভড।
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6">
                        <a
                            href="#"
                            className="hover:text-background transition-colors"
                        >
                            প্রাইভেসি পলিসি
                        </a>
                        <a
                            href="#"
                            className="hover:text-background transition-colors"
                        >
                            টার্মস অ্যান্ড কন্ডিশনস
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
