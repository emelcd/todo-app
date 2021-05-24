import {v4 as uid4} from 'uuid';
import React, { useState, useEffect } from 'react'
import './FormLogo.scss'

function FormLogo() {
    const [list, setList] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch("http://localhost:5000")
            .then(res => res.json())
            .then((res) => {
                setList(res)
                setLoading(true)
            },
            error=>setError(error))
    }, [])
    if (error) {
        return <h1 className="loading">{error.message}</h1>
    }

    if (!loading) {
        return <h1 className="loading">Cargando</h1>
    } else {
        return (
            <>
            <h1 className="title">LIST WHISKY</h1>
            <div className="card">
                {list.map(item => (
                    <div key={uid4()} className="container">
                        <a href={item.url}>

                        <h1 className="card__title">{item.name}</h1>
                        <div className="fee__bar">
                            <div >
                            {item.buyers_fee}<br />
                            <span>buyers</span>
                            </div>
                            <div >
                            {item.listing_fee}<br />
                            <span>listing</span>
                            </div>
                            <div >
                            {item.reserve_fee}<br />
                            <span>reserve</span>
                            </div>
                            <div >
                            {item.sellers_fee}<br />
                            <span>sellers</span>
                            </div>

                        </div>
                            </a>
                        <span>
                            {item.base_currency}

                        </span>
                    </div>
                ))}
            </div>
                        </>
        )

    }
}

export default FormLogo
