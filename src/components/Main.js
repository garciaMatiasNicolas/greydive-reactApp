import { useEffect, useState } from "react"
import ItemCard from "./ItemCard"

const Main = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch("/data/db.json")
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }

    return (
        <div style={{minHeight:'100vh'}}>
            <div className="row container-fluid d-flex justify-content-between">
                {data.map(el=> <ItemCard key={el.idVideo} {...el} />)}
            </div>
        </div>
    )
}

export default Main