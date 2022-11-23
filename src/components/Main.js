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
        <div className="m-5">
            <div className="row container m-5">
                {data.map(el=> <ItemCard key={el.idVideo} {...el} />)}
            </div>
        </div>
    )
}

export default Main