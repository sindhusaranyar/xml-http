//XHR(XML HTTP REQUEST)

//to have a interaction of client and server via api

//API:application programming interface

//step 01:create a XHR Object
var request= new XMLHttpRequest();
//step 02:Api URL/using HTTP Methods/establishing a connection
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
//step 03:establishing the path 
request.send();
//step 04:once the data successfully loaded from the server,
//we have to convert the data 
//loading a data from a server :event 
//onload
request.onload=function(){
    var data=JSON.parse(request.response);
    for(i=0;i<data.length-1;i++){
        console.log(data[i].name,data[i].region,data[i].subregion,data[i].population,data[i].flag);
    }
    
};