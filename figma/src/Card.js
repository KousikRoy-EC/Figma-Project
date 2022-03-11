import React from "react";

function Card(prop) {

    return (
        <div >
            <div className="CardLayout">
                <div className="mapArea">
                    <img className="img" src={prop.datas.map_url} alt="img"></img>
                </div>
                <div className="CardArea">
                    <div>
                        <div>Ride id: {prop.datas.id}</div>
                        <div>Origin Station: {prop.datas.origin_station_code}</div>
                        <div>Station_path:{prop.datas.Station_path}</div>
                        <div>Date: {prop.datas.date}</div>
                        <div>Distance:</div>
                    </div>
                </div>
                <div className="CardArea2">
                    <div className="individualButton">{prop.datas.city}</div>
                    <div className="individualButton">{prop.datas.state}</div>
                </div>
            </div>
        </div>
    );
}


export default Card;
