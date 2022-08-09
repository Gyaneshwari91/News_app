import React from "react";
import { Card } from "./news_card";
import { Navbar } from "./navbar";
import Home from "./home";
import Contact from "./contact";
import Register from "./register";
import Login from "./login";
import About from "./about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export function Newspage(props) {
    return (
        <div>
           
        <div className="cards_align">
            {

                props.inputdata.map((element, index) =>
                    <Card {...element} key={index} />)
            }
        </div>

        </div>
    )

}
