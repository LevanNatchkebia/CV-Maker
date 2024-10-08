
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
                    <input type="tel"  value={props.tel} onChange={props.handleTel}/>
                </div>    
                <div>
                    <label>ელ.ფოსტა</label>
                    <input type="text" value={props.email} onChange={props.handleEmail}/>
                </div>     
                <div>
                    <label>Linkedin</label>
                    <input type="text" value={props.linkedin} onChange={props.handleLinkedin}/>
                </div>      
                <div>
                    <label>GitHub</label>
                    <input type="text" value={props.github} onChange={props.handleGithub}/>
                </div>   
                <div>
                    <label>Proffesional Summary</label>
                    <textarea type="text" value={props.summary} onChange={props.handleSummary}/>
                </div>       
                
                <div className="languages_list">
                    <div>
                        <label>Language</label>
                        <input type="text" 
                        id="languageInput" 
                        placeholder="Enter lang" 
                      />
                    </div>
                    <button type="button" onClick={props.handleAddLanguage}>Add language</button>
                </div>
                
            </form>
        </div>
    )
}

export default Form;