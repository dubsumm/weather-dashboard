var findCity = document.getElementById("btn")
let btnEl = document.getElementById("btn")
let CityEl = document.getElementById("searched-cities")
var curWeather = document.getElementById('current-weather')
var citySearchedArr = []
clickID =0;
var apiKey = '47d000c1b469565617a12bd3309271ae';

function getAPI() {
  var cityUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Savannah&appid=${apiKey}&exclude=hourly,minutely,alerts&units=imperial`;

  fetch(cityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var divEl = document.createElement('div');
      divEl.className = "border";

      var h1El = document.createElement('h1');
      h1El.textContent = data.city.name;
      var pTime = document.createElement('p');
      pTime.textContent = moment.unix(data.list[0].dt).format('MM/DD/YYYY');
      var pTemp = document.createElement('p');
      pTemp.textContent = `Temperature: ${data.list[0].main.temp} F, feels like ${data.list[0].main.feels_like} F`;
      var pHumid = document.createElement('p');
      pHumid.textContent = `Humidity: ${data.list[0].main.humidity} %`;
      var pWind = document.createElement('p');
      pWind.textContent = `Wind Speed: ${data.list[0].wind.speed} mph`;
      var iconID = data.list[0].weather[0].icon;
      var iconURl = 'http://openweathermap.org/img/wn/' + iconID + '@2x.png';  
      var icon = document.createElement('img')
      icon.setAttribute('src', iconURl);
      divEl.append(h1El, icon, pTime, pTemp, pHumid, pWind);
      curWeather.append(divEl);
    })
  }

$('#btn').on('click', function(e) {
  e.preventDefault()
  
  CityEl.innerHTML ='';
  var id = clickID
  clickID++
  var textInput = $(this).siblings('.city-search').val()
  // console.log(id)
  // console.log(textInput)
  citySearchedArr.push(textInput)
  // console.log(citySearchedArr);
  citySearchedArr.forEach((city) => {
    var searchedBtns = document.createElement('button');
    searchedBtns.setAttribute('value', city)
    searchedBtns.textContent = city
    CityEl.append(searchedBtns)
  })
  localStorage.setItem(id, textInput);
  var retrievels = localStorage.getItem(id);
  console.log(retrievels);

  $(this).siblings('textarea').text(retrievels);
getAPI();
})