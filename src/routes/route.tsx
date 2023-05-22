import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import React from "react";
import Calculator from "../components/calculator/calculator";
import Task from "../components/task/task";
export default function AppRoute(){
    return(
        <div>
            <Routes>
                <Route path="/calculator" element={<Calculator/>}/>
                <Route path="/" element={<Calculator/>}/>
                <Route path="/task" element={<Task/>}/>git chekoutg
            </Routes>
        </div>
    )
}