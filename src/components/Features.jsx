import React, { useState } from "react";
import tab1Img from "/images/illustration-features-tab-1.svg";
import tab2Img from "/images/illustration-features-tab-2.svg";
import tab3Img from "/images/illustration-features-tab-3.svg";
import Button from "./Button";

const tabHeadings = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];
const tabContents = [
    {
        image: tab1Img,
        heading: "Bookmark in one click",
        content:
            "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
        image: tab2Img,
        heading: "Intelligent search",
        content:
            "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
        image: tab3Img,
        heading: "Share your bookmarks",
        content:
            "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
];

const Features = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const content = tabContents[selectedTab];
    return (
        <section>
            <div className="wrapper mt-37 lg:mt-50">
                <div>
                    <div className="text-center">
                        <h2 className="text-2xl lg:text-[2rem] font-medium text-n-b">
                            Features
                        </h2>
                    </div>
                    <div className="text-center mt-3 tracking-tight lg:w-[580px] lg:mx-auto text-[1.01rem] lg:text-[1.15rem] lg:tracking-wide lg:leading-[1.6]">
                        <p className="text-n-b/50">
                            Our aim is to make it quick and easy for you to
                            access your favourite websites. Your bookmarks sync
                            between your devices so you can access them on the
                            go.
                        </p>
                    </div>
                </div>
                <div className="relative mt-10 lg:mt-13">
                    <div className="lg:w-[740px] lg:mx-auto flex flex-col items-center lg:flex-row lg:justify-center lg:gap-28 relative after-content-[''] after:absolute after:left-0 after:-bottom-2 after:h-px after:bg-n-b/20 after:lg:w-full">
                        {tabHeadings.map((heading, index) => (
                            <div
                                onClick={() => setSelectedTab(index)}
                                key={index}
                                className="w-full lg:w-auto text-center border-t-[1px] border-n-b/20 last:border-b-[1px] last:border-n-b/20 lg:border-none"
                            >
                                <h3
                                    className={`mx-auto py-4 w-fit text-[1.02rem] lg:text-[1.1rem] cursor-pointer relative after:content-[''] after:absolute after:left-1 lg:after:-left-[25%] after:bottom-0 lg:after:-bottom-2 after:w-0 after:h-1 after:bg-p-r hover:after:w-[93%] hover:lg:after:w-[150%] after:transition-all after:duration-300 hover:text-p-r transition-all duration-300 ${
                                        selectedTab === index
                                            ? "text-n-b/90 after:w-[93%] lg:after:w-[150%]"
                                            : "text-n-b/70"
                                    }`}
                                >
                                    {heading}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div className="relative mt-18 lg:grid lg:grid-cols-2">
                        <div className="w-auto">
                            <img
                                src={content.image}
                                alt=""
                                className="w-full h-full sm:scale-80 lg:scale-100"
                            />
                        </div>
                        <div className="lg:pl-27.5">
                            <h2 className="mt-20 lg:mt-18 sm:mt-25 text-center lg:text-start text-2xl lg:text-[2rem] font-medium text-n-b">
                                {content.heading}
                            </h2>
                            <p className="mt-3.5 lg:mt-6 lg:w-[420px] lg:text-[1.15rem] text-center lg:text-start text-n-b/50 tracking-tight sm:w-[50ch] sm:mx-auto lg:mx-0">
                                {content.content}
                            </p>
                            <div className="hidden lg:block mt-10">
                                <Button type="primary">More Info</Button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-46 sm:bottom-45 lg:-bottom-21 right-10 sm:right-25 lg:right-160 h-[30%] sm:h-[40%] lg:h-[70%] rounded-full w-[300%] bg-p-b -z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default Features;
