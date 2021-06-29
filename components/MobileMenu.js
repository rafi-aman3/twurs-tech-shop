import Link from 'next/link'
import React from 'react'

const MobileMenu = ({isMenuOpen}) => {
    return (
        <div className={isMenuOpen ? "sm:hidden" : "hidden"} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/products">
                        <a className="bg-gray-900 text-white  block px-3 py-2 rounded-md text-base font-medium">Products </a>
                    </Link>
                    <Link href="/orders">
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Orders</a>
                    </Link>
                </div>
            </div>
    );
};

export default MobileMenu;