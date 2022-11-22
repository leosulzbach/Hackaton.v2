import { Navigate, Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { Confirm } from "../pages/Confirm";

export function Router(){
    return(
      <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/confirm" element={<Confirm />}></Route>
    </Routes>
    )
}