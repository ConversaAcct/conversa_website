import { useRoutes } from "react-router-dom";
import { Route } from "./route/Route";


function App() {
  const routing = useRoutes(Route);

  return (
  
   <>
   {routing}
   </>
  )
}

export default App
