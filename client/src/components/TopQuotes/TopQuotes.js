import React from "react";
// import moment from 'moment';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import { motion } from "framer-motion";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import moment from "moment";


const TopQuotes = ({ _id, topquotestitle, topquotestext, topquotesauthor, createdAt, isTopQuotesPage }) => {

    const { setEditTopQuote, deleteTopQuote } = useAppContext()

    let date = moment(createdAt)
    date = date.format('MMM Do, YYYY');

    return (
        <div className="">
            <div className="mb-4 lg:mb-0 group relative w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
                <div className="relative z-10 overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
                    <BiSolidQuoteAltRight className="relative mx-auto z-10 mb-10 mt-2 rounded-full border-2 border-emerald-500 bg-slate-900 p-4 text-7xl text-emerald-500" />
                    <h4 className="relative z-10 mb-4 w-full text-3xl text-center font-bold text-slate-50">
                        {topquotestitle} 
                    </h4>
                    <p className="relative z-10 text-slate-400 text-center">
                        {topquotestext}
                    </p>
                    <p className="text-white/20 border-b border-white text-center">
                        {topquotesauthor} - {date}
                    </p>
                </div>

                <motion.div
                    initial={{ rotate: "0deg" }}
                    animate={{ rotate: "360deg" }}
                    style={{ scale: 1.75 }}
                    transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "linear",
                    }}
                    className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-200 via-emerald-200/0 to-emerald-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
            </div>
        
            { isTopQuotesPage ? (
                <>
                </>
                ) : <>
                    <footer className="mt-4 mb-4 md:mb-0">
                        <div className='flex justify-center gap-6'>
                            <Link
                                to='/topquotesadmin'
                                className='bg-emerald-500 rounded-lg py-2 px-2 text-white'
                                onClick={() => setEditTopQuote(_id)}
                            >
                                Edit
                            </Link>
                            <button
                                type='button'
                                className='bg-red-500 rounded-lg py-2 px-2 text-white'
                                onClick={() => deleteTopQuote(_id)}
                            >
                                Delete
                            </button>
                        </div>
                    </footer>
                </>
            }
        </div>
        
    );
};

export default TopQuotes;



