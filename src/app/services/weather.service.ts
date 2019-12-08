import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherEntity } from '../models/weather.model';
import { WeatherAdapter } from '../adapters/weather.adapter';
import { DaysWeatherAdapter } from '../adapters/days-weather.adapter';
import { Weather } from '../models/weather-entity.model';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    url = 'http://api.openweathermap.org/data/2.5/weather'; // ?q=London,uk&appid=a37aa2b98ecae5f776fe4b04cf5de8c0
    constructor(private httpClient: HttpClient, private weatherAdapter: WeatherAdapter, private daysWeatherAdapter: DaysWeatherAdapter) {}

    getWeatherData(location: string): Observable<WeatherEntity> {
      const params = new HttpParams().set('q', location).set('appid', 'a37aa2b98ecae5f776fe4b04cf5de8c0');
      return this.httpClient.get<any>(this.url, {params}).pipe(
        // passing data to adapter to deserialize to Weather object
        map((data: any) => this.weatherAdapter.adapt(data))
      );
    }

    getFiveDaysData(location: string): Observable<Weather> {
      const params = new HttpParams().set('q', location).set('appid', 'a37aa2b98ecae5f776fe4b04cf5de8c0');
      return this.httpClient.get<any>('http://api.openweathermap.org/data/2.5/forecast', {params}).pipe(
        map((data: any) => this.daysWeatherAdapter.adapt(data))
      );
    }
}
