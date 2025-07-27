import React, { useState } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "What is Bookmark?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
        question: "How can I request a new browser?",
        answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
        question: "Is there a mobile app?",
        answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
        question: "What about other Chromium browsers?",
        answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
];

const FAQS = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    return (
        <section>
            <div className="wrapper mt-34 lg:mt-40">
                <div>
                    <div className="text-center">
                        <h2 className="text-2xl lg:text-[2rem] font-medium text-n-b">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="text-center mt-3 tracking-tight lg:w-[580px] lg:mx-auto text-[1.01rem] lg:text-[1.15rem] lg:tracking-wide lg:leading-[1.6]">
                        <p className="text-n-b/50">
                            Here are some of our FAQs. If you have any other
                            questions you’d like answered please feel free to
                            email us.
                        </p>
                    </div>
                </div>
                <div className="mt-13 lg:mt-15 lg:w-[540px] lg:mx-auto">
                    {faqs.map(({ question, answer }, index) => (
                        <div
                            key={index}
                            onClick={() =>
                                selectedQuestion === index
                                    ? setSelectedQuestion(null)
                                    : setSelectedQuestion(index)
                            }
                            className="border-b-[1px] border-n-b/20 lg:first:border-t-[1px] lg:first:border-n-b/20 cursor-pointer group relative"
                        >
                            <div className="flex items-center justify-between text-n-b py-5 ">
                                <h3
                                    className={twMerge(
                                        "text-[0.95rem] lg:text-[1.15rem] font-normal transition-all duration-700 group-hover:lg:pl-4 group-hover:text-p-r",
                                        selectedQuestion === index &&
                                            "pl-4 text-p-r"
                                    )}
                                >
                                    {question}
                                </h3>
                                <div className="lg:pr-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="12"
                                        className={`transition-all duration-300 ${
                                            selectedQuestion === index
                                                ? "rotate-180 stroke-p-r"
                                                : "stroke-p-b"
                                        }`}
                                    >
                                        <path
                                            fill="none"
                                            stroke-width="3"
                                            d="M1 1l8 8 8-8"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <AnimatePresence>
                                {selectedQuestion === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{
                                            duration: 0.7,
                                            ease: "easeInOut",
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p
                                            className={twMerge(
                                                "tracking-[-0.75px] text-n-b/70 py-3 leading-[1.9] transition-all duration-700",
                                                selectedQuestion === index &&
                                                    "px-4"
                                            )}
                                        >
                                            {answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div
                                className={twMerge(
                                    "absolute h-0 w-full group-hover:h-full bottom-0 left-0 bg-slate-200 -z-10 transition-all duration-700 rounded-sm",
                                    selectedQuestion === index && "h-full"
                                )}
                            ></div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-12">
                    <Button type="primary" className="px-7 py-3">
                        More Info
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FAQS;
