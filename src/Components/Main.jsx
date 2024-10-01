


function Main(props) {
    return (
        <main className="main-side">
            <div>
                {props.summary && (
                    <h2>Professional Summary</h2>
                )}
                {props.summary && (
                    <p>{props.summary}</p>
                )}
                
            </div>
            <div className="employment">

            </div>
        </main>
    )
}

export default Main;

