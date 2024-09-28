import React, {useState} from "react";

function Form(props) {

   

    return(
        <div>
            <form className="form-container">
                <div className="first-name">
                    <label>სახელი</label>
                    <input type="text" value={props.value} onChange={props.handleFullName}/>
                </div>
                <div className="profession">
                    <label>პროფესია</label>
                    <input type="text" value={props.profession} onChange={props.handleProfession}/>
                </div>
                <div>
                    <label>ტელეფონის ნომერი</label>
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  value={props.tel} onChange={props.handleTel}/>
                </div>    
                <div>
                    <label>ელ.ფოსტა</label>
                    <input type="text" value={props.email} onChange={props.handleEmail}/>
                </div>            
            </form>
        </div>
    )
}

export default Form;