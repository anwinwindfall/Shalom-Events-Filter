import React from 'react'
import './Input.scss'
import arrowdown from '../images/arrowdown.svg'

const Input = ({regionFilterList, regionFilter, setRegionFilter}) => {
    return (
        <div>
            <div className="custom-select">
                <select name="country" id="country" value={regionFilter} onChange={(e)=>setRegionFilter(e.target.value)}>
                    {regionFilterList.map((items)=>{
                        return(
                            <option value={items.region_id}>{items.region_name}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default Input
