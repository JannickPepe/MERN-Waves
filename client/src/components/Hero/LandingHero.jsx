/* eslint-disable react-hooks/exhaustive-deps */
import { animate, useMotionTemplate, useMotionValue, motion, MotionConfig, } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { GrBlockQuote } from "react-icons/gr";


export const LandingHero = () => {
    return (
        <section className="grid grid-cols-12 border border-neutral-700 bg-neutral-900 text-neutral-50">
            <Left />
            <Right />
        </section>
    );
};

const Left = () => (

    <div className="col-span-12 flex flex-col justify-between border-r border-neutral-700 md:col-span-6">
        <div className="px-6 py-20 md:px-12 md:py-24">
            <h1 className="text-4xl uppercase leading-tight md:text-7xl md:leading-tight">
                <span className="text-emerald-300">
                    QuoteWaves - {" "}
                </span>
                The global platform for <span className="text-emerald-300">Quotes</span> 
            </h1>
            <div className="flex justify-start">
                <Link to={'/allquotes'} className="py-2 px-6 rounded-lg text-slate-200 border border-emerald-400  hover:text-emerald-300 hover:border-none hover:scale-110 hover:transition-all">
                    <span className="flex text-base font-medium gap-2">See All Quotes <GrBlockQuote size={20}/></span>
                </Link>
            </div>
        </div>
        <BeamInput />
    </div>
    
);

const BeamInput = () => {

    const navigate = useNavigate();
    const coursesPage = () => {
        navigate("/register")
    }

    const turn = useMotionValue(0);

    useEffect(() => {
        animate(turn, 1, {
            ease: "linear",
            duration: 5,
            repeat: Infinity,
        });
    }, []);

    const backgroundImage = useMotionTemplate `conic-gradient(from ${turn}turn, #6EE7B700 75%, #6EE7B7 100%)`;

    return (
        <form
            onSubmit={(e) => {
            e.preventDefault();
            }}
            className="relative z-30 flex w-full items-center gap-2 border-t border-neutral-700 bg-neutral-950 py-1.5 pl-6 pr-1.5"
        >
            <div className="w-full bg-transparent text-base leading-tight text-white placeholder-neutral-500 focus:outline-0 text-center" >
                Want to be a part of the global quote community 🚀
            </div>
    
            <button
                onClick={coursesPage}
                type="submit"
                className="group flex shrink-0 items-center gap-1.5 bg-emerald-300 px-4 py-3 text-sm font-medium text-neutral-900 transition-transform active:scale-[0.985]"
            >
                <span>Join QuoteWaves</span>
                <FiArrowRight className="-mr-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100" />
            </button>
    
            <div className="pointer-events-none absolute inset-0 z-10">
                <motion.div
                    style={{
                    backgroundImage,
                    }}
                    className="mask-with-browser-support absolute -inset-[1px] border border-transparent bg-origin-border"
                />
            </div>
        </form>
    );
};

const Right = () => {
    const [idx, setIdx] = useState(0);

    return (
        <div className="col-span-12 flex flex-col justify-between md:col-span-6">
            <div className="relative h-[276px] overflow-hidden md:h-[372px]">
                {CONTENT.map((c, itemIdx) => {
                    return (
                    <motion.div
                        initial={false}
                        animate={{
                        opacity: idx === itemIdx ? 1 : 0,
                        y: idx === itemIdx ? 0 : 24,
                        filter: idx === itemIdx ? "blur(0px)" : "blur(2px)",
                        }}
                        transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                        }}
                        style={{
                        pointerEvents: idx === itemIdx ? "all" : "none",
                        }}
                        className="absolute inset-0 z-10 grid place-content-center space-y-3 px-6 text-base font-light leading-relaxed text-neutral-400 md:px-12 md:text-lg"
                        key={itemIdx}
                    >
                        {c.content}
                    </motion.div>
                    );
                })}
        
                <span className="pointer-events-none absolute -right-0 bottom-0 z-0 text-7xl text-emerald-800/50 mr-3">
                    {idx + 1}/{CONTENT.length}
                </span>
            </div>
            <Buttons idx={idx} setIdx={setIdx} />
        </div>
    );
};

const Buttons = ({ idx, setIdx }) => {
    return (
        <div className="relative grid h-[57px] grid-cols-2 border-t border-neutral-700">
            <ShiftButton
                onClick={() => {
                    setIdx((pv) => {
                    if (pv === 0) {
                        return CONTENT.length - 1;
                    } else {
                        return pv - 1;
                    }
                    });
                }}
                topDivClasses="bg-neutral-900"
                bottomDivClasses="bg-neutral-950"
            >
                <FiArrowLeft className="mx-auto text-xl" />
            </ShiftButton>
            <ShiftButton
                topDivClasses="bg-neutral-900"
                btnClasses="border-neutral-700 border-l"
                bottomDivClasses="bg-neutral-950"
                onClick={() => {
                    setIdx((pv) => {
                    if (pv === CONTENT.length - 1) {
                        return 0;
                    } else {
                        return pv + 1;
                    }
                    });
                }}
            >
                <FiArrowRight className="mx-auto text-xl" />
            </ShiftButton>
    
            <motion.span
                key={idx}
                initial={{
                    width: "0%",
                }}
                animate={{
                    width: "100%",
                }}
                transition={{
                    duration: 12,
                    ease: "linear",
                }}
                onAnimationComplete={() => {
                    setIdx((pv) => {
                    if (pv === CONTENT.length - 1) {
                        return 0;
                    } else {
                        return pv + 1;
                    }
                    });
                }}
                className="pointer-events-none absolute -top-[1px] bottom-0 z-20 bg-emerald-500/20"
            />
        </div>
    );
};

const ShiftButton = ({ onClick, children, btnClasses, topDivClasses, bottomDivClasses, }) => {
    return (
        <MotionConfig
            transition={{
            ease: "circOut",
            duration: 0.25,
            }}
        >
                <motion.button
                    initial="initial"
                    whileHover="hovered"
                    className={twMerge(
                        "relative overflow-hidden transition-colors",
                        btnClasses
                    )}
                    onClick={onClick}
                >
                <motion.div
                    variants={{
                    initial: {
                        y: "0%",
                    },
                    hovered: {
                        y: "-100%",
                    },
                    }}
                    className={twMerge(
                    "grid h-full place-content-center bg-neutral-950",
                    topDivClasses
                    )}
                >
                    {children}
                </motion.div>
                <motion.div
                    variants={{
                    initial: {
                        y: "100%",
                    },
                    hovered: {
                        y: "0%",
                    },
                    }}
                    className={twMerge(
                    "absolute inset-0 grid h-full place-content-center",
                    bottomDivClasses
                    )}
                >
                    {children}
                </motion.div>
            </motion.button>
        </MotionConfig>
    );
};

const CONTENT = [
    {
        content: (
            <>
                <div className="text-white text-xl font-medium leading-tight">
                    <p>The greatest glory in living lies not in never falling, but in rising every time we fall. <br/><span className="text-emerald-300"> - Nelson Mandela</span></p>
                </div>
                
            </>
        ), 
    },
    {
        content: (
            <>
                <div className="text-white text-xl font-medium leading-tight">
                    <p>The way to get started is to quit talking and begin doing. <br/><span className="text-emerald-300"> - Walt Disney</span></p>
                </div>
            </>
        ),
    },
    {
        content: (
            <>
                <div className="text-white text-xl font-medium leading-tight">
                    <p>Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking. <br/> <span className="text-emerald-300"> - Steve Jobs</span></p>
                </div>
            </>
        ),
    },
    {
        content: (
            <>
                <div className="text-white text-xl font-medium leading-tight">
                    <p>If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. <br/> <span className="text-emerald-300"> - Oprah Winfrey</span></p>
                </div>
            </>
        ),
    },
];