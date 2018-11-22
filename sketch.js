var weather
var unit = 'metric';
var idCode;
var main;

function setup() {
  createCanvas(300, 300);

	  imgCloud = loadImage("images/cloud.png")
    imgMist = loadImage("images/wind.png")
    imgSnow = loadImage("images/snowflake.png")
    imgSun = loadImage("images/sun.png")
	loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&APPID=a8f9fa446000f3cabdfc6316f300c0fd&units='+ unit,gotData);
}
function gotData(data){
	weather = data;
}
function draw() {
  background(220);

	if (weather){
		  main = weather.weather[0].main;
		  idCode = weather.weather[0].id;

		textSize(25);
		text("" + main, 100, 150);
		textSize(50);
		text("" + weather.main.temp,75,200);
    iconPicker();
	}
}
function iconPicker(){
  if (main == "Snow"){
    image(imgSnow,85,10);
  }
  if (main == "Scattered clouds"){
    image(imgCloud,85,10);
  }
  if (main == "Clear sky"){
    image(imgSun,85,10);
  }

  if (main == "Few clouds"){
    image(imgCloud,85,10);
  }

  if (main == "Scattered clouds"){
    image(imgCloud,85,10);
  }

  if (main == "Scattered clouds"){
    image(imgCloud,85,10);
  }
  if (main == "Broken clouds"){
    image(imgCloud,85,10);
  }

  if (main == "Clouds"){
    image(imgCloud,85,10);
  }
}
