import Lion from '../assets/lion.jpg';


function Aside(props){


    const languages = props.languages;


    return (
        <aside className="aside">
            <div className='first-part'>
                <img src={Lion} alt="lion" className='profile-img'/>
                <h2 className='fullname'>{props.fullName}</h2>
                <hr/>
                <p>{props.profession}</p>
            </div>
            <div  className='second-part'>
                {(props.tel || props.email) && (
                    <h2 className='contact'>საკონტაქტო ინფორმაცია</h2>
                )}
                {props.tel && (
                    <p><b>ტელ: </b>{props.tel}</p>
                )}
                {props.email && (
                    <p>
                        <b>ელ.ფოსტა: </b>
                        <a href={`mailto:${props.email}`}>{props.email}</a>
                    </p>
                )}
            </div>
            <div className='third-part'>
                {(props.linkedin || props.github) && (
                    <h2 className='social-web'>სოციალური ვები</h2>
                )}
                {props.linkedin && (
                    <p>
                        <b>Linkedin: </b>

                        {props.linkedin ? (
                            <a  href={props.linkedin.startsWith('http') ? props.linkedin : `https://${props.linkedin}`}
                            target="_blank" 
                            rel="noopener noreferrer">
                            {props.fullName}
                            </a>
                        ) : (
                            <span>{props.fullname}</span>
                        )}
                    
                    </p>
                )}
                {props.github && (
                    <p>
                        <b>Github: </b>
                        <a href={props.linkedin.startsWith('http') ? props.linkedin : `https://${props.linkedin}`}
                        target="_blank"  
                        rel="noopener noreferrer">
                            {props.fullName}
                        </a>
                    </p>
                )}
            </div>
            <div className='language_section'>
                {languages && languages.length > 1 && (
                    <>
                        <h2>ენები</h2>
                        <ul>
                            {languages.map((language, index) => 
                                <li key={index} onClick={() => props.handleRemoveLanguage(index)}>
                                    {language}
                                </li>
                            )}
                        </ul>
                    </>
                )}

            </div>
        </aside>
    )
}

export default Aside;