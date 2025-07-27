import React from "react";
import heroImg from "/images/illustration-hero.svg";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="overflow-x-clip">
            <div className="hero mt-8 lg:grid lg:grid-cols-2">
                <div className="relative lg:col-start-2">
                    <img
                        src={heroImg}
                        alt="hero illustration"
                        className="scale-95 lg:scale-135 w-full h-full lg:pl-20 lg:pt-18"
                    />
                    <div className="absolute bottom-0 lg:-bottom-28 left-18 sm:left-40 lg:left-50 h-[78%] lg:h-[86%] rounded-full w-[300%] bg-p-b -z-10"></div>
                </div>
                <div className="lg:col-start-1 lg:row-start-1">
                    <div className="px-8 sm:px-16 lg:px-0 mt-12 lg:mt-26">
                        <div className="text-center lg:text-start">
                            <h1 className="text-3xl lg:text-5xl text-n-b font-medium lg:leading-[1.1]">
                                A Simple Bookmark Manager
                            </h1>
                        </div>
                        <div className="text-center lg:text-start mt-6 sm:w-[550px] sm:mx-auto lg:w-auto lg:mx-0 lg:pr-20">
                            <p className="text-n-b/50 leading-6 lg:text-lg lg:leading-7">
                                A clean and simple interface to organize your
                                favourite websites. Open a new browser tab and
                                see your sites load instantly. Try it for free.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-5 lg:gap-2 mt-8">
                        <Button type="primary">Get it on Chrome</Button>
                        <Button type="secondary">Get it on Firefox</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
