// Layout.tsx
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <div className="fixed top-0 left-0 right-0 z-50">
                <NavBar/>
            </div>

            <main className="flex-1">
                <Outlet/>
            </main>

            <Footer/>
        </div>
    )
}

export default Layout