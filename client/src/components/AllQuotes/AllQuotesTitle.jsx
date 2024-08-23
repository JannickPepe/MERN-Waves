import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


export const VanishText = () => {

    return (
        <div className="px-4 py-10 text-center md:py-20 overflow-hidden">
            <h3 className="text-3xl font-medium text-slate-800 sm:text-4xl md:text-6xl">
                <span className="text-emerald-400 font-semibold">QuoteWaves</span> different quoted authors!
                <AnimatedText
                    phrases={[
                        "Sun Tzu",
                        "Mark Twain",
                        "Nicola Tesla",
                        "Bill Gates",
                        "Bruce Lee",
                    ]}
                />
            </h3>
        </div>
    );
};

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 3;

const AnimatedText = ({ phrases }) => {

    const [active, setActive] = useState(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
        setActive((pv) => (pv + 1) % phrases.length);
        }, WAIT_TIME);

        return () => clearInterval(intervalRef);
    }, [phrases]);

    return (
        <div className="relative mb-14 mt-2 w-full">
            {phrases.map((phrase) => {
                const isActive = phrases[active] === phrase;

                return (
                    <motion.div
                        key={phrase}
                        initial={false}
                        animate={isActive ? "active" : "inactive"}
                        style={{
                            x: "-50%",
                        }}
                        variants={{
                            active: {
                                opacity: 1,
                                scale: 1,
                            },
                            inactive: {
                                opacity: 0,
                                scale: 0,
                            },
                        }}
                        className="absolute left-1/2 top-0 w-full text-emerald-400"
                    >
                        {phrase}
                    </motion.div>
                );
            })}
        </div>
    );
};