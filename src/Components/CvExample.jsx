import Aside from "./Aside";
import Main from "./Main";


function Example(props) {

    return (
        <div className="cv-example-container">
           <Aside 
                fullName={props.fullName}
                profession={props.profession}
                tel={props.tel}
                email={props.email}
                linkedin={props.linkedin}
                github={props.github}
                />
            <Main 
                summary={props.summary}
                />
        </div>
    )
};

export default Example;