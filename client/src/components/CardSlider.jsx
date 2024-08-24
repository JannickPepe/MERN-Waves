import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import waves from "../assets/images/waves.jpeg";
import relaxOne from "../assets/images/relax-1.jpeg";
import relaxTwo from "../assets/images/relax-2.jpeg";
import relaxThree from "../assets/images/relax-3.jpeg";
import relaxFour from "../assets/images/relax-4.jpeg";
import relaxFive from "../assets/images/relax-5.jpeg";
import relaxSix from "../assets/images/relax-6.jpeg";


const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
    sm: 640,
    lg: 1024,
};

const CardCarousel = () => {

    const [ref, { width }] = useMeasure();
    const [offset, setOffset] = useState(0);

    const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

    const CAN_SHIFT_LEFT = offset < 0;

    const CAN_SHIFT_RIGHT = Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

    const shiftLeft = () => {
        if (!CAN_SHIFT_LEFT) {
            return;
        }
        setOffset((pv) => (pv += CARD_SIZE));
    };

    const shiftRight = () => {
        if (!CAN_SHIFT_RIGHT) {
            return;
        }
        setOffset((pv) => (pv -= CARD_SIZE));
    };

    return (
        <section className="bg-slate-100 py-20 md:pt-6 md:pb-24" ref={ref}>
            <div className="relative overflow-hidden p-4">
                {/* CARDS */}
                <div className="mx-auto max-w-7xl">
                <p className="mb-4 text-2xl font-semibold">
                    QuoteWaves different<span className="text-emerald-500"> categories</span>
                </p>
                <motion.div
                    animate={{
                    x: offset,
                    }}
                    className="flex"
                >
                    {items.map((item) => {
                        return <Card key={item.id} {...item} />;
                    })}
                </motion.div>
                </div>

                {/* BUTTONS */}
                <>
                    <motion.button
                        initial={false}
                        animate={{
                        x: CAN_SHIFT_LEFT ? "0%" : "-100%",
                        }}
                        className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
                        onClick={shiftLeft}
                    >
                        <FiChevronLeft />
                    </motion.button>
                    <motion.button
                        initial={false}
                        animate={{
                        x: CAN_SHIFT_RIGHT ? "0%" : "100%",
                        }}
                        className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
                        onClick={shiftRight}
                    >
                        <FiChevronRight />
                    </motion.button>
                </>
            </div>
        </section>
    );
};

const Card = ({ url, category, title, description }) => {

    return (
        <div
        className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
        style={{
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            marginRight: MARGIN,
            backgroundImage: `url(${url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}
        >
            <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase text-emerald-300">
                    {category}
                </span>
                <p className="my-2 text-3xl font-bold">
                    {title}
                </p>
                <p className="text-lg text-slate-300">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CardCarousel;

const items = [
    {
        id: 1,
        url: relaxSix,
        category: "Fantasy",
        title: "Fantasy and imagination",
        description:
        "We live in a fantasy world, a world of illusion. The great task in life is to find reality.",
    },
    {
        id: 2,
        url: relaxOne,
        category: "Melody",
        title: "Melody and frequencies",
        description:
        "Every soul is a melody which needs renewing.",
    },
    {
        id: 3,
        url: relaxTwo,
        category: "Away",
        title: "Away in the clouds",
        description:
        "Truth is like the sun. You can shut it out for a time, but it ain't goin' away.",
    },
    {
        id: 4,
        url: relaxThree,
        category: "Mystic",
        title: "Mystic and the unknown",
        description:
        "The whole world, as we experience it visually, comes to us through the mystic realm of color.",
    },
    {
        id: 5,
        url: relaxFour,
        category: "Lights",
        title: "Light and Hope",
        description:
        "Walking with a friend in the dark is better than walking alone in the light.",
    },
    {
        id: 6,
        url: relaxFive,
        category: "Renew",
        title: "Fresh and energized",
        description:
        "I think the cost of energy will come down when we make this transition to renewable energy.",
    },
    {
        id: 7,
        url: waves,
        category: "Sounds",
        title: "Vibrations and waves",
        description:
        "The sound of water is worth more than all the poets' words.",
    },
];