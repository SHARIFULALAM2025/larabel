import { Link } from "@inertiajs/react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export default function NavDropdown({ item, active = false }) {
    return (
        <div className="relative group">
            {/* Top Level Button */}
            <Link
                href={item.path || "#"}
                className={`px-2.5 xl:px-3 py-2 flex items-center gap-1 text-sm xl:text-base font-semibold transition-colors ${
                    active
                        ? "border-primary text-accent"
                        : "border-transparent text-foreground hover:text-accent hover:border-accent"
                }`}
            >
                {item.Name}
                <IoIosArrowDown className="text-xs text-foreground group-hover:rotate-180 transition-transform duration-300" />
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                {/* Arrow tip */}
                <div className="ml-5 w-2.5 h-2.5 bg-foreground  border-t  border-l border-border rotate-45 absolute -top-1 left-0 z-50"></div>

                <div className="min-w-60 shadow-xl rounded-md border border-border py-2 bg-card">
                    {item.subLink?.map((sub) => (
                        <div key={sub.id} className="relative group/nested">
                            <Link
                                href={sub.path || "#"}
                                className="flex items-center justify-between px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent/10 hover:text-accent transition-all"
                            >
                                {sub.Name}
                                {sub.hasNested && (
                                    <IoIosArrowForward className="text-xs" />
                                )}
                            </Link>

                            {/* Nested Dropdown */}
                            {sub.hasNested && (
                                <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 transform translate-x-2 group-hover/nested:translate-x-0">
                                    <div className="bg-card min-w-64 shadow-xl rounded-md border border-border py-2 max-h-96 overflow-y-auto">
                                        {sub.nestedLink?.map((nested) => (
                                            <Link
                                                key={nested.id}
                                                href={nested.path || "#"}
                                                className="block px-5 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors"
                                            >
                                                {nested.Name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
