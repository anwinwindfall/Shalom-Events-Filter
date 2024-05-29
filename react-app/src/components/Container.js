import { Date } from 'core-js'
import React, { useContext, useEffect, useState } from 'react'
import Card from './Card.js';
import Input from './Input.js';
import RegionsList from './RegionsList.js';

const Container = ({ eventDetails, regionFilterList, cardStyles }) => {
    const [dateCondition, setDateCondition] = useState("current");
    const [regionFilter, setRegionFilter] = useState("all");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function timeZoneSetter(timeZone) {
        let zone = '';
        switch (timeZone) {
            case 'pst': zone = 'America/Los_Angeles'; break;
            case 'cst': zone = 'America/Chicago'; break;
            case 'mt': zone = 'America/Denver'; break;
            case 'pt': zone = 'America/Los_Angeles'; break;
            case 'est': zone = 'America/New_York'; break;
        }
        return zone
    }


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    const currentDate = new Date();
    let events = [{}];
    const convertToComparableFormat = (dateStr) => {
        const [day, month, year] = dateStr.split('/').map(Number);
        return year * 10000 + month * 100 + day;
    };
    function filter() {
        if (dateCondition == 'past') {
            events = eventDetails.filter((item) => {
                const dateInTimeZone = currentDate.toLocaleString('en-US', {
                    time_zone: timeZoneSetter(item.time_zone),
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                });
                const [month, day, year] = dateInTimeZone.split('/');
                const formattedDate = `${day}/${month}/${year}`;
                return (
                    convertToComparableFormat(formattedDate) > convertToComparableFormat(item.event_date)
                )
            })
        }
        else if (dateCondition == 'current') {
            events = eventDetails.filter((item) => {
                const dateInTimeZone = currentDate.toLocaleString('en-US', {
                    time_zone: timeZoneSetter(item.time_zone),
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                });
                const [month, day, year] = dateInTimeZone.split('/');
                const formattedDate = `${day}/${month}/${year}`;
                return (convertToComparableFormat(formattedDate) <= convertToComparableFormat(item.event_date))
            })
        }
    }
    filter();
    function regionalFilter() {
        const finalData = events.filter((items) => items.event_region == regionFilter)
        return finalData
    }
    const finalData = regionFilter == 'all' ? events : regionalFilter();
    // console.log(finalData, "final");
    return (
        <div className="sw-events-class">
            <ul className='sw-switch-container'>
                <li className={dateCondition == 'current' && 'active'} onClick={() => setDateCondition('current')}>Current</li>
                <li className={dateCondition == 'past' && 'active'} onClick={() => setDateCondition('past')}>Past</li>
            </ul>
            <div className='sw-events-filter-header'>
                {windowWidth < 992 ? <Input regionFilterList={regionFilterList} regionFilter={regionFilter} setRegionFilter={setRegionFilter} /> : <RegionsList regionFilterList={regionFilterList} regionFilter={regionFilter} setRegionFilter={setRegionFilter} />}
            </div>
            <div className="sw-events-filter__container">
                {
                    finalData && finalData.length > 0 ? (
                        finalData.map((items) => (
                            <Card key={items.id} eventsInfo={items} cardStyles={cardStyles}/>
                        ))
                    ) : (
                        <p>Nothing to Show</p>
                    )
                }

            </div>
        </div>
    )
}

export default Container