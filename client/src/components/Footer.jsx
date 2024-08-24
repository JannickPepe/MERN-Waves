/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'


const Footer = () => {

    return (
        <footer className="flex flex-col space-y-10 justify-center pt-10 border-t border-emerald-600">

            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <a className="hover:text-gray-900 hover:scale-105 transition" href="/landing">Home</a>
                <a className="hover:text-gray-900" href="/">About</a>
                <a className="hover:text-gray-900" href="/">Categories</a>
                <a className="hover:text-gray-900" href="/allquotes">All quotes</a>
                <a className="hover:text-gray-900" href="/">Contact</a>
            </nav>

            <p className="mx-auto text-gray-700 font-medium">&copy; 2024 QuoteWaves. All rights reservered.</p>
        </footer>
    )
}

export default Footer
