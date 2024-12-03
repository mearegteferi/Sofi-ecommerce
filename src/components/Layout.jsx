import { Outlet } from "react-router";
import Header from './Header'
import Footer from './Footer'

function Layout() {
    return(
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    )
}

export default Layout;