import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                " text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-primary text-foreground focus:border-accent"
                    : "border-transparent hover:text-accent  hover:border-accent text-foreground focus:border-border focus:text-foreground") +
                className
            }
        >
            {children}
        </Link>
    );
}
