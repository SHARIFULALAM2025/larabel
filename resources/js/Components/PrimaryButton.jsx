import { Link } from "@inertiajs/react";

export default function PrimaryButton({
    className = "",
    disabled = false,
    children,
    href,
    ...props
}) {
    const baseClass =
        " bg-success text-background px-4 py-2.5 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 " +
        (disabled ? "opacity-50 cursor-not-allowed " : "") +
        className;

    if (href) {
        return (
            <Link href={href} className={baseClass} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={baseClass} disabled={disabled} {...props}>
            {children}
        </button>
    );
}
