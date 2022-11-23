import ReactPlayer from "react-player"
import Questions from "./Questions"


const Test = ({cliente, testeador, linkVideo, transcripcion, timeTest, escenario, preguntas}) => {

    const first = {
        __html:transcripcion
    }

    return (
        <div>
            <div style={{margin:'8%'}} className="d-flex flex-column">
                <h1 style={{marginBottom:'10px'}} className="App-title">Nombre del cliente: {cliente}</h1>
                <h2 className="App-title">Test: Test de usabilidad en el sitio web</h2>
                <h2 className="App-title">Testeador: {testeador}</h2>
                <div className="player-wrapper">
                    <ReactPlayer className='react-player' width='100%'
                    height='100%' url={linkVideo} controls playing />
                </div>
                <div>
                    <h2 className="App-title mt-5">Transcripcion</h2>
                    <div className="App-scroll">
                        <div>
                        <p dangerouslySetInnerHTML={first}/>
                        </div>
                    </div>
                    <div>
                        <h2 style={{marginBottom:'40px', marginTop:'60px', fontSize:'1.5rem', fontWeight:'400'}} className="App-title">Tareas</h2>
                        <p className="App-stage">Escenario: {escenario}</p>
                        {preguntas.map(el => <Questions key={el.tarea} {...el} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test