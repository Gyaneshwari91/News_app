import React from "react";
export function Newspage(props){
        return(
            props.inputdata.map((element,index)=>
           <div className="cards_align">
                <div className="card" key={index}>
                    <img src={element.urlToImage} 
                    alt="News_image" className="cardimage"/>
                    <h4 className="cardtitle">{element.title}</h4>
                    <p className="carddescription">{element.content}</p>
                    <p className="news_author">By Author on {element.publishedAt}</p>
                    <a href={element.url}
                    className="cardreadmore">Read More</a>
                </div>
           </div>
            )
        )
    }
