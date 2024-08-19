'use client';

import './globals.css';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';

export default function Layout({ children }) {
    const shareUrl = 'https://yourwebsite.com';
    const title = 'Check out this amazing Microplastics Purifiers project!';

    return (
        <html lang="en">
        <head>
            <title className = "fade-in">Microplastic Purifiers</title>
        </head>
        <body>
        <header>
            <h1 className="header-title">Microplastics Purifiers</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/product">Product</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                </ul>
            </nav>
        </header>
        <main>{children}</main>
        <footer>
            <p style={{ color: 'white' }}>&copy; 2024 Microplastic Purifiers</p>
            <div>
                <FacebookShareButton url={shareUrl} quote={title}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={title}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
            </div>
        </footer>
        </body>
        </html>
    );
}
