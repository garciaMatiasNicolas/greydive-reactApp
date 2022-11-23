import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Test from "./tests/Test";


const ItemDetail = () => {
    const {id} = useParams()

    const [dataV, setDataV] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch("/data/db.json")
        .then(res => res.json())
        .then(data => {
            setDataV(data.filter(el => el.cliente === id))
        })
    }

    return (
        <div>{dataV.map(el => <Test key={el.idVideo} {...el} />)}</div>
    )
}

export default ItemDetail