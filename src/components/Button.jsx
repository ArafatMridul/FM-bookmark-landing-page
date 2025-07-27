import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, type, className }) => {
    return (
        <a
            className={twMerge(
                "text-sm font-medium text-n-g px-5 py-4 lg:px-7.75 lg:py-3 rounded-sm lg:rounded-md shadow-lg transition-all duration-300 cursor-pointer",
                type === "danger"
                    ? "uppercase bg-p-r tracking-widest hover:bg-n-g hover:text-p-r hover:ring-2 hover:ring-pr"
                    : type === "primary"
                    ? "bg-p-b lg:px-7 hover:bg-n-g hover:ring-2 hover:ring-p-b hover:text-p-b"
                    : "bg-n-g text-n-b hover:ring-2 hover:ring-n-b",
                className
            )}
        >
            {children}
        </a>
    );
};

export default Button;
