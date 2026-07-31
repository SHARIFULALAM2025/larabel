import { useTheme } from "@/hooks/useTheme";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="md:py-2 py-1.5 px-2  md:px-2.5  rounded-md text-foreground hover:bg-border/40 transition"
        >
            {theme === "dark" ? <FaSun className="text-accent" /> : <FaMoon />}
        </button>
    );
}
