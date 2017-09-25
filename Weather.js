$(document).ready(function(){
  var lat;
  var long;
 
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
     lat = position.coords.latitude;
     long =position.coords.longitude;
 var api ='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=fdc5b55511bc4a60a4f0d1c61ae94676';
    
   $.getJSON(api, function(data){
     console.log(data.weather[0].icon);
      var tempSwap=true;
      var fTemp;
      var kTemp;
      var cTemp;
     var center = data.sys.country;
     var weatherType=data.weather[0].main;
     var kTemp= data.main.temp;
     var windSpeed= data.wind.speed;
     var city = data.name;
     var cisnienie = data.main.pressure;
     var deg = data.wind.deg;
     var humidity = data.main.humidity;
     var icon = data.weather[0].icon;
     var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
     
     /* Converting */
    fTemp = (kTemp*(9/5)-459.67).toFixed(1);
     cTemp=(kTemp-273).toFixed(1);
     var degToCard = function(deg){
  if (deg>11.25 && deg<33.75){
    return "NNE";
  }else if (deg>33.75 && deg<56.25){
    return "ENE";
  }else if (deg>56.25 && deg<78.75){
    return "E";
  }else if (deg>78.75 && deg<101.25){
    return "ESE";
  }else if (deg>101.25 && deg<123.75){
    return "ESE";
  }else if (deg>123.75 && deg<146.25){
    return "SE";
  }else if (deg>146.25 && deg<168.75){
    return "SSE";
  }else if (deg>168.75 && deg<191.25){
    return "S";
  }else if (deg>191.25 && deg<213.75){
    return "SSW";
  }else if (deg>213.75 && deg<236.25){
    return "SW";
  }else if (deg>236.25 && deg<258.75){
    return "WSW";
  }else if (deg>258.75 && deg<281.25){
    return "W";
  }else if (deg>281.25 && deg<303.75){
    return "WNW";
  }else if (deg>303.75 && deg<326.25){
    return "NW";
  }else if (deg>326.25 && deg<348.75){
    return "NNW";
  }else{
    return "N"; 
  }
}
     /* END Of Conversion */
     
     $("#location").html(city);
     $("#country").html(center);
     $("#temperature").html(cTemp + "&#8451;");
     $("#image").html("<img src='" + iconUrl  +         "'>");
     $("#wind").html(windSpeed + " mps");
     $("#humidity").html(humidity + "%");
     $("#tempeunit").html(weatherType);
     $("#pressure").html(cisnienie + "hPa");
     $("#direction").html(degToCard);
     $("#temperature").click(function(){
       if (tempSwap===false){
         $("#temperature").html(fTemp + " &#8457;")
         tempSwap=true;
       }
       else{
         $("#temperature").html(cTemp + " &#8451;")
         tempSwap=false;
       }
     });
     switch(icon) {
    case "01n":
       $('body').addClass('showcase-night');
        break;
    case "02n":
        $('body').addClass('showcase-night');
        break;
    case "01d":
        $('body').addClass('showcase-clearSky');
        break;
    case "02d":
       $('body').addClass('showcase-clearSky');
        break;
    case "04d":
        $('body').addClass('showcase-Clouds-day');
        break;
    case "03n":
       $('body').addClass('showcase-Clouds-night');
        break;
    case "04n":
       $('body').addClass('showcase-Clouds-night');
        break;
    case "09d":
         $('body').addClass('showcase-rain-day');
        break;
    case "09n":
        $('body').addClass('showcase-rain-night');
        break;
    case "10d":
         $('body').addClass('showcase-rain-day');
        break;
    case "10n":
         $('body').addClass('showcase-rain-night');
        break;
    case "11d":
         $('body').addClass("showcase-thunderstorm");
        break;
    case "11n":
         $('body').addClass("showcase-thunderstorm");
        break;
    case "13d":
        $('body').addClass("showcase-snow");
        break;
    case "13n":
       $('body').addClass("showcase-snow");
        break;
    case "50d":
         $('body').addClass("showcase-mist-day");
        break;
    case "50n":
         $('body').addClass("showcase-mist-night");
        break;   
    default:
        $('body').addClass('showcase-clearSky');
}
    
   }) ;
});
};
});
