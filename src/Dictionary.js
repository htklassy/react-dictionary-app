import React, { useState } from "react";
import axios from "axios";

import './Dictionary.css';

export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event){
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/kismet${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
           <h1>
            dictionary
                   </h1>
           <div className="row">
               <form onSubmit={search}>
                   <div className="row">
                       <div className="col"></div>
                       <div className="col">
                           <input 
                            type="search"
                            placeholder="Define..."
                            className="form-control" onChange={handleKeywordChange}/>
                       </div>
                       <div className="col">
                           <input 
                            type="submit"
                            value="Search"
                            className="btn btn-primary" />
                        <div className="col"></div>
                       </div>
                   </div>
               </form>
           </div>
        </div>
    );
}