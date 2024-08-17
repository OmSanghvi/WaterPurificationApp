// src/app/layout.js
import './globals.css'; // Optional: if you have any global styles

export default function Layout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>Water Purification System</title>
        </head>
        <body>
        <header>
            <h1>Water Purification System Simulation</h1>
        </header>
        <main>{children}</main>
        <footer>
            <p>&copy; 2024 Water Purification System</p>
        </footer>
        </body>
        </html>
    );
}
