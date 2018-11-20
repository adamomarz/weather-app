var weather
var unit = 'metric';
function setup() {
  createCanvas(400, 400);
	loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&APPID=a8f9fa446000f3cabdfc6316f300c0fd&units='+ unit,gotData);
}
function gotData(data){
	weather = data;
}
function draw() {
  background(220);

	if (weather){
		var description = weather.weather[0].description;
		var main = weather.weather[0].main;
		textSize(10);
		text("" + description, 20, 80);
		textSize(10);
		text("" + main, 50, 100);
		textSize(50);
		text("" + weather.main.temp,150,150);
	}
}
