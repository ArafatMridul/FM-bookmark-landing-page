import React from "react";
import ExtensionItem from "./ExtensionItem";
import chrome from "/images/logo-chrome.svg";
import firefox from "/images/logo-firefox.svg";
import opera from "/images/logo-opera.svg";

const Extension = () => {
    return (
        <section>
            <div className="wrapper">
                <div className="mt-38 lg:mt-60">
                    <div className="text-center">
                        <h2 className="text-2xl lg:text-[2rem] font-medium text-n-b">
                            Download the extension
                        </h2>
                    </div>
                    <div className="text-center mt-3 tracking-tight lg:w-[580px] lg:mx-auto text-[1.01rem] lg:text-[1.15rem] lg:tracking-wide lg:leading-[1.6]">
                        <p className="text-n-b/50">
                            We’ve got more browsers in the pipeline. Please do
                            let us know if you’ve got a favourite you’d like us
                            to prioritize.
                        </p>
                    </div>
                </div>
                <div className="mt-12 lg:mt-20 grid gap-12 lg:gap-7 lg:grid-cols-3 sm:px-25 lg:px-23">
                    <ExtensionItem
                        icon={chrome}
                        title="Add to Chrome"
                        subTitle="Minimum version 62"
                    />
                    <ExtensionItem
                        icon={firefox}
                        title="Add to Firefox"
                        subTitle="Minimum version 55"
                        className="lg:mt-10"
                    />
                    <ExtensionItem
                        icon={opera}
                        title="Add to Opera"
                        subTitle="Minimum version 46"
                        className="lg:mt-20"
                    />
                </div>
            </div>
        </section>
    );
};

export default Extension;
