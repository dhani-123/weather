var inputvalue=document.querySelector('#cityinput')
var btn=document.querySelector('#add')
var city=document.querySelector('#cityoutput')
var descrip=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
apik="2107c49342c20a5e52e63a5e4015d11a"//data will be fetched from the website using our own apikey(apik)
function conversion(val) //to change temp from farehnheit to celcius
{
    return (val-273).toFixed(3)
}

btn.addEventListener('click',function()
{//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    //above link is modified as below, changed latitude and longitude by city name fetch by variable 'inputvalue'
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())//data should be fetched only in json format

    .then(data =>//fetching data into variables 
    {
        var nameval=data['name']
        var descrip=data['weather']['0']['description']
        var temperature=data['main']['temp']
        var wndspeed=data['wind']['speed']

        //to send the data to html for output
        city.innerHTML=`Weather of <span>${nameval}<span>`
        temp.innerHTML=`Temperature: <span>${conversion(temperature)} C</s`
        description.innerHTML=`Sky Conditions: <span>${descrip}<span>`
        wind.innerHTML=`Wind Speed: <span>${wndspeed} km/h<span>`

    })

    .catch(err => alert('You entered wrong City Name'))
})




    
