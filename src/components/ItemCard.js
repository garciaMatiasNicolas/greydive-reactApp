import { Link } from "react-router-dom"


const ItemCard = ({escenario, cliente}) => {
    return (
        <Link className="text-decoration-none col-6" to={`/video/${cliente}`}>
        <div>
            <div className="App-container-card d-flex justify-content-between">
                <div style={{height:"200px"}} className="App-card">
                    <div className="App-face App-face1 d-flex justify-content-center align-items-center">
                        <div className="App-content">
                            <h2 style={{marginBottom:'0'}} className="App-title p-3">{cliente}</h2>
                        </div>
                    </div>
                    <div className="App-face App-face2">
                        <div className="App-content d-felx justify-content-between flex-column align-items-center">
                            <p className="text-black">Escenario: {escenario}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default ItemCard