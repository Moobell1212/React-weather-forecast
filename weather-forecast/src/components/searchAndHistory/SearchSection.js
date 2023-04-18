import React from "react";

export default function Search() {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 p-2 mt-5 border border-dark rounded" >
        <form id="search-form" className="form">
            <div className="form-inline form-group">
                <div className="input-group">
                    <input className="form-input weather-search" type="text" id="search-input" placeholder="Enter city here"
                        aria-labelledby="form-heading" aria-controls="today forecast" />
                    <div className="input-group-append">
                        <button type="submit" className="btn search-button bg-info btn-block" id="search-button" aria-label="submit search">
                            Search
                        </button>
                    </div>
                    <hr className="hr weather-hr" />
                </div>
            </div>
        </form>
        </div>
    )
}