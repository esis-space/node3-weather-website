const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8def16938305cf8ad942c49622873f87/' + latitude + ',' + longitude + '?units=si'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out, with a high of ' + body.daily.data[0].temperatureHigh + ' degrees and a low of ' + body.daily.data[0].temperatureLow + ' degrees. There is a ' + body.currently.precipProbability + '% chance of rain.')
            console.log(body.daily.data[0].temperatureHigh)
        }
    })
}


module.exports = forecast