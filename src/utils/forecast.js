const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=548b1058bd296f5cc13d6c9c05570bc9&query='+latitude+','+longitude+'&units=m'

    request({url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ': It is currently ' + body.current.temperature + ' degrees outside and it feel like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast