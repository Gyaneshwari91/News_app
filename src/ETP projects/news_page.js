import React from "react";
import { Card } from "./card";
import { Navbar } from "./navbar";
export function Newspage(props) {
    return (
        <div>
            <Navbar/>

        <div className="cards_align">
            {

                props.inputdata.map((element, index) =>
                    <Card {...element} key={index} />)
            }
        </div>

        </div>
    )

}
