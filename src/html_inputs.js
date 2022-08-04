import React, { useState } from "react";

function HtmlInputs() {
    
    const [text, setText] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [radio, setRadio] = useState("Male");
    const [select,setSelect] = useState("One");
    const [color, setColor] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [range, setRange] = useState('');

    function onChangeValue(event) {
        setRadio(event.target.value);
    }

    function handleSelectChange(event) {
        setSelect(event.target.value);
    }

    function showAlert() {
        alert("You have Clicked on this Button!")
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Text:', text);
        console.log('Number:', number);
        console.log('Password:', password);
        console.log('Gender:', radio);
        console.log('Select:', select);
        console.log('Color:', color);
        console.log('Date:', date);
        console.log('Email:', email);
        console.log('Range:', range);
      }

    return (

        <form onSubmit={handleSubmit}>

            <label htmlFor="fname">Type : Text </label>
            <input type="text" id="fname" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            autoComplete="off" /><br/><br/>

            <label htmlFor="quantity">Type : Number </label>
            <input type="number" id="quantity"
            value={number} 
            onChange={(e) => setNumber(e.target.value)}
            /><br/><br/>

            <label htmlFor="pwd">Type : Password</label>
            <input type="password" id="pwd"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            /><br/><br/>

            <label>Type : Radio</label>
            <div onChange={onChangeValue}>
                <input type="radio" value="Male" checked={radio === "Male"} /> Male <br/>
                <input type="radio" value="Female" checked={radio === "Female"}/> Female<br/>
                <input type="radio" value="Other" checked={radio === "Other"} /> Other
            </div><br/>

            <label>Type : Select</label><br/>
            <select value={select} onChange={handleSelectChange}>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
            </select> <br/><br/>

            <label htmlFor="favcolor">Type : Color </label>
            <input type="color" id="favcolor"
            value={color} 
            onChange={(e) => setColor(e.target.value)}
            /><br/><br/>

            <label htmlFor="birthday">Type : Date </label>
            <input type="date" id="birthday" 
            value={date} 
            onChange={(e) => setDate(e.target.value)}
            /><br/><br/>

            <label htmlFor="email">Type : Email </label>
            <input type="email" id="email" autoComplete="off"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            /><br/><br/>

            <label htmlFor="vol">Type : Range </label>
            <input type="range" id="vol" min="0" max="50"
            value={range} 
            onChange={(e) => setRange(e.target.value)}
            /><br/><br/>

            <input type="button" onClick={showAlert} value="Type : Button" /><br/><br/>
            
            <input type="submit" value="Submit"/>

        </form>
    );
  }

  
export default HtmlInputs