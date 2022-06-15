const dummy = 
    // 20220615112014
// https://api.openweathermap.org/data/2.5/weather?id=1835848&lang=kr&appid=edc606e1cddb031cf69c44e1de3ca86e

{
    "coord": {
      "lon": 126.9778,
      "lat": 37.5683
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "실 비",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 289.45,
      "feels_like": 289.43,
      "temp_min": 288.91,
      "temp_max": 289.93,
      "pressure": 1007,
      "humidity": 88
    },
    "visibility": 10000,
    "wind": {
      "speed": 3.09,
      "deg": 80
    },
    "rain": {
      "1h": 0.21
    },
    "clouds": {
      "all": 100
    },
    "dt": 1655259462,
    "sys": {
      "type": 1,
      "id": 8105,
      "country": "KR",
      "sunrise": 1655237419,
      "sunset": 1655290484
    },
    "timezone": 32400,
    "id": 1835848,
    "name": "Seoul",
    "cod": 200
  }


export { dummy };