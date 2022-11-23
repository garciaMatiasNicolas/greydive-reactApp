import { Link } from "react-router-dom"


const ItemCard = ({escenario, cliente}) => {
    return (
        <Link className="text-decoration-none col-12 col-md-5 mt-5" to={`/video/${cliente}`}>
        <div style={{background:'#ff0057', height:'15rem', boxShadow:'0 20px 50px rgba(0, 0, 0, 0.8)'}}>
            <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <div>
                        <div>
                            <h2 className="App-title fs-1 mt-5">{cliente}</h2>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-white text-center">Escenario: {escenario}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default ItemCard