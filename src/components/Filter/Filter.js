import {React, useState, Fragment} from 'react';
import './filter.scss';
const Filter=(props)=>{
    let [dropdown,setDropdown]=useState(false);
    let [selected,setSelected]=useState(props.stateOptions[props.name]);
    const slideDropdown=()=>{
        setDropdown(true);
    }
    const slideDropdownOut=()=>{
        setDropdown(false);
    }
    const handleItemClick=(item)=>{
        setSelected(item);
        setDropdown(false);
        props.setOptions({
            ...props.stateOptions,
            [props.name]:item,
        });
        console.log(props.stateOptions)
    }
    return (
        
        <div onMouseOver={slideDropdown}  onMouseLeave={slideDropdownOut} className="filter-container">
            <div className="filter btn-filter" id={props.name}>
                <span>{selected}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="27.448" height="18.299" viewBox="0 0 27.448 18.299">
                <g id="filter-results-button" transform="translate(1 0)">
                    <g id="filter" transform="translate(-1)">
                    <path id="Path_47" data-name="Path 47" d="M10.674,94.8h6.1v-3.05h-6.1ZM0,76.5v3.05H27.448V76.5ZM4.575,87.174h18.3v-3.05H4.575Z" transform="translate(0 -76.5)" fill="#fff"/>
                    </g>
                </g>
                </svg>
                <select>
                    {props.options.map((item,i)=>{
                        return <option key={i} value={i}>{item}</option>
                    })}
                </select>
            </div>
            {dropdown && <div className="filter-dropdown">   
                {props.options.map((item,i)=> <div key={i} onClick={()=>handleItemClick(item)} className="filter-items">{item}</div>)}
            </div>}
            <p className="filter-text">{props.name}</p>
        </div>
    )
}
export default Filter;