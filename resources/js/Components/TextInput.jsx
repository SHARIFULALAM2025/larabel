import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, text, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
           required
            {...props}
            type={type}
            className={
                "w-full border text-foreground border-border bg-transparent rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-accent transition" +
                className
            }
            ref={localRef}
        />
    );
});
