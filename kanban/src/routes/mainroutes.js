import {Route, Routes} from "react-router-dom"
import Nav from "../components/nav"
import SignIn from "../pages/SignIn"
import Board from "../pages/Board"
import PrivateRoute from "../components/PrivateRoute"
export const MainRoutes=()=>{
    return <Routes>
        <Route path="/" element={<SignIn/>}></Route>

        <Route path="/boards" element={
      <PrivateRoute>
           <Board/>
      </PrivateRoute>
    }/>
        
    </Routes>
}