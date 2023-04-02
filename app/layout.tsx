import "../styles/globals.css"
import Nav from "../components/base/Nav"
import Footer from "../components/base/Footer"
export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <head />
            <body >
                <Nav />
                {children}
                <Footer/>
            </body>
        </html>
    );
}
