import React from "react";
export function Card(props){
        return(
            <div>
                <div className="card" >
                    <img src={props.urlToImage} 
                    alt="News_image" className="cardimage"/>
                    <h4 className="cardtitle">{props.title}</h4>
                    <p className="carddescription">{props.content}</p>
                    <p className="news_author">By Author on {props.publishedAt}</p>
                    <a href={props.url}
                    className="cardreadmore">Read More</a>
                </div>
           </div>
        )
    }
