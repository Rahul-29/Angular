export class WeatherParameters {

  constructor(
    private _temp: number,
    private _pressure: number,
    private _humidity: number,
    private _minimumTemperature: number,
    private _maximumTemperature: number

  ) { }
  public get temp(): number {
    return this._temp;
  }
  public set temp(value: number) {
    this._temp = value;
  }
  public get pressure(): number {
    return this._pressure;
  }
  public set pressure(value: number) {
    this._pressure = value;
  }
  public get humidity(): number {
    return this._humidity;
  }
  public set humidity(value: number) {
    this._humidity = value;
  }
  public get temp_min(): number {
    return this._minimumTemperature;
  }
  public set temp_min(value: number) {
    this._minimumTemperature = value;
  }
  public get temp_max(): number {
    return this._maximumTemperature;
  }
  public set temp_max(value: number) {
    this._maximumTemperature = value;
  }

}

export class Wind {
  constructor(
    private _speed: number,
    private _degree: number
  ) { }
  public get speed(): number {
    return this._speed;
  }
  public set speed(value: number) {
    this._speed = value;
  }
  public get deg(): number {
    return this._degree;
  }
  public set deg(value: number) {
    this._degree = value;
  }
}

// export class WeatherSystem {

//   constructor(
//     private _type: number,
//     private _id: number,
//     private _country: string,
//     private _sunrise: number,
//     private _sunset: number
//   ) { }

//   public get type(): number {
//     return this._type;
//   }
//   public set type(value: number) {
//     this._type = value;
//   }
//   public get id(): number {
//     return this._id;
//   }
//   public set id(value: number) {
//     this._id = value;
//   }
//   public get country(): string {
//     return this._country;
//   }
//   public set country(value: string) {
//     this._country = value;
//   }
//   public get sunrise(): number {
//     return this._sunrise;
//   }
//   public set sunrise(value: number) {
//     this._sunrise = value;
//   }
//   public get sunset(): number {
//     return this._sunset;
//   }
//   public set sunset(value: number) {
//     this._sunset = value;
//   }
// }

export class Rain {

  constructor(
    private _ih: number
  ) { }
  public get ih(): number {
    return this._ih;
  }
  public set ih(value: number) {
    this._ih = value;
  }
}

export class Clouds {
  constructor(
    private _all: number
  ) { }
  public get all_1(): number {
    return this._all;
  }
  public set all_1(value: number) {
    this._all = value;
  }
}
