import './globals.css';

export default function Layout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>Microplastic Purifiers</title>
        </head>
        <body>
        <header>
            <h1 className="header-title">Microplastics Purifiers</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/product">Product</a></li>
                </ul>
            </nav>
        </header>
        <main>{children}</main>
        <footer>
            <p style={{color: 'white'}}>&copy; 2024 Microplastic Purifiers</p>
        </footer>
        </body>
        </html>
    );
}
