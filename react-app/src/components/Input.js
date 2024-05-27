import React from 'react'
import './Input.scss'
import arrowdown from '../images/arrowdown.svg'

const Input = () => {
    return (
        <div>
            <div className="custom-select">
                <select name="country" id="country">
                    <option>ALL</option>
                    <option>USA</option>
                    <option>CANADA</option>
                    <option>IRELAND</option>
                    <option>UK</option>
                    <option>AUSTRALIA</option>
                </select>
            </div>
        </div>
    )
}

export default Input
