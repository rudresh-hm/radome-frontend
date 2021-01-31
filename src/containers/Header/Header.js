import {React,useEffect, useState} from 'react';
import LineGraph from '../../components/Chart/LineGraph';
import Filter from '../../components/Filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import SideNav from '../../components/SideNav/SideNav';
import Dashboard from '../Dashboard/Dashboard';
import './header.scss';
import {getChartData, getThisWeekBolt, getThisWeekScrew} from './request';
const Header=(props)=>{
    let filterOptions=["Bolts","Screws","Nuts"];
    let [graphData,setGraphData]=useState({
        labels:[],
        data:[],
    });
    let [dataBolt,setDataBolt]=useState({});
    let [dataScrew,setDataScrew]=useState({});
    let [options,setOptions]=useState({
        month:"2",
        year:"2010",
        product:"Bolt",
        country:"India",
        state:"Kerala",
        city:"Kannur",
        store:"14",
        dept:"7",
    });
    useEffect(()=>{
        getChartData(options,graphData,setGraphData);
    },[options]);
    useEffect(()=>{
        getThisWeekBolt().then((result)=>{
            setDataBolt({
                ...dataBolt,
                ...result
            })
        });
        getThisWeekScrew().then((result)=>{
            setDataScrew({
                ...dataScrew,
                ...result
            })
        });
        console.log(dataBolt,dataScrew);
    },[]);
    return(
        <header className="header">
            <SideNav/>
            <Dashboard>
                <h2 className="dashboard-header">This Week</h2>
                <div className="product-row">
                    <ProductCard name="Bolt" data={dataBolt}/>
                    <ProductCard name="Screw" data={dataScrew}/>
                    <ProductCard name="Nut" data={{weekSales:"0"}}/>
                </div>
                <div className="all-filter-container">
                    <div className="filter-grid">
                        <Filter stateOptions={options} setOptions={setOptions} name="product" options={["Bolt","Screw"]}/>
                        <Filter stateOptions={options} setOptions={setOptions} name="month" 
                        options={["1","2","3","4","5","6","7","8","9","10","11","12"]}/>
                    </div>
                    <div className="filter-grid">
                        <Filter stateOptions={options} setOptions={setOptions} name="year" options={["2010","2011","2012"]}/>
                        <Filter stateOptions={options} setOptions={setOptions} name="country" options={["USA","India"]}/>
                    </div>
                    <div className="filter-grid">
                        <Filter stateOptions={options} setOptions={setOptions} name="state" 
                            options={["California","Texas","Karnataka","Kerala"]}/>
                        <Filter stateOptions={options} setOptions={setOptions} name="city" options={filterOptions}
                            options={["Fullerton","San_Fransisco","Dallas","Nevada","Bangalore","Dharwad","Thiruvananthapuram",
                            "Kannur"]}/>
                    </div>
                    <div className="filter-grid">
                        <Filter stateOptions={options} setOptions={setOptions} name="dept" options={["7","27"]}/>
                        <Filter stateOptions={options} setOptions={setOptions} name="store" options={["14","15"]}/>
                    </div>
                </div>
                <div className="line-graph">
                    <span id="x-axis">Date</span>
                    <span id="y-axis">Weekly Sales</span>
                    <LineGraph graphData={graphData}/>
                </div>
            </Dashboard>
        </header>
    )
}
export default Header;