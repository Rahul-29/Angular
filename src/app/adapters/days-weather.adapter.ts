import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { WeatherEntity } from '../models/weather.model';
import { Coordinates } from '../models/coordinate.model';
import { WeatherDetails } from '../models/weather-details.model';
import { WeatherParameters, Wind, Clouds, Rain } from '../models/parameters.model';
import { Weather, City, ListEntity, Main } from '../models/weather-entity.model';
import { element } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class DaysWeatherAdapter implements Adapter<Weather> {
  adapt(data: any): Weather {

    const city = new City(data.city.id, data.city.name, new Coordinates(data.city.coord.lon, data.city.coord.lan),
    data.city.country, data.city.population, data.city.timezone, data.city.sunrise, data.city.susnset);

    // const weatherDetails = new Array<WeatherDetails>();
    // data.list.weather.forEach(element => {
    //   weatherDetails.push(
    //     new WeatherDetails(
    //       element.id,
    //       element.main,
    //       element.description,
    //       element.icon
    //     )
    //   );
    // });

    const listEntity = new Array<ListEntity>();
    data.list.forEach(weatherListElement => {

      const weatherDetails = this.getWeatherDetailsForList(weatherListElement);
      listEntity.push(
        new ListEntity(
          // weatherListElement.dt,
          new Main(weatherListElement.main.temp, weatherListElement.main.temp_min, weatherListElement.main.temp_max,
            weatherListElement.main.pressure, weatherListElement.main.sea_level, weatherListElement.main.grnd_level,
             weatherListElement.main.humidity),
            // new Clouds(weatherListElement.clouds.all),
            new Wind(weatherListElement.wind.speed, weatherListElement.wind.deg),
            // new WeatherSystem(weatherListElement.sys.type, weatherListElement.sys.id, weatherListElement.sys.country,
            //    weatherListElement.sys.sunrise, weatherListElement.sys.sunset),
            weatherListElement.dt_txt,
            weatherDetails,
            weatherListElement.rain ? new Rain(weatherListElement.rain.ih) : null
        )
      );
    });

    return new Weather(
      city,
      listEntity
    );



  }

  getWeatherDetailsForList(listElement) {
    const weatherDetails = new Array<WeatherDetails>();
    listElement.weather.forEach(weather => {
      weatherDetails.push(new WeatherDetails(weather.id, weather.main, weather.description, weather.icon));
    });
    return weatherDetails;
  }

  // adapt(item: any): WeatherEntity {

  //   const weatherDetails = new WeatherDetails(item.weather[0].id, item.weather[0].main,
  //     item.weather[0].description, item.weather[0].icon);
  //   const weatherDetailsArray = new Array<WeatherDetails>();
  //   weatherDetailsArray.push(weatherDetails);
  //   return new WeatherEntity(
  //     new Coordinates(item.coord.lon, item.coord.lat),
  //     weatherDetailsArray,
  //     item.base,
  //     new WeatherParameters(item.main.temp, item.main.pressure, item.main.humidity, item.main.temp_min, item.main.temp_max),
  //     item.visibility,
  //     new Wind(item.wind.speed, item.wind.deg),
  //     new Clouds(item.clouds.all),
  //     item.dt,
  //     new WeatherSystem(item.sys.type, item.sys.id, item.sys.country, item.sys.sunrise, item.sys.susnset),
  //     item.timezone,
  //     item.id,
  //     item.name,
  //     item.cod,
  //     item.rain ? new Rain(item.rain.ih) : null

  //   );
  // }


}




