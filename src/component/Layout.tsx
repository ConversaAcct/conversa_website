import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"



const Layout = () => {
     return(
        <>

          <div className="sticky top-0 z-50">
                    <NavBar/>
          </div>
          <Outlet/>
          <Footer/>
        
        </>
     )
}

export default Layout