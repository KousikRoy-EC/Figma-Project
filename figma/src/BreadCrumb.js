import React from "react";

function BreadCrumb(params) {
    return (<div>
        <nav aria-label="breadcrumb">
            <span class="breadcrumb">
                <li class="breadcrumb-item" aria-current="page">Newest Ride</li>
                <li class="breadcrumb-item" aria-current="page">Upcoming Ride</li>
                <li class="breadcrumb-item" aria-current="page">Past Ride</li>
            </span>
        </nav>
    </div>)
}

export default BreadCrumb;