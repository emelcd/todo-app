import React, { useState, useEffect } from 'react'
import './FormLogo.scss'

function FormLogo() {
    const [list, setList] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch("http://localhost:5000")
            .then(res => res.json())
            .then((res) => {
                setList(res)
                console.log(res);
                setLoading(true)

            })
    }, [])

    if (!loading) {
        return <h1 className="color:white">Cargando</h1>
    } else {
        return (
            <>
            <h1 className="title">LIST WHISKY</h1>
            <div className="card">
                {list.map(item => (
                    <div key={Math.floor(Math.random()*100)} className="container">
                        <h1 className="card__title"><a href={item.url}>{item.name}</a> </h1>
                        <div className="fee__bar">
                            <div className>
                            {item.buyers_fee}<br />
                            <span>buyers</span>
                            </div>
                            <div className>
                            {item.listing_fee}<br />
                            <span>listing</span>
                            </div>
                            <div className>
                            {item.reserve_fee}<br />
                            <span>reserve</span>
                            </div>
                            <div className>
                            {item.sellers_fee}<br />
                            <span>sellers</span>
                            </div>

                        </div>
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
