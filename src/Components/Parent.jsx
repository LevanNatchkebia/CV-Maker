import Example from "./CvExample";
import Form from "./Form";
import React, {useState} from "react";
import '../styles/main.css';

function Parent() {

    const [fullName, setFullName] = useState("");
    const [profession, setProfession] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");

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

    return(
        <main className="main-container">
            <Example fullName={fullName}
                     profession={profession}
                     tel={tel}
                     email={email}
                    />
            <Form fullName={fullName}
             handleFullName={handleFullNameChange}
             profession={profession}
             handleProfession={handleProfessionChange}
             handleTel={handleTelChange}
             handleEmail={handleEmailChange}
             />
        </main>
    )
}

export default Parent;