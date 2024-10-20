import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '@/assests/styles/globals.css'

export const metadata = {
    title: 'Property Pulse',
    description: 'Property Pulse - A Real Estate App',
    keywords: 'Real Estate, Property, Buy, Sell, Rent',
}

const MainLayout = ({children}) => {
    return ( <html>
        <body>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </body>
    </html> );
}
 
export default MainLayout;