import { Date } from 'core-js'
import React, { useState } from 'react'

const Container = ({ items }) => {
const [dateCondition, setDateCondition]=useState();
const [regionFilter, setRegionFilter]=useState("all");
const currentDate=Date.now();
const events=[{}];
function filter(){
    if (dateCondition=='past') {
        events=items.filter((item)=>item.event_date<currentDate)
    }
    else if(dateCondition=='upcoming'){
        events=items.filter((item)=>item.event_date>=currentDate)
    }
}
filter();
function regionalFilter(){
    const finalData=events.filter((items)=>items.event_region==regionFilter)
    return finalData
}
const finalData=regionalFilter();
    return (
        <div>Container</div>
    )
}

export default Container