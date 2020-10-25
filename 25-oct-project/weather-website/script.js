


//on loading document show corousel of different cities

$( document ).ready(function() {
    let apiKey = '1d9d99b3f55f4f49bed93356202010'
    let endpoint = 'http://api.weatherapi.com/v1/current.json?key=' +apiKey
   
    var temp=0;

        $.ajax({
          
        url: endpoint + " &q=" +$('#card1 h4').text(),
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            console.log(result);
            country= result.location.country,
            console.log(country)
            temp=result.current.temp_c

            $("#time1").text(result.current.last_updated)
            $("#icon1").attr("src",result.current.condition.icon)
            $("#country1").text(result.location.country)
            $("#region1").text(result.location.region)
            $("#temp1").text(result.current.temp_c).append("°C").css("font-size","28px")
            $("#temp1").mouseenter(function(){
                $(this).text(result.current.temp_f).append(" F").css("font-size","28px")
            })
            $("#temp1").mouseleave(function(){
                $(this).text(result.current.temp_c).append("°C").css("font-size","28px")
            })
            $("#hum1").text(result.current.humidity).append("  %").prepend("Humidity  :    ")
            $("#wind1").text(result.current.wind_mph).append("  mph").prepend("Wind-Speed  :    ")
        
         
            if(temp < 0 && temp <20){
                   
                $('body').css('background-image','url(./assets/images/background/cloudy-background.jpg)')
            }
            else if(temp> 20 && temp<35){
                $('body').css('background-image','url(./assets/images/background/sunny-weather.jpg)')
            }
            else{
                debugger
                $('body').css('background-image','url(./assets/images/background/background-4_1024x424.jpg)')
            }
       
        }
       })

       temp=0

       $.ajax({
          
        url: endpoint + " &q=" +$('#card2 h4').text(),
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            console.log(result);
            country= result.location.country,
            console.log(country)
            temp=result.current.temp_c
           
            $("#time2").text(result.current.last_updated)
            $("#icon2").attr("src",result.current.condition.icon)
            $("#country2").text(result.location.country)
            $("#region2").text(result.location.region)
            $("#temp2").text(result.current.temp_c).append("°C").css("font-size","28px")
            $("#temp2").mouseenter(function(){
                $(this).text(result.current.temp_f).append(" F").css("font-size","28px")
            })
            $("#temp2").mouseleave(function(){
                $(this).text(result.current.temp_c).append("°C").css("font-size","28px")
            })
            $("#hum2").text(result.current.humidity).append("  %").prepend("Humidity  :    ")
            $("#wind2").text(result.current.wind_mph).append("  mph").prepend("Wind-Speed  :    ")
        
            if(temp < 0 && temp <20){
                   
                $('body').css({'background-image':'url(./assets/images/background/cloudy-background.jpg)','background-repeat':'no-repeat'})
            }
            else if(temp> 20 && temp<35){
                
                $('body').css({'background-image':'url(./assets/images/background/cloudy-weather.jpeg)','background-repeat':'no-repeat'})
            }
            else{
                debugger
                $('body').css('background-image','url(./assets/images/background/sunny-weather.jpeg)')
            }
       
        
            
        }

       

       })

       temp=0


       $.ajax({
          
        url: endpoint + " &q=" +$('#card3 h4').text(),
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            console.log(result);
            country= result.location.country,
            console.log(country)
            temp=result.current.temp_c
           
            $("#time3").text(result.current.last_updated)
            $("#icon3").attr("src",result.current.condition.icon)
            $("#country3").text(result.location.country)
            $("#region3").text(result.location.region)
            $("#temp3").text(result.current.temp_c).append("°C").css("font-size","28px")
            $("#temp3").mouseenter(function(){
                $(this).text(result.current.temp_f).append(" F").css("font-size","28px")
            })
            $("#temp3").mouseleave(function(){
                $(this).text(result.current.temp_c).append("°C").css("font-size","28px")
            })
            $("#hum3").text(result.current.humidity).append("  %").prepend("Humidity  :    ")
            $("#wind3").text(result.current.wind_mph).append("  mph").prepend("Wind-Speed  :    ")
        
            if(temp < 0 && temp <20){
                   
                $('body').css('background-image','url(./assets/images/background/cloudy-background.jpg)')
            }
            else if(temp > 20 && temp<35){
                $('body').css('background-image','url(./assets/images/background/sunny-weather.jpg)')
            }
            else{
                debugger
                $('body').css('background-image','url(./assets/images/background/background-4_1024x424.jpg)')
            }
       
        
        }
       })

       temp=0

       $.ajax({
          
        url: endpoint + " &q=" +$('#card4 h4').text(),
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            console.log(result);
            country= result.location.country,
            console.log(country)
            temp=result.current.temp_c
           
            $("#time4").text(result.current.last_updated)
            $("#icon4").attr("src",result.current.condition.icon)
            $("#country4").text(result.location.country)
            $("#region4").text(result.location.region)
            $("#temp4").text(result.current.temp_c).append(" C").css("font-size","28px")
            $("#temp4").mouseenter(function(){
                $(this).text(result.current.temp_f).append(" F").css("font-size","28px")
            })
            $("#temp4").mouseleave(function(){
                $(this).text(result.current.temp_c).append(" C").css("font-size","28px")
            })
            $("#hum4").text(result.current.humidity).prepend("Humidity  :    ")
            $("#wind4").text(result.current.wind_mph).append("  mph").prepend("Wind-Speed  :    ")
        
            if(temp < 0 && temp <20){
                   
                $('body').css('background-image','url(./assets/images/background/cloudy-background.jpg)')
            }
            else if(temp> 20 && temp<35){
                $('body').css('background-image','url(./assets/images/background/sunny-weather.jpg)')
            }
            else{
                debugger
                $('body').css('background-image','url(./assets/images/background/background-4_1024x424.jpg)')
            }
       
        
        }
       })


       temp=0
       

       $("#search").click(function(){


        $.ajax({
          
            url: endpoint + " &q=" +$('#city').val(),
            contentType: "application/json",
            dataType: 'json',
            success: function(result){
                console.log(result);
                country= result.location.country,
                console.log(country)
                temp=result.current.temp_c
                $("#card5 h4").text(result.location.name)
                $("#time5").text(result.current.last_updated)
                $("#icon5").attr("src",result.current.condition.icon)
                $("#country5").text(result.location.country)
                $("#region5").text(result.location.region)
                $("#temp5").text(result.current.temp_c).append("°C").css("font-size","28px")
                $("#temp5").mouseenter(function(){
                    $(this).text(result.current.temp_f).append(" F").css("font-size","28px")
                })
                $("#temp5").mouseleave(function(){
                    $(this).text(result.current.temp_c).append("°C").css("font-size","28px")
                })
                $("#hum5").text(result.current.humidity).append("  %").prepend("Humidity  :    ")
                $("#wind5").text(result.current.wind_mph).append("  mph").prepend("Wind-Speed  :    ")
            
                if(temp < 0 && temp <20){
                   
                    $('body').css('background-image','url(./assets/images/background/cloudy-background.jpg)')
                }
                else if(temp> 20 && temp<35){
                    $('body').css('background-image','url(./assets/images/background/sunny-weather.jpg)')
                }
                else{
                    debugger
                    $('body').css('background-image','url(./assets/images/background/background-4_1024x424.jpg)')
                }
           
            }
           })
    




       })



    //    $('#submit-btn1').click(function(){

       
    //     var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
    //     if (window.navigator && window.navigator.geolocation) {
    //         window.navigator.geolocation.getCurrentPosition(function(position) {
    //             $.getJSON(openWeatherMap, {
    //                 lat: position.coords.latitude,
    //                 lon: position.coords.longitude,
    //                 units: 'metric',
    //                 APPID: 'c9fb39bbf681938240eaea7da9698ce4'
    //             }).done(function(resp) {
    //                 console.log(resp)
    //                 console.log(resp.name)
    //                 console.log(resp.main.temp)
    //                 console.log(resp.main.humidity)
    //                 console.log(resp.main.temp_max)
    //                 console.log(resp.main.temp_min)
    //                 console.log(resp.wind.speed)
    //                 console.log(resp.weather[0].main)

    //                 $("#city-name1").text('City:: '+resp.name);
    //                 $("#city-weather1").text('Weather:: '+resp.weather[0].main);
    //                 $("#city-temp1").text('Temp:: '+resp.main.temp);
    //                 $("#city-huminity1").text('Humidity:: '+resp.main.humidity);
    //                 $("#city-wind-speed1").text('Wind-Speed:: '+resp.wind.speed);
    //                 $("#city-min-temp1").text('Min-Temp:: '+resp.main.temp_max);
    //                 $("#city-max-temp1").text('Max-Temp:: '+resp.main.temp_max);
    //             })
    //         })
    //     }

    // })

    // if(temp < 0 && temp <20){
                   
    //     $('body').css('background-image','url(snow.gif)')
    // }
    // else if(temp> 20 && temp<35){
    //     $('body').css('background-image','url(snow.gif)')
    // }
    // else{
    //     debugger
    //     $('body').css('background-image','url(snowbg.jpg)')
    // }


      





      }
    )




// $(document).ready(function(){
  
//     let apiKey='45a3da0996a6efdfee2c9b66f3062343'
    
//     //api.openweathermap.org/data/2.5/group?id=1275339,1259229,1275004,1264527&appid=45a3da0996a6efdfee2c9b66f3062343
//     let theUrl= 'http://api.openweathermap.org/data/2.5/group?id=1275339,1259229,1275004,1264527&appid=45a3da0996a6efdfee2c9b66f3062343'

//     $.ajax({
//         url:theUrl,
//         type:'json',
//         success:function(response){
//         console.log(response)

//     //     var result=[]
//     //     result+=
//     //     `<div class="col col-sm-12 col-md-4">

//     //     <div class="card text-center">
//     //     <div class="card-header text-info">
//     //     <h5>${response.location.name},${response.location.region},${response.location.country}</h5>
//     //     </div>
//     //     <div class="card-body">
//     //         <h5 class="card-title">${response.current.temp_c} degree C</h5>
//     //         <p class="card-text">${response.current.condition.text},<img src="${response.current.condition.icon}"></p>
//     //         <p class="card-text">wind_mph: ${response.current.wind_mph},wind_kph: ${response.current.wind_kph}</p>
          
//     //     </div>
//     //     <div class="card-footer text-muted">
//     //     last updated: ${response.current.last_updated}
//     //     </div>
//     //     </div>

        
//     //     </div>
//     //     <div class="col-sm-12 col-md-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>

        
//     //     `
//     //     $('.row').empty()
//     //     $('.row').append(result)
//         }
//    })



//      })






temp=0
//search by city function
$(document).ready(function(){
    //enable the search button only if input contains some text 
    $(document).ready(function () {
    $('#searchInput').keyup(function () {
        if ($(this).val() == '') {
           
            $('.enableOnInput').prop('disabled', true)
            

        } else {
            
            $('.enableOnInput').prop('disabled', false)
        }
    })
})

    //get button from DOM
    $('#searchBtn').click(function(){
        //get user input from DOM
        let searchKey = $('#searchInput').val().toLowerCase()
        let apiKey='330f410d0d1340eca59170741202110'
        //console.log(searchKey)

        let theUrl='http://api.weatherapi.com/v1/forecast.json?key='+apiKey+'&q='+searchKey.toString()
        //ajax function to hit api appending search key
        $.ajax({
            url:theUrl,
            type:'json',
            success:function(response){
            console.log(response)
            temp=response.current.temp_c
            var result=[]
            result+=
            `
            <div class="col col-sm-12 col-md-4">

            <div class="card text-center">
            <div class="card-header text-info">
            <h5>${response.location.name},${response.location.region},${response.location.country}</h5>
            </div>
            <div class="card-body">
                <h5 class="card-title">${response.current.temp_c} degree C</h5>
                <p class="card-text">${response.current.condition.text},<img src="${response.current.condition.icon}"></p>
                <p class="card-text">wind_mph: ${response.current.wind_mph},wind_kph: ${response.current.wind_kph}</p>
              
            </div>
            <div class="card-footer text-muted">
            last updated: ${response.current.last_updated}
            </div>
            </div>

            
            </div>
            <div id="barchart_material" class="col-sm-12 col-md-8">
            
            
            </div>
          
           
           
            `
            if(temp < 0 && temp <20){
                   
                $('body').css('background-image','url(./assets/images/background/cloudy-background.jpg)')
            }
            else if(temp> 20 && temp<35){
                $('body').css('background-image','url(./assets/images/background/summer.jpg)')
            }
            else{
                debugger
                $('body').css('background-image','url(./assets/images/background/background-4_1024x424.jpg)')
            }



            $('.row').empty()
            $('.row').append(result)

            google.charts.load('current', { 'packages': ['bar'] });
                google.charts.setOnLoadCallback(drawChart);

                function drawChart() {
                    var data = google.visualization.arrayToDataTable([
                        ['Hourly Forecast', 'Temperature', 'Humidity'],
                        [`${response.forecast.forecastday[0].hour[0].time}`, `${response.forecast.forecastday[0].hour[0].temp_c}`, `${response.forecast.forecastday[0].hour[0].humidity}`],
                        [`${response.forecast.forecastday[0].hour[1].time}`, `${response.forecast.forecastday[0].hour[1].temp_c}`, `${response.forecast.forecastday[0].hour[1].humidity}`],
                        [`${response.forecast.forecastday[0].hour[2].time}`, `${response.forecast.forecastday[0].hour[2].temp_c}`, `${response.forecast.forecastday[0].hour[2].humidity}`],
                        [`${response.forecast.forecastday[0].hour[3].time}`, `${response.forecast.forecastday[0].hour[3].temp_c}`, `${response.forecast.forecastday[0].hour[3].humidity}`],
                        [`${response.forecast.forecastday[0].hour[4].time}`, `${response.forecast.forecastday[0].hour[4].temp_c}`, `${response.forecast.forecastday[0].hour[4].humidity}`],
                        [`${response.forecast.forecastday[0].hour[5].time}`, `${response.forecast.forecastday[0].hour[5].temp_c}`, `${response.forecast.forecastday[0].hour[5].humidity}`],

                    ]);

                    var options = {
                        chart: {
                            title: 'Weather Report',
                            subtitle: `${response.location.name}`,
                        },
                        bars: 'vertical', // Required for Material Bar Charts.
                        series: {
                            0: { axis: 'Temperature' }, // Bind series 0 to an axis named 'distance'.
                            1: { axis: 'Humidity' } // Bind series 1 to an axis named 'brightness'.
                        },
                        axes: {
                            x: {
                                Temperature: { label: 'degree' }, // Bottom x-axis.
                                Humidity: { side: 'top', label: 'apparent magnitude' } // Top x-axis.
                            }
                        }
                    };

                    var chart = new google.charts.Bar(document.getElementById('barchart_material'));

                    chart.draw(data, google.charts.Bar.convertOptions(options));
                }
           }
       })



    })
})

//get current loaction weather
$(document).ready(function(){
    $('#locationBtn').click(function(){
        console.log('j')
        //navigator to get current location
        navigator.geolocation.getCurrentPosition(showPosition);
        function showPosition(position) {
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)
            let latLongSearch = `${position.coords.latitude}`+','+`${position.coords.longitude}`
            
            let apiKey='330f410d0d1340eca59170741202110'
            //console.log(searchKey)
    
            let theUrl='http://api.weatherapi.com/v1/forecast.json?key='+apiKey+'&q='+latLongSearch
            //ajax function to hit api appending lattitude and longitude
            $.ajax({
               
                url:theUrl,
                type:'json',
                success:function(response){
                console.log(response)
    
                var result=[]
                result+=
                `<div class="col col-sm-12 col-md-4">
    
                <div class="card text-center">
                <div class="card-header text-info">
                <h5>${response.location.name},${response.location.region},${response.location.country}</h5>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${response.current.temp_c} degree C</h5>
                    <p class="card-text">${response.current.condition.text},<img src="${response.current.condition.icon}"></p>
                    <p class="card-text">wind_mph: ${response.current.wind_mph},wind_kph: ${response.current.wind_kph}</p>
                  
                </div>
                <div class="card-footer text-muted">
                last updated: ${response.current.last_updated}
                </div>
                </div>
    
                
                </div>
                <div id="barchart_material_1" class="col-sm-12 col-md-8"></div>
    
                
                `
                $('.row').empty()
                $('#currentCityName').empty()
                $('.row').append(result)
                $('#currentCityName').append(response.location.name)
                google.charts.load('current', { 'packages': ['bar'] });
                google.charts.setOnLoadCallback(drawChart);

                function drawChart() {
                    var data = google.visualization.arrayToDataTable([
                        ['Hourly Forecast', 'Temperature', 'Humidity'],
                        [`${response.forecast.forecastday[0].hour[0].time}`, `${response.forecast.forecastday[0].hour[0].temp_c}`, `${response.forecast.forecastday[0].hour[0].humidity}`],
                        [`${response.forecast.forecastday[0].hour[1].time}`, `${response.forecast.forecastday[0].hour[1].temp_c}`, `${response.forecast.forecastday[0].hour[1].humidity}`],
                        [`${response.forecast.forecastday[0].hour[2].time}`, `${response.forecast.forecastday[0].hour[2].temp_c}`, `${response.forecast.forecastday[0].hour[2].humidity}`],
                        [`${response.forecast.forecastday[0].hour[3].time}`, `${response.forecast.forecastday[0].hour[3].temp_c}`, `${response.forecast.forecastday[0].hour[3].humidity}`],
                        [`${response.forecast.forecastday[0].hour[4].time}`, `${response.forecast.forecastday[0].hour[4].temp_c}`, `${response.forecast.forecastday[0].hour[4].humidity}`],
                        [`${response.forecast.forecastday[0].hour[5].time}`, `${response.forecast.forecastday[0].hour[5].temp_c}`, `${response.forecast.forecastday[0].hour[5].humidity}`],

                    ]);

                    var options = {
                        chart: {
                            title: 'Weather Report',
                            subtitle: `${response.location.name}`,
                        },
                        bars: 'vertical', // Required for Material Bar Charts.
                        series: {
                            0: { axis: 'Temperature' }, // Bind series 0 to an axis named 'distance'.
                            1: { axis: 'Humidity' } // Bind series 1 to an axis named 'brightness'.
                        },
                        axes: {
                            x: {
                                Temperature: { label: 'degree' }, // Bottom x-axis.
                                Humidity: { side: 'top', label: 'apparent magnitude' } // Top x-axis.
                            }
                        }
                    };

                    var chart = new google.charts.Bar(document.getElementById('barchart_material_1'));

                    chart.draw(data, google.charts.Bar.convertOptions(options));
                }
                
               }
           })

        }
        
    })
})




//accross cities

$(document).ready(function(){
    $('#acrossCitiesBtn').click(function(){
   
    
    var theurl='http://api.openweathermap.org/data/2.5/group?id=1273294,1275339,1259229,1275004,1262180,1264527&appid=039223fbf0ae5b326ed4e62570adbe28'
             $.ajax({
             type:'GET',
             dataType:'json',
             url:theurl,
             success:function(response){

                console.log(response)
                console.log(response.list[0].main.humidity)
                console.log(response.list[0].main.temp)
                console.log(response.list[0].name)
                console.log(response.list[1].main.humidity)
                console.log(response.list[1].main.temp)
                console.log(response.list[1].name)
                 let users= []
               
                users +=
                `<div class="data">
                </div>
                </div>
               
                    `
                //for loading data
                google.charts.load('current', {'packages':['bar']});
                google.charts.setOnLoadCallback(drawChart);

                function drawChart() {
                var data = google.visualization.arrayToDataTable([
                    ['Cities', 'Temprature', 'Humidity'],
                    [`${response.list[0].name}`, `${response.list[0].main.temp}`, `${response.list[0].main.humidity}`],
                    [`${response.list[1].name}`, `${response.list[1].main.temp}`, `${response.list[1].main.humidity}`],
                    [`${response.list[2].name}`, `${response.list[2].main.temp}`, `${response.list[2].main.humidity}`],
                    [`${response.list[3].name}`, `${response.list[3].main.temp}`, `${response.list[3].main.humidity}`],
                    [`${response.list[4].name}`, `${response.list[4].main.temp}`, `${response.list[4].main.humidity}`],
                    [`${response.list[5].name}`, `${response.list[5].main.temp}`, `${response.list[5].main.humidity}`]
                    
                ]);

                var options = {
                    chart: {
                    title: 'Weather Report',
                    subtitle: 'Across Cities',
                    },
                    bars: 'vertical' // Required for Material Bar Charts.
                };

                var chart = new google.charts.Bar(document.getElementById('barchart_material'));

                chart.draw(data, google.charts.Bar.convertOptions(options));
                }
                    $('.data').empty()
                    $('.row').empty()
                    $('.container-fluid').append(users)

            //   console.log(response)
            //   console.log(response.location.name)
            //   console.log(response.location.region)
            //   console.log(response.location.country)
            //   console.log(response.location.lat)
            //   console.log(response.location.lon)
            //   console.log(response.location.tz_id)
            //   console.log(response.location.localtime_epoch)
            //   console.log(response.location.localtime)

           }

              }

          )

     })


     
 })
 