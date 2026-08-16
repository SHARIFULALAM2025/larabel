import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { navData } from "@/data/navItem";
import ApplicationLogo from "./ApplicationLogo";
import ThemeToggle from "./ThemeToggle";
import NavDropdown from "./NavDropdown";
import NavLink from "./NavLink";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import PrimaryButton from "./PrimaryButton";

export default function Navbar() {
    const { url } = usePage();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openNested, setOpenNested] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
        setOpenNested(null);
    };

    const toggleNested = (id) => {
        setOpenNested(openNested === id ? null : id);
    };

    return (
        <nav className="bg-background border-b border-border w-full shadow-sm fixed top-0 z-50">
            <div className=" px-4">
                <div className="flex justify-between items-center h-14">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link href="/" className="flex items-center gap-2">

                            <ApplicationLogo className="h-9 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navData.map((item) => {
                            const isActive = url === item.path;

                            if (item.hasDropdown) {
                                return (
                                    <NavDropdown
                                        key={item.id}
                                        item={item}
                                        active={isActive}
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    key={item.id}
                                    href={item.path || "#"}
                                    active={isActive}
                                >
                                    {item.Name}
                                </NavLink>
                            );
                        })}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        <PrimaryButton
                            href="/login"
                            onClick={() => setMobileOpen(false)}
                            className="hidden sm:inline-flex items-center justify-center"
                        >
                            Sign In
                        </PrimaryButton>

                        {/* Hamburger Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-md text-foreground hover:bg-accent/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <HiOutlineX className="w-6 h-6" />
                            ) : (
                                <HiOutlineMenuAlt3 className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* ==================== Mobile Menu ==================== */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileOpen
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <div className="border-t border-border bg-card px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
                    {navData.map((item) => {
                        const isActive = url === item.path;

                        if (!item.hasDropdown) {
                            return (
                                <Link
                                    key={item.id}
                                    href={item.path || "#"}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                                        isActive
                                            ? "bg-accent/10 text-accent"
                                            : "text-foreground hover:bg-accent/10 hover:text-accent"
                                    }`}
                                >
                                    {item.Name}
                                </Link>
                            );
                        }

                        return (
                            <div key={item.id} className="rounded-lg">
                                <button
                                    onClick={() => toggleDropdown(item.id)}
                                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                                        openDropdown === item.id
                                            ? "bg-accent/10 text-accent"
                                            : "text-foreground hover:bg-accent/10 hover:text-accent"
                                    }`}
                                >
                                    <span>{item.Name}</span>
                                    <IoIosArrowDown
                                        className={`text-sm transition-transform duration-300 ${
                                            openDropdown === item.id
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>

                                {/* Sub Links */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        openDropdown === item.id
                                            ? "max-h-250 opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="pl-3 py-1 space-y-1">
                                        {item.subLink?.map((sub) => (
                                            <div key={sub.id}>
                                                {sub.hasNested ? (
                                                    <>
                                                        <button
                                                            onClick={() =>
                                                                toggleNested(
                                                                    sub.id,
                                                                )
                                                            }
                                                            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                                                openNested ===
                                                                sub.id
                                                                    ? "bg-accent/10 text-accent"
                                                                    : "text-foreground/80 hover:bg-accent/10 hover:text-accent"
                                                            }`}
                                                        >
                                                            <span>
                                                                {sub.Name}
                                                            </span>
                                                            <IoIosArrowDown
                                                                className={`text-xs transition-transform duration-300 ${
                                                                    openNested ===
                                                                    sub.id
                                                                        ? "rotate-180"
                                                                        : ""
                                                                }`}
                                                            />
                                                        </button>

                                                        {/* Nested Links */}
                                                        <div
                                                            className={`overflow-hidden transition-all duration-300 ${
                                                                openNested ===
                                                                sub.id
                                                                    ? "max-h-200 opacity-100"
                                                                    : "max-h-0 opacity-0"
                                                            }`}
                                                        >
                                                            <div className="pl-3 py-1 space-y-0.5">
                                                                {sub.nestedLink?.map(
                                                                    (
                                                                        nested,
                                                                    ) => (
                                                                        <Link
                                                                            key={
                                                                                nested.id
                                                                            }
                                                                            href={
                                                                                nested.path ||
                                                                                "#"
                                                                            }
                                                                            onClick={() =>
                                                                                setMobileOpen(
                                                                                    false,
                                                                                )
                                                                            }
                                                                            className="block px-3 py-2 rounded-lg text-sm text-foreground/70 hover:bg-accent/10 hover:text-accent transition-colors"
                                                                        >
                                                                            {
                                                                                nested.Name
                                                                            }
                                                                        </Link>
                                                                    ),
                                                                )}
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={sub.path || "#"}
                                                        onClick={() =>
                                                            setMobileOpen(false)
                                                        }
                                                        className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors"
                                                    >
                                                        {sub.Name}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Mobile Register Button */}
                    <div className="pt-3 pb-2">
                        <PrimaryButton
                            href="/register"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-center w-full"
                        >
                            Register
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </nav>
    );
}
