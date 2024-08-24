import { motion } from "framer-motion";


const AllQuotesSlider = () => {

    return (
        <div className="bg-slate-950 py-12">
            <div className="p-4 overflow-x-hidden relative">
                <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-900 to-transparent" />

                <div className="flex items-center mb-4">
                    <TestimonialList list={testimonials.top} duration={125} />
                    <TestimonialList list={testimonials.top} duration={125} />
                    <TestimonialList list={testimonials.top} duration={125} />
                </div>
                <div className="flex items-center mb-4">
                    <TestimonialList list={testimonials.middle} duration={75} reverse />
                    <TestimonialList list={testimonials.middle} duration={75} reverse />
                    <TestimonialList list={testimonials.middle} duration={75} reverse />
                </div>
                <div className="flex items-center">
                    <TestimonialList list={testimonials.bottom} duration={275} />
                    <TestimonialList list={testimonials.bottom} duration={275} />
                    <TestimonialList list={testimonials.bottom} duration={275} />
                </div>

                <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-900 to-transparent" />
            </div>
        </div>
    );
};

const TestimonialList = ({ list, reverse = false, duration = 50 }) => {

    return (
        <motion.div
            initial={{ translateX: reverse ? "-100%" : "0%" }}
            animate={{ translateX: reverse ? "0%" : "-100%" }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 px-2"
        >
            {list.map((t) => {
                return (
                    <div
                        key={t.id}
                        className="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
                    >
                        <div className="w-full h-44 object-cover" />
                        <div className="bg-slate-900 text-slate-50 p-4">
                            <span className="block font-semibold text-lg mb-1 text-emerald-400">{t.name}</span>
                            <span className="block text-base text-slate-300">{t.info}</span>
                            <span className="block text-sm font-light text-slate-500 mt-2">{t.date}</span>
                        </div>
                        <span className="text-7xl absolute top-2 right-2 text-slate-700">
                        "
                        </span>
                    </div>
                );
            })}
        </motion.div>
    );
};

const testimonials = {

    top: [
        {
        id: 1,
        name: "Jen S.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
        date: "24/08/2024",
        },
        {
        id: 2,
        name: "Paul A,",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
        date: "24/08/2024",
        },
        {
        id: 3,
        name: "Cindy J.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.",
        date: "24/08/2024",
        },
        {
        id: 4,
        name: "Danica W.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor.",
        date: "24/08/2024",
        },
        {
        id: 5,
        name: "Peter H.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.",
        date: "24/08/2024",
        },
        {
        id: 6,
        name: "Lanny B.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse!",
        date: "24/08/2024",
        },
    ],
    middle: [
        {
        id: 1,
        name: "Alex F.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.",
        date: "24/08/2024",
        },
        {
        id: 2,
        name: "Claude O.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt.",
        date: "24/08/2024",
        },
        {
        id: 3,
        name: "Max Q.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
        date: "24/08/2024",
        },
        {
        id: 4,
        name: "Jeff R.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
        date: "24/08/2024",
        },
        {
        id: 5,
        name: "Kevin K.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
        date: "24/08/2024",
        },
        {
        id: 6,
        name: "Andrea B.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!",
        date: "24/08/2024",
        },
    ],
    bottom: [
        {
        id: 1,
        name: "Danny G.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!",
        date: "24/08/2024",
        },
        {
        id: 2,
        name: "Ian D.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere.",
        date: "24/08/2024",
        },
        {
        id: 3,
        name: "Ben S.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        date: "24/08/2024",
        },
        {
        id: 4,
        name: "Matthew I.",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
        date: "24/08/2024",
        },
        {
            id: 5,
            name: "Garrett P.",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia.",
            date: "24/08/2024",
        },
        {
            id: 6,
            name: "Xavier C.",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur.",
            date: "24/08/2024",
        },
    ],
};

export default AllQuotesSlider;