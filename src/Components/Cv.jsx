import Example from "./CvExample";
import Form from "./Form";
import React, {useState} from "react";
import '../styles/cv-example.css';

function Parent() {

    const [fullName, setFullName] = useState("");
    const [profession, setProfession] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [summary, setSummary] = useState("");

    const handleFullNameChange = (e) => {
        setFullName(e.target.value)
    }

    const handleProfessionChange = (e) => {
        setProfession(e.target.value)
    }

    const handleTelChange = (e) => {
        setTel(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleLinkedinChange = (e) => {
        setLinkedin(e.target.value);
    }

    const handleGithubChange = (e) => {
        setGithub(e.target.value);
    }
    
    const handleSummaryChange = (e) => {
        setSummary(e.target.value);
    }

    return(
        <main className="main-container">
            <Example fullName={fullName}
                     profession={profession}
                     tel={tel}
                     email={email}
                     linkedin={linkedin}
                     github={github}
                     summary={summary}
                    />
            <Form fullName={fullName}
             handleFullName={handleFullNameChange}
             profession={profession}
             handleProfession={handleProfessionChange}
             handleTel={handleTelChange}
             handleEmail={handleEmailChange}
             handleLinkedin={handleLinkedinChange}
             handleGithub={handleGithubChange}
             handleSummary={handleSummaryChange}
             />
        </main>
    )
}

export default Parent;