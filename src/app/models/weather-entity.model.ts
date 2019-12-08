import { WeatherEntity } from './weather.model';
import { Clouds, Wind, Rain } from './parameters.model';
import { Coordinates } from './coordinate.model';
import { WeatherDetails } from './weather-details.model';

export class Weather {
  constructor(
    // private _cod: string,
    // private _message: number,
    // private _cnt: number,
    private _city: City,
    private _list?: (ListEntity)[]
  ) {}

  public get list(): (ListEntity)[] {
    return this._list;
  }
  public set list(value: (ListEntity)[]) {
    this._list = value;
  }
  public get city(): City {
    return this._city;
  }
  public set city(value: City) {
    this._city = value;
  }
}

export class ListEntity {
  constructor(
    // private _dt: number,
    private _main: Main,
    // private _clouds: Clouds,
    private _wind: Wind,
    // private _sys: WeatherSystem,
    private _date: Date,
    private _weather?: WeatherDetails[],
    private _rain?: Rain,
  ) {}

  public get wind(): Wind {
    return this._wind;
  }
  public set wind(value: Wind) {
    this._wind = value;
  }

  public get date(): Date {
    return this._date;
  }
  public set date(value: Date) {
    this._date = value;
  }
  public get rain(): Rain {
    return this._rain;
  }
  public set rain(value: Rain) {
    this._rain = value;
  }

   public get main(): Main {
    return this._main;
  }
  public set main(value: Main) {
    this._main = value;
  }

   public get weather(): WeatherDetails[] {
    return this._weather;
  }
  public set weather(value: WeatherDetails[]) {
    this._weather = value;
  }

}
export class Main {
  constructor(
    private _temperature: number,
    private _minTemperature: number,
    private _maxTemperature: number,
    private _pressure: number,
    private _sea_level: number,
    private _grnd_level: number,
    private _humidity: number
  ) {}

  public get temp(): number {
    return this._temperature;
  }
  public set temp(value: number) {
    this._temperature = value;
  }
  public get temp_min(): number {
    return this._minTemperature;
  }
  public set temp_min(value: number) {
    this._minTemperature = value;
  }
  public get temp_max(): number {
    return this._maxTemperature;
  }
  public set temp_max(value: number) {
    this._maxTemperature = value;
  }
  public get pressure(): number {
    return this._pressure;
  }
  public set pressure(value: number) {
    this._pressure = value;
  }
  public get sea_level(): number {
    return this._sea_level;
  }
  public set sea_level(value: number) {
    this._sea_level = value;
  }
  public get grnd_level(): number {
    return this._grnd_level;
  }
  public set grnd_level(value: number) {
    this._grnd_level = value;
  }
  public get humidity(): number {
    return this._humidity;
  }
  public set humidity(value: number) {
    this._humidity = value;
  }

}

export class City {

  constructor(
    private _id: number,
    private _name: string,
    private _coord: Coordinates,
    private _country: string,
    private _population: number,
    private _timezone: number,
    private _sunrise: number,
    private _sunset: number
  ) {}

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get coord(): Coordinates {
    return this._coord;
  }
  public set coord(value: Coordinates) {
    this._coord = value;
  }
  public get country(): string {
    return this._country;
  }
  public set country(value: string) {
    this._country = value;
  }
  public get population(): number {
    return this._population;
  }
  public set population(value: number) {
    this._population = value;
  }
  public get timezone(): number {
    return this._timezone;
  }
  public set timezone(value: number) {
    this._timezone = value;
  }
  public get sunrise(): number {
    return this._sunrise;
  }
  public set sunrise(value: number) {
    this._sunrise = value;
  }
  public get sunset(): number {
    return this._sunset;
  }
  public set sunset(value: number) {
    this._sunset = value;
  }

}

