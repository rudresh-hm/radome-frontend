const getChartData=async (options,data,setData)=>{
    let response = await fetch('https://fierce-tundra-56658.herokuapp.com/analyse/month', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(options)
    });
    let result = await response.json();
    let dates=[];
    let weekSales=[];
    result.filteredData.map((item,i)=>{
      dates.push(item.date);
      weekSales.push(parseFloat(item.weekSales));
    })
    setData({
      ...data,
      labels:dates,
      data:weekSales,
    })
    console.log(result.filteredData);
}
const getThisWeekBolt= async()=>{
  let responseBolt = await fetch('https://fierce-tundra-56658.herokuapp.com/thisweek/bolts');
  let resultBlot = await responseBolt.json();
  return resultBlot.datatoday[0];
}
const getThisWeekScrew= async()=>{
  let responseScrew = await fetch('https://fierce-tundra-56658.herokuapp.com/thisweek/screws');
  let resultScrew = await responseScrew.json();
  return resultScrew.datatoday[0];
}
export {getChartData, getThisWeekBolt,getThisWeekScrew};