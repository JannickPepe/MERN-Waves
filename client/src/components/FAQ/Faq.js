import React, { useState } from "react";
import '../../styles/Faq.css';
// import moment from 'moment';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";


const Faq = ({ _id, faqtitle, faqtext, createdAt, isFaqPage }) => {

    const { setEditFaq, deleteFaq } = useAppContext()

    /*
    let date = moment(createdAt)
    date = date.format('MMM Do, YYYY');
    */

    return (

        <div style={{ paddingBottom: 30 }}>
            <div className="px-4">
                <div className="mx-auto max-w-3xl">
                    <Question title={faqtitle} >
                        <p>
                        {faqtext}
                        </p>
                    </Question>
                    { isFaqPage ? (
                        <>
                        </>
                        ) : <>
                            <footer className="mt-2">
                                <div className='actions'>
                                    <Link
                                        to='/faqadmin'
                                        className='btn edit-btn btn-success'
                                        onClick={() => setEditFaq(_id)}
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type='button'
                                        className='btn delete-btn btn-danger mx-2'
                                        onClick={() => deleteFaq(_id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </footer>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Faq;



const Question = ({ title, children, defaultOpen = false }) => {
    const [ref, { height }] = useMeasure();
    const [open, setOpen] = useState(defaultOpen);

    return (
        <motion.div animate={open ? "open" : "closed"} className="border-b-[1px] border-b-slate-300" >
            <button onClick={() => setOpen((pv) => !pv)} className="flex w-full items-center justify-between gap-4 py-2" >
                <motion.span
                    variants={{
                    open: {
                        color: "rgba(3, 6, 23, 0)",
                    },
                    closed: {
                        color: "rgba(3, 6, 23, 1)",
                    },
                    }}
                    className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left text-lg font-medium"
                >
                    {title}
                </motion.span>
                <motion.span
                    variants={{
                    open: {
                        rotate: "180deg",
                        color: "rgb(124 58 237)",
                    },
                    closed: {
                        rotate: "0deg",
                        color: "#030617",
                    },
                    }}
                >
                    <FiChevronDown className="text-2xl" />
                </motion.span>
            </button>

            <motion.div
                initial={false}
                animate={{
                    height: open ? height : "0px",
                    marginBottom: open ? "24px" : "0px",
                }}
                className="overflow-hidden text-slate-600"
            >
                <p ref={ref}>{children}</p>
            </motion.div>
        </motion.div>
    );
};