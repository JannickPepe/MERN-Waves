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

            <div className="flex justify-center space-x-5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt='' />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt='' />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt='' />
                </a>
                <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt='' />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt='' />
                </a>
            </div>

            <p className="mx-auto text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
        </footer>
    )
}

export default Footer
