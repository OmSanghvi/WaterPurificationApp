'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname();

    return (
        <nav>
            <ul>
                <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About Us</Link></li>
                <li><Link href="/product" className={pathname === '/product' ? 'active' : ''}>Product</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
