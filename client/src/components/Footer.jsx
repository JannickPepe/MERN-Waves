/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'


const Footer = () => {

    return (
        <footer className="flex flex-col space-y-10 justify-center pt-10 mt-10 border-t border-sky-700">

            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <a className="hover:text-gray-900" href="/">Home</a>
                <a className="hover:text-gray-900" href="/">About</a>
                <a className="hover:text-gray-900" href="/">Services</a>
                <a className="hover:text-gray-900" href="/">Media</a>
                <a className="hover:text-gray-900" href="/">Gallery</a>
                <a className="hover:text-gray-900" href="/">Contact</a>
            </nav>

            <p className="mx-auto text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
        </footer>
    )
}

export default Footer
