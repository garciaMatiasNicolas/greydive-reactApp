import { Link } from "react-router-dom"


const ItemCard = ({escenario, cliente}) => {
    return (
        <Link className="text-decoration-none col-6" to={`/video/${cliente}`}>
        <div>
            <div class="App-container-card d-flex justify-content-between">
                <div style={{height:"200px"}} class="App-card">
                    <div class="App-face App-face1 d-flex justify-content-center align-items-center">
                        <div class="App-content">
                            <h2 style={{marginBottom:'0'}} className="App-title p-3">{cliente}</h2>
                        </div>
                    </div>
                    <div class="App-face App-face2">
                        <div class="App-content d-felx justify-content-between flex-column align-items-center">
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