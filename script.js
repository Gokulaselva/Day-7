//Solving problems using array functions on the rest countries' data.
//Get all the countries from the Asia continent /region using the Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.send()
request.onload=function(){
   var data = request.responce
   var result = JSON.parse(data)
   var res = result.filter((ele)=>{ele.Asiancontinent.region})
   console.log(res)
}
//Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.send()
request.onload=function(){
   var data = request.responce
   var result = JSON.parse(data)
   var res = result.filter((ele)=>{ele.population<200000})
   console.log(res)
}
//Print the following details name, capital, flag using forEach function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.send()
request.onload=function(){
   var data = request.responce
   var result = JSON.parse(data)
   var res = result.forEach((ele)=>{console.log('${ele.name}:${ele.capital}:${ele.flag}')})
}