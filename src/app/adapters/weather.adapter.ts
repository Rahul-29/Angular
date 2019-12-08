import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { WeatherEntity } from '../models/weather.model';
import { Coordinates } from '../models/coordinate.model';
import { WeatherDetails } from '../models/weather-details.model';
import { WeatherParameters, Wind, Clouds, Rain } from '../models/parameters.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherAdapter implements Adapter<WeatherEntity> {

  adapt(item: any): WeatherEntity {

    const weatherDetails = new WeatherDetails(item.weather[0].id, item.weather[0].main,
      item.weather[0].description, item.weather[0].icon);
    const weatherDetailsArray = new Array<WeatherDetails>();
    weatherDetailsArray.push(weatherDetails);
    return new WeatherEntity(
      // new Coordinates(item.coord.lon, item.coord.lat),
      weatherDetailsArray,
      // item.base,
      new WeatherParameters(item.main.temp, item.main.pressure, item.main.humidity, item.main.temp_min, item.main.temp_max),
      // item.visibility,
      new Wind(item.wind.speed, item.wind.deg),
      // new Clouds(item.clouds.all),
      item.dt,
      // new WeatherSystem(item.sys.type, item.sys.id, item.sys.country, item.sys.sunrise, item.sys.susnset),
      // item.timezone,
      // item.id,
      item.name,
      // item.cod,
      item.rain ? new Rain(item.rain.ih) : null

    );
  }


}
