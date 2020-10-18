<template>
<div>
    <div class="shadow mb-4">
        <nav class="navbar navbar-expand-md" style="background-color: #02233B;">
            <!-- Brand -->
            <a class="navbar-brand" href="#">
                <img src="images/weather.png" alt="Logo" style="width:40px;">
            </a>
          
            <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#"><b style="color:white"> Weather App </b></a>
                </li>
                
              </ul>
            </div>
          </nav>
    </div>    



<div class="container owl-carousel owl-theme mt-5">

<!--first region component-->
<div class="item" >
    
    <div class="card" style="background-color:rgba(0, 0, 0, 0.5)" >
      <div class="card-body text-center">

        <p class="air-pressure text-light" style="font-size:4.5em"><span v-if="weathers.length>0">{{weathers[0].main.temp}}</span><span style="font-size:75px;">&deg;C</span></p>

            <div class="text-center"><img :src="`http://openweathermap.org/img/w/${weathers[0].weather[0].icon}.png`" alt="" style="width:20%" v-if="weathers.length>0"></div>
        <p style="font-size: 36px;color:white" v-if="weathers.length>0">{{weathers[0].weather[0].main}}</p>
        <p style="font-size: 36px;color:white" v-else>Loading...</p>

        <p style="font-size: larger;color:white" class="wind-speed" v-if="weathers.length>0">{{weathers[0].name}}</p>
        <p style="font-size: larger;color:white" class="wind-speed" v-else>Loading...</p>

        <div class="d-flex p-2" style="justify-content: center;">
          
          <div class="box card-p1 rounded" style="position: relative;">
            <p class="text-light text-center mt-2"><i class="fas fa-wind" style="font-size:32px;"></i></p>

            <p class="text-light text-center" v-if="weathers.length>0">{{weathers[0].wind.speed}}km/h</p>
             <p class="text-light text-center" v-else>Loading...</p>
            <div style="position: absolute;bottom:-27px;left:30%">
              <span class="text-light">Wind</span>
            </div>

          </div>

         <div class="box card-p1 rounded" style="position: relative;">
            <p class="text-light text-center mt-2"><img src="/images/humidity.png" alt=""  style="width:40px;margin-left:20%"></p>

            <p class="text-light text-center" v-if="weathers.length>0">{{weathers[0].main.humidity}}% </p>
             <p class="text-light text-center" v-else>Loading...</p>
            <div style="position: absolute;bottom:-27px;left:15%">
              <span class="text-light">Humidity</span>
            </div>

          </div>


         <div class="box card-p1 rounded" style="position: relative;">
            <p class="text-light text-center mt-2"><img src="/images/pressure.png" alt=""  style="width:40px;margin-left:20%"></p>

            <p class="text-light text-center" v-if="weathers.length>0">{{weathers[0].wind.speed}}hpa</p>
             <p class="text-light text-center" v-else>Loading...</p>
            <div style="position: absolute;bottom:-27px;left:15%">
              <span class="text-light">Pressure</span>
            </div>

          </div>


        </div>
      </div>
    </div>
  </div>



<!--Second region component-->

  <div class="item" >
    
    <div class="card" style="background-color:rgba(0, 0, 0, 0.5)" >
      <div class="card-body text-center">

        <p class="air-pressure text-light" style="font-size:4.5em"><span v-if="weathers.length>0">{{weathers[1].main.temp}}</span><span style="font-size:75px;">&deg;C</span></p>

            <div class="text-center"><img :src="`http://openweathermap.org/img/w/${weathers[1].weather[0].icon}.png`" alt="" style="width:20%" v-if="weathers.length>0"></div>
        <p style="font-size: 36px;color:white" v-if="weathers.length>0">{{weathers[1].weather[0].main}}</p>
        <p style="font-size: 36px;color:white" v-else>Loading...</p>

        <p style="font-size: larger;color:white" class="wind-speed" v-if="weathers.length>0">{{weathers[1].name}}</p>
        <p style="font-size: larger;color:white" class="wind-speed" v-else>Loading...</p>

        <div class="d-flex p-2" style="justify-content: center;">
          
          <div class="box card-p1 rounded" style="position: relative;">
            <p class="text-light text-center mt-2"><i class="fas fa-wind" style="font-size:32px;"></i></p>

            <p class="text-light text-center" v-if="weathers.length>0">{{weathers[1].wind.speed}}km/h</p>
             <p class="text-light text-center" v-else>Loading...</p>
            <div style="position: absolute;bottom:-27px;left:30%">
              <span class="text-light">Wind</span>
            </div>

          </div>

         <div class="box card-p1 rounded" style="position: relative;">
            <p class="text-light text-center mt-2"><img src="/images/humidity.png" alt=""  style="width:40px;margin-left:20%"></p>

            <p class="text-light text-center" v-if="weathers.length>0">{{weathers[1].main.humidity}}% </p>
             <p class="text-light text-center" v-else>Loading...</p>
            <div style="position: absolute;bottom:-27px;left:15%">
              <span class="text-light">Humidity</span>
            </div>

          </div>


         <div class="box card-p1 rounded" style="position: relative;">
            <p class="text-light text-center mt-2"><img src="/images/pressure.png" alt=""  style="width:40px;margin-left:20%"></p>

            <p class="text-light text-center" v-if="weathers.length>0">{{weathers[1].wind.speed}}hpa</p>
             <p class="text-light text-center" v-else>Loading...</p>
            <div style="position: absolute;bottom:-27px;left:15%">
              <span class="text-light">Pressure</span>
            </div>

          </div>


        </div>
      </div>
    </div>
  </div>


<!--Third region component-->

  <div class="item" >
    
    <div class="card" style="background-color:rgba(0, 0, 0, 0.5)" >
      <div class="card-body text-center">

        <p class="air-pressure text-light" style="font-size:4.5em"><span v-if="weathers.length>0">{{weathers[2].main.temp}}</span><span style="font-size:75px;">&deg;C</span></p>

            <div class="text-center"><img :src="`http://openweathermap.org/img/w/${weathers[2].weather[0].icon}.png`" alt="" style="width:20%" v-if="weathers.length>0"></div>
        <p style="font-size: 36px;color:white" v-if="weathers.length>0">{{weathers[2].weather[0].main}}</p>
        <p style="font-size: 36px;color:white" v-else>Loading...</p>

        <p style="font-size: larger;color:white" class="wind-speed" v-if="weathers.length>0">{{weathers[2].name}}</p>
        <p style="font-size: larger;color:white" class="wind-speed" v-else>Loading...</p>

        <div class="d-flex p-2" style="justify-content: center;">
          
          <div class="box card-p1 rounded" style="position: relative;">
            <p class="text-light text-center mt-2"><i class="fas fa-wind" style="font-size:32px;"></i></p>

            <p class="text-light text-center" v-if="weathers.length>0">{{weathers[2].wind.speed}}km/h</p>
             <p class="text-light text-center" v-else>Loading...</p>
            <div style="position: absolute;bottom:-27px;left:30%">
              <span class="text-light">Wind</span>
            </div>

          </div>

         <div class="box card-p1 rounded" style="position: relative;">
            <p class="text-light text-center mt-2"><img src="/images/humidity.png" alt=""  style="width:40px;margin-left:20%"></p>

            <p class="text-light text-center" v-if="weathers.length>0">{{weathers[2].main.humidity}}% </p>
             <p class="text-light text-center" v-else>Loading...</p>
            <div style="position: absolute;bottom:-27px;left:15%">
              <span class="text-light">Humidity</span>
            </div>

          </div>


         <div class="box card-p1 rounded" style="position: relative;">
            <p class="text-light text-center mt-2"><img src="/images/pressure.png" alt=""  style="width:40px;margin-left:20%"></p>

            <p class="text-light text-center" v-if="weathers.length>0">{{weathers[2].wind.speed}}hpa</p>
             <p class="text-light text-center" v-else>Loading...</p>
            <div style="position: absolute;bottom:-27px;left:15%">
              <span class="text-light">Pressure</span>
            </div>

          </div>


        </div>
      </div>
    </div>
  </div>















</div>









</div>
  
</template>

<script>

export default {
    name:'Weather',
    data(){
        return {            
            weatherLocs:['arusha','mbeya','dar es salaam'],   //3 regions to get there weather         
            weathers:[],
            intervalId:0,
            count:0,
            API_KEY:process.env.VUE_APP_WKEY
            
        }
    },
    computed:{
        postdata:function(){
            return this.weathers;
        }
    },
    mounted(){
        this.getWeather();
    },

    created(){
// Get update weather info after every 5 minutes
//console.log(process.env.VUE_APP_WKEY);
this.intervalId= setInterval(() => {
        this.getWeather(); 
       // this.count+=1;
        //console.log(API_KEY); 
        //console.log ("Weather Updated");
    }, 300000);
    
    },
    

    methods:{
    loadWeather:function(location){
      //load the weather through the weather
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${this.API_KEY}`)
            .then(response =>response.json())
            .then(weatherData=>{console.log(weatherData);this.weathers.push(weatherData)})           
            .catch(error=>console.log("Error:"+error));
},


getWeather:function(){    
   this.weatherLocs.forEach(location=>this.loadWeather(location));
}

}

}



</script>

<style>
   
    .card-p1{
      box-sizing: border-box;
      border-bottom: 30px solid rgba(0, 0, 0, 0.4);
    }

    .box{
      min-width:35%;
      min-height:35%;
      margin: 5px;
      background-color: rgba(86, 61, 97, 0.4);
    }


</style>