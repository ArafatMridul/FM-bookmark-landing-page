import React from "react";
import Button from "./Button";
import dotImg from "/images/bg-dots.svg";
import { twMerge } from "tailwind-merge";

const ExtensionItem = ({ icon, title, subTitle, className }) => {
    return (
        <div className={twMerge("h-fit flex flex-col rounded-xl shadow-lg pt-10 lg:pt-6 pb-6 hover:scale-[1.05] transition-all duration-500 cursor-pointer", className)}>
            <div>
                <div>
                    <img src={icon} alt="" className="mx-auto" />
                </div>
                <div className="text-center mt-8">
                    <h3 className="text-xl font-medium text-n-b">{title}</h3>
                </div>
                <div className="text-center mt-1">
                    <p className="text-n-b/50">{subTitle}</p>
                </div>
            </div>
            <div className="mt-8">
                <img src={dotImg} alt="" className="w-full" />
            </div>
            <div className="mt-6 px-10 lg:px-8 flex">
                <Button type="primary" className="w-full text-center">Add & Install Extension</Button>
            </div>
        </div>
    );
};

export default ExtensionItem;
