

const Questions = ({tarea, tiempo, respuesta, texto}) => {
    const styles = {fontSize:'1rem', fontWeight:'400', lineHeight:'1.4rem'}
        
    return (
        <div className="App-container">
            <p style={styles} className="App-title">
                <strong>
                    Tarea {tarea}:<br/>
                    {texto}
                </strong>
            </p>
            {respuesta !== "respuesta verbal" && <p style={styles} className="App-title">Respuesta: {respuesta}</p>}
            <p style={styles} className='App-time'>Duracion de la tarea: {tiempo}</p>
        </div>
  )
}

export default Questions