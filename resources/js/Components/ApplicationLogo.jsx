export default function ApplicationLogo({ className = "", ...props }) {
    return (
        <img
            src="/images/profile-pic.png"
            alt="Sharif Academy Logo"
            className={className}
            {...props}
        />
    );
}
