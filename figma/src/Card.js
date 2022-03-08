import React from "react";

function Card(prop) {


    const props = prop.datas;
    return (

        <div>
            <div className="CardLayout">
                <div className="mapArea"></div>
                <div className="CardArea">
                    <div>
                        <div>Ride id: {props.id}</div>
                        <div>Origin Station: {props.origin_station_code}</div>
                        <div>Station_path:{props.Station_path}</div>
                        <div>Date: {props.date}</div>
                        <div>Distance:</div>
                    </div>
                </div>
                <div className="CardArea2">
                    <div>{props.city}</div>
                    <div>{props.state}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
