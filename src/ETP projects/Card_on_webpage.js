import React , {Component} from "react";
export class Card extends Component{
    render(){
        return(
            <div>
                <div className="card">
                    <div>
                        <img src='https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg'
                        alt='News' className="cardimage"/>
                    </div>
                    
                    <div >
                        <h3 className="cardtitle"><b>Today's Top News</b></h3>
                        <p className="carddescription">Description of the news</p>
                    </div>
                    <a className="cardreadmore" 
                    href='https://www.indiatoday.in/aajtak-livetv' >Read More</a>
                    
                </div>
            </div>
        )
    }
} 
