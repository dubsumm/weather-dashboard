var searchValue = document.getElementById('searchValue')
var findCity = document.getElementById("btn")
let btnEl = document.getElementById("btn")
let CityEl = document.getElementById("searched-cities")
var citySearchedArr = []
clickID =0;
var apiKey = '47d000c1b469565617a12bd3309271ae';
function getAPI() {
  var currentUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue.value}&appid=${apiKey}&exclude=hourly,minutely,alerts&units=imperial`;

  fetch(currentUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //  this will be where i bring in the data
    })

$('#btn').on('click', function() {

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

  // $(this).siblings('textarea').text(retrievels);

})