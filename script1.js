var request= new XMLHttpRequest;
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true)
request.send();
request.onload=function(){
    var data =JSON.parse(request.response);
      for(i=0;i<data.length;i++){
        console.log("coutries Name: "+data[i].name, " countries region:  " +data[i].region, " countries sub regions:  "+data[i].subregion, "countries population: "+data[i].population)
    }
}
