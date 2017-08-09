const weatherJs = require('weather-js');

let Weather = function (loc) {
    this.location = loc;
    this.getWeather = () => {
          return new Promise((resolve, reject) => {   
        weatherJs
            .find({
                search: this.location,
                degreeType: 'F'
            }, function (err, result) {
                 console.log(result)
              
                    if (err) {
                        reject(`errpr ${err}`)
                    } else {
                        console.log(result)
                        resolve(result)
                    }
                })

            })

    }
}

let Dzmitry = new Weather('Charlotte,NC')
Dzmitry.getWeather().then(function(data){console.log(data)})