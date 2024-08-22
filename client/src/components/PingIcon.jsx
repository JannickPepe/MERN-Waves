import { motion } from "framer-motion";


const HeroPing = () => {

    return (
        <div className="px-4 py-10">
            <Ping />
        </div>
    );
};

const LOOP_DURATION = 4;

const Ping = () => {

    return (
        <div className="relative">
            <Logo />
            <Band delay={0} />
            <Band delay={LOOP_DURATION * 0.25} />
            <Band delay={LOOP_DURATION * 0.5} />
            <Band delay={LOOP_DURATION * 0.75} />
        </div>
    );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
    return (
        <motion.svg
            width="36"
            height="30"
            viewBox="0 0 50 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 fill-violet-100"
            initial={{
                opacity: 0,
                scale: 0.85,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1,
                ease: "easeOut",
            }}
        >
        <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            stopColor="#000000"
        ></path>
        <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            stopColor="#000000"
        ></path>
        </motion.svg>
    );
};

const Band = ({ delay }) => {
    return (
        <motion.span
            style={{
                translateX: "-50%",
                translateY: "-50%",
            }}
            initial={{
                opacity: 0,
                scale: 0.25,
            }}
            animate={{
                opacity: [0, 1, 1, 0],
                scale: 1,
            }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                times: [0, 0.5, 0.75, 1],
                duration: LOOP_DURATION,
                ease: "linear",
                delay,
            }}
            className="absolute left-[50%] top-[50%] z-0 h-36 w-36 rounded-full border-[1px] 
            border-sky-600 bg-gradient-to-br from-sky-500/50 to-sky-800/20 shadow-xl shadow-sky-500/40"
        />
    );
};

export default HeroPing;