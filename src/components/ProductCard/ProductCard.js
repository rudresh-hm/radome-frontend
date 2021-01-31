import {React,useEffect} from 'react';
import './productcard.scss';
const ProductCard=(props)=>{
    let svg=undefined;
    
        switch(props.name){
            case "Bolt": 
            svg=<svg xmlns="http://www.w3.org/2000/svg" width="61" height="57" viewBox="0 0 61 57">
                <g id="Group_45" data-name="Group 45" transform="translate(-35.5 -34)">
                <rect id="Rectangle_5" data-name="Rectangle 5" width="61" height="57" rx="15" transform="translate(35.5 34)" fill="#feb95a"/>
                <path id="screw" d="M33.74,14.01a10.252,10.252,0,0,1-3.075,6.949.85.85,0,0,1-1.2,0L12.785,4.281a.85.85,0,0,1,0-1.2A10.2,10.2,0,0,1,20.01,0a9.46,9.46,0,0,1,6.722,2.815l.055.055a.85.85,0,0,1,.04,1.159L23.788,7.518l2.438,2.438,3.489-3.039a.85.85,0,0,1,1.159.04l.055.055A9.434,9.434,0,0,1,33.74,14.01Zm-29.2,6.107L1.572,23.311,13.8,29.039l3.279-3.05Zm4.188-4.5L5.76,18.809,18.423,24.74,21.7,21.69Zm15.4,2.615L15.514,9.616a.829.829,0,0,0-.616-.249.85.85,0,0,0-.607.271L9.948,14.307l13.1,6.134,1.062-.988a.85.85,0,0,0,.022-1.223ZM.356,24.618l-.128.138a.85.85,0,0,0,.021,1.18L7.808,33.5a.85.85,0,0,0,1.18.021l3.471-3.229Z" transform="translate(49.128 45.628)" fill="#040406"/>
                </g>
            </svg>
            break;
            case "Screw":
                svg=<svg xmlns="http://www.w3.org/2000/svg" width="61" height="57" viewBox="0 0 61 57">
                <g id="Group_47" data-name="Group 47" transform="translate(-35.5 -34)">
                  <rect id="Rectangle_5" data-name="Rectangle 5" width="61" height="57" rx="15" transform="translate(35.5 34)" fill="#20bfa9"/>
                  <g id="bolt" transform="matrix(0.719, 0.695, -0.695, 0.719, 65.057, 45.575)">
                    <g id="Group_9" data-name="Group 9" transform="translate(0 0)">
                      <g id="Group_8" data-name="Group 8" transform="translate(0)">
                        <path id="Path_37" data-name="Path 37" d="M0,3.938A22.812,22.812,0,0,0,8.565,1.483V0A23.086,23.086,0,0,1,0,2.322Z" transform="translate(7.494 26.031)" fill="#fff"/>
                        <path id="Path_38" data-name="Path 38" d="M3.141,1.269V0A26.83,26.83,0,0,1,0,1.269Z" transform="translate(12.918 28.708)" fill="#fff"/>
                        <rect id="Rectangle_6" data-name="Rectangle 6" width="6.424" height="8.565" transform="translate(0 0)" fill="#fff"/>
                        <path id="Path_39" data-name="Path 39" d="M0,3.93A22.853,22.853,0,0,0,8.565,1.482V0A23.106,23.106,0,0,1,0,2.324Z" transform="translate(7.494 23.355)" fill="#fff"/>
                        <rect id="Rectangle_7" data-name="Rectangle 7" width="8.565" height="8.565" transform="translate(7.494 0)" fill="#fff"/>
                        <path id="Path_40" data-name="Path 40" d="M0,3.928A22.865,22.865,0,0,0,8.565,1.481V0A23.081,23.081,0,0,1,0,2.322Z" transform="translate(7.494 20.68)" fill="#fff"/>
                        <path id="Path_41" data-name="Path 41" d="M0,0V8.565H6.424V0Z" transform="translate(17.13)" fill="#fff"/>
                        <path id="Path_42" data-name="Path 42" d="M0,5.888a.535.535,0,0,0,.535.535h9.635a.535.535,0,0,0,.535-.535V0H0Z" transform="translate(6.424 9.635)" fill="#fff"/>
                        <path id="Path_43" data-name="Path 43" d="M0,3.93A22.855,22.855,0,0,0,8.565,1.483V0A23.113,23.113,0,0,1,0,2.324Z" transform="translate(7.494 18.002)" fill="#fff"/>
                        <path id="Path_44" data-name="Path 44" d="M0,2.123A22.165,22.165,0,0,0,7.9,0H0Z" transform="translate(7.494 17.129)" fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </g>
                </svg>
                break;
            case "Nut":
                svg=<svg xmlns="http://www.w3.org/2000/svg" width="61" height="57" viewBox="0 0 61 57">
                <g id="Group_48" data-name="Group 48" transform="translate(-1312 -191)">
                  <rect id="Rectangle_5" data-name="Rectangle 5" width="61" height="57" rx="15" transform="translate(1312 191)" fill="#fe4f60"/>
                  <g id="nut" transform="translate(1328 183.25)">
                    <g id="Group_20" data-name="Group 20" transform="translate(9.855 31.092)">
                      <g id="Group_19" data-name="Group 19" transform="translate(0 0)">
                        <path id="Path_48" data-name="Path 48" d="M114.458,105.55a4.658,4.658,0,1,0,4.658,4.658A4.654,4.654,0,0,0,114.458,105.55Z" transform="translate(-109.8 -105.55)" fill="#fff"/>
                      </g>
                    </g>
                    <g id="Group_22" data-name="Group 22" transform="translate(0 23.75)">
                      <g id="Group_21" data-name="Group 21">
                        <path id="Path_49" data-name="Path 49" d="M21.775,23.75H7.252L0,36.137,7.252,48.523H21.784l7.252-12.387Zm-.8,12a6.451,6.451,0,1,1,0-.009Z" transform="translate(0 -23.75)" fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </g>
                </svg>
        }
 
    return (
        <div className="productcard">
            <div className="productcard__header">
                {svg}
                <span>{props.name}</span>
                <svg id="more" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                <path id="Path_35" data-name="Path 35" d="M0,0H29V29H0Z" fill="none"/>
                <path id="Path_36" data-name="Path 36" d="M12.417,8.833A2.417,2.417,0,1,0,10,6.417,2.424,2.424,0,0,0,12.417,8.833Zm0,2.417a2.417,2.417,0,1,0,2.417,2.417A2.424,2.424,0,0,0,12.417,11.25Zm0,7.25a2.417,2.417,0,1,0,2.417,2.417A2.424,2.424,0,0,0,12.417,18.5Z" transform="translate(2.083 0.833)" fill="#fff"/>
                </svg>
            </div>
            <div className="productcard__bottom">
                <div className="productcard__info">
                    <p>{parseInt(props.data.weekSales)}<span id="rs">Rs</span></p>
                    <span>45% increase this week</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="59.675" height="66.275" viewBox="0 0 59.675 66.275">
                    <path id="Path_34" data-name="Path 34" d="M747.583,302.912c16.024-55.754,37.389-29.2,37.389-29.2s7.609,10.44,12.463,6.637c5.449-4.268,8.158-24.111,6.231-43.143" transform="translate(-746.141 -237.051)" fill="none" stroke="#feb95a" stroke-width="3"/>
                </svg>
            </div>
        </div>
    )
}
export default ProductCard;