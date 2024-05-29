import React from 'react'

const RegionsList = ({ regionFilterList, regionFilter, setRegionFilter }) => {
    return (
        <ul class="sw-menu">
            {
                regionFilterList.map((items) => {
                    return (
                        <li className={regionFilter == items.region_id && 'active'} onClick={()=>setRegionFilter(items.region_id)}>{items.region_name}</li>
                    )
                })
            }
        </ul>
    )
}

export default RegionsList