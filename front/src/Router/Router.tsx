import { Navigate, Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { LastSales } from "../pages/LastSales";

export function Router(){
    return(
      <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/tickets" element={<LastSales />}></Route>
    </Routes>
    )
}