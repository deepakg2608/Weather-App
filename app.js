const apiKey=`db9f4f01dcf1515bb7b4d88afb214390`;
// const api = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}&units=metric`;
// const imgUrl=`https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const form=document.querySelector('#form');
const weather=document.querySelector('#weather');
const search=document.querySelector('#search');

const getWeather=async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(url)
    .then(responce =>{
        return responce.json()
    })
    .then(data =>{
        showWeather(data)
    })
    .catch(()=>{
        weather.innerHTML=`<h2 class="text-2xl font-bold text-white">city not found</h2>`
    })
    // const data = await response.json()
    // return showWeather(data);
}


const showWeather=(data)=>{
    console.log(data)
    weather.innerHTML=`<div id="inner_weather" class="row w-150 flex justify-center items-center">
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2 class="text-3xl font-bold text-white">${data.main.temp} ℃</h2>
            <h4 class="text-xl font-bold text-white">${data.weather[0].main}</h4>
        </div>

    </div>`
}

form.addEventListener('submit',function(event){
    getWeather(search.value);
    event.preventDefault();
})