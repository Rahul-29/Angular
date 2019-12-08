import { WeatherDetails } from './weather-details.model';
import { WeatherParameters, Wind, Rain, Clouds } from './parameters.model';
import { Coordinates } from './coordinate.model';
export class WeatherEntity {
  constructor(
    // private _coordinate: Coordinates,
    private _details: Array<WeatherDetails>,
    // private _base: string,
    private _main: WeatherParameters,
    // private _visibililty: number,
    private _wind: Wind,
    // private _clouds: Clouds,
    private _dt: number,
    // private _sys: WeatherSystem,
    // private _timezone: number,
    // private _id: number,
    private _name: string,
    // private _cod: number,
    private _rain?: Rain
  ) { }

 
  public get details(): Array<WeatherDetails> {
    return this._details;
  }
  public set details(value: Array<WeatherDetails>) {
    this._details = value;
  }
 
  public get main(): WeatherParameters {
    return this._main;
  }
  public set main(value: WeatherParameters) {
    this._main = value;
  }
 
  public get wind(): Wind {
    return this._wind;
  }
  public set wind(value: Wind) {
    this._wind = value;
  }
 
  public get dt(): number {
    return this._dt;
  }
  public set dt(value: number) {
    this._dt = value;
  }
  
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  
  public get rain(): Rain {
    return this._rain;
  }
  public set rain(value: Rain) {
    this._rain = value;
  }

}
