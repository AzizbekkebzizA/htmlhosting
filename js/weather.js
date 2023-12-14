fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=6daf33fdb454d846b106ce158750f2c8`)
.then(res => res.json())
.then(data => console.log(data))
