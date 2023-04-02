import "../styles/globals.css"
import Nav from "../extensions/base/Nav";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
                <Nav />
                {children}
            </body>
        </html>
    );
}
