import React, { useState } from "react";
import Card from "./Card";

function midlleware(props) {
    let array = props.data;
    const [temp, settemp] = useState([]);

    if (props.name === "/") {
        let temp_data = array;
        temp_data.forEach((r) => {
            const nearest = r["station_path"].reduce((prev, curr) => {
                return Math.abs(curr) < Math.abs(prev) ? curr : prev;
            });
        });
        temp_data.sort((a, b) => a["nearest_code"] - b["nearest_code"]);
        settemp(temp_data);
    } else if ((props.name = "/Upcoming")) {
        const upcoming_data = array.filter((ride) => {
            const ride_date = new Date(ride["date"]).getTime();
            return ride_date > temp;
        });
        settemp(upcoming_data);
    } else {
        const past_data = array.filter((ride) => {
            const ride_date = new Date(ride["date"]).getTime();
            return ride_date < temp;
        });
        settemp(past_data);
    }

    return (
        <div>
            {temp.map((info) => {
                return <Card datas={info} />;
            })}
        </div>
    );
}

export default midlleware;
