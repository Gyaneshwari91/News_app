import React, { useState } from "react";

function HtmlAttributes() {
    
    const [text, setText] = useState('Value');

    function handleSubmit(event) {
        event.preventDefault();
      }
    
    return (

        <form onSubmit={handleSubmit}>

            <label htmlFor="value">Attribute : Value </label>
            <input type="text" id="value" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            /><br/>
    
            <label htmlFor="readonly">Attribute : Readonly </label>
            <input type="text" id="readonly" value="readonly" readOnly/><br/>
    
            <label htmlFor="disabled">Attribute : Disabled </label>
            <input type="text" id="disabled" value="John" disabled/><br/>
    
            <label htmlFor="size">Attribute : Size </label>
            <input type="text" id="size" size="4"/><br/>
    
            <label htmlFor="maxlength">Attribute : Maxlength </label>
            <input type="text" id="maxlength" maxLength="5" size="4"/><br/>
    
            <label htmlFor="quantity">Attribute : Min  & Max </label>
            <input type="number" id="quantity" min="4" max="5"/><br/>
    
            <label htmlFor="placeholder">Attribute : Placeholder </label>
            <input type="text" id="placeholder" placeholder="Hello"/><br/>
    
            <label htmlFor="required">Attribute : Required </label>
            <input type="text" id="required" required/><br/>
    
            <label htmlFor="autofocus">Attribute : Autofocus </label>
            <input type="text" id="autofocus" autoFocus /><br/>
    
            <label htmlFor="autocomplete">Attribute : Autocomplete </label>
            <input type="text" id="autocomplete" autoComplete="on"/><br/>
    
            <input type="submit" value="Submit"/>
            
        </form>
    );
  }

  
export default HtmlAttributes