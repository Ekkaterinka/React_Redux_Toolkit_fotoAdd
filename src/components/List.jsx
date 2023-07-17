import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from '../reduxToolkit/slices'
import { useState } from "react";

function List() {
    const state = useSelector((state) => state.data.list);
    const dispatch = useDispatch();

    function handleChange(e) {
        dispatch(addImage(URL.createObjectURL(e.target.files[0])));
        console.log((e.target.files[0]))
    };

    return (
        <div>
            <div className="App">
                <h2>Фото профиля:</h2>
                <input type="file" onChange={handleChange} />
            </div>
            <div className="gallery">
            {state.map((e) =>
            (<div key={e.id} >
                <img src={e.src} width="200px" height="200px"/>
            </div>))}
            </div>
        </div>
    );
}

export default List;
