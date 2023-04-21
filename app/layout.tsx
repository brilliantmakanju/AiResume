import "../styles/globals.css"
import Nav from "../components/base/Nav"
import Footer from "../components/base/Footer"
export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <head />
            <body className="flex flex-col  2xl:container 2xl:mx-auto" >
                <Nav  />
                {children}
                <Footer/>
            </body>
        </html>
    );
}
