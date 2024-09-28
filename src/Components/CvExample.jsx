import Lion from '../assets/lion.jpg';

function Example(props) {

    return (
        <div className="cv-example-container">
            <aside className="aside">
                <div className='first-part'>
                    <img src={Lion} alt="lion" className='profile-img'/>
                    <h2 className='fullname'>{props.fullName}</h2>
                    <hr/>
                    <p>{props.profession}</p>
                </div>
                <div  className='second-part'>
                    <h2 className='contact'>საკონტაქტო ინფორმაცია:</h2>
                    <p>{props.tel}</p>
                    <p>
                        <a href={`mailto:${props.email}`}>{props.email}</a>
                    </p>
                </div>
                <div className='third-part'>
                    <h2>სოციალური ვები</h2>
                    <p>
                        <a href={props.social}>
                            {props.social}
                        </a>
                    </p>
                </div>
            </aside>
        </div>
    )
};

export default Example;