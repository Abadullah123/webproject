const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');


const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_stat = document.getElementById('temp_stat');
const data_hide = document.querySelector(".data_hide");

const temp_real_val = document.getElementById('temp_real_val');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityval= cityName.value;
    let apiKey = '01d19596edf38a072551a144dde633fb';
    data_hide.classList.add('data_hide')

    
    if(cityval===""){
        city_name.innerText = `plz write the name before your search`
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=${apiKey}`
            let respon = await fetch(url)
            const data = await respon.json();
            const arrData = [data];

            city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            console.log(temp_real_val);

            const tempMood = arrData[0].weather[0].main;
  

            // condition to check suuny or cludy
           if(tempMood == "Clear"){
            temp_stat.innerHTML =
            '<i class="fa-sharp fa-solid fa-sun" style="color: #eccc68"></i>';
           }else if(tempMood == "clouds"){
            temp_stat.innerHTML =
                      '<i class="fa fa-cloud" aria-hidden="true" style="color: #f1f2f6"></i>';
           }else if(tempMood == "rain"){
            temp_stat.innerHTML =
            '<i class="fa-sharp fa-solid fa-cloud-rain" style="color: #f1f2f6"></i>'
           }
           else {
            temp_stat.innerHTMl=
                            '<i class="fa fa-cloud" aria-hidden="true" style="color: #f1f2f6"></i>'
           } 

    data_hide.classList.remove('data_hide')



        }catch{
        city_name.innerText = `plz write the city name`;
    data_hide.classList.add('data_hide')

        }
    }
}

submitBtn.addEventListener('click', getInfo);





// code in GTP 
// document.addEventListener('DOMContentLoaded', () => {
//     const apiKey = 'YOUR_API_KEY_HERE';  // Replace with your actual API key from OpenWeatherMap
//     const submitBtn = document.getElementById('submitBtn');
//     const cityName = document.getElementById('cityName');
//     const weatherDescription = document.getElementById('weatherDescription');
//     const temperature = document.getElementById('temperature');

//     submitBtn.addEventListener('click', () => {
//         const city = cityName.value;
//         if (city) {
//             fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data.cod === 200) {
//                         weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
//                         temperature.textContent = `Temperature: ${data.main.temp}°C`;
//                     } else {
//                         weatherDescription.textContent = 'City not found. Please try again.';
//                         temperature.textContent = '';
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error fetching weather data:', error);
//                     weatherDescription.textContent = 'An error occurred. Please try again.';
//                     temperature.textContent = '';
//                 });
//         } else {
//             weatherDescription.textContent = 'Please enter a city name.';
//             temperature.textContent = '';
//         }
//     });
// });
