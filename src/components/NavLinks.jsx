import React from "react";
import { twMerge } from "tailwind-merge";

const NavLinks = ({ className }) => {
    return (
        <nav>
            <ul
                className={twMerge(
                    "flex items-center gap-12 uppercase text-n-b tracking-wider text-sm",
                    className
                )}
            >
                <li className="hover:text-p-r cursor-pointer transition-all duration-300">
                    features
                </li>
                <li className="hover:text-p-r cursor-pointer transition-all duration-300">
                    pricing
                </li>
                <li className="hover:text-p-r cursor-pointer transition-all duration-300">
                    contact
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
