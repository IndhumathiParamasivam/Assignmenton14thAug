let xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET','https://restcountries.eu/rest/v2/all');
xmlhttp.onload = () =>
    {
        let responsedata = xmlhttp.response;
        let responseinJSON = JSON.parse(responsedata);
        let countrieswithexpectedpopulation = responseinJSON.filter(countryDetails => countryDetails.population>100000000)
                                                            .map( cntry => {
                    let eachcountry={};
                    eachcountry["name"]=cntry["name"];
                    eachcountry["population"]=cntry["population"];
                    return eachcountry;
                });
        console.log(countrieswithexpectedpopulation);
    }
xmlhttp.send();
