export class Coordinates {

  constructor(
    private _lon: number,
    private _lan: number
  ) { }

  public get lan(): number {
    return this._lan;
  }
  public set lan(value: number) {
    this._lan = value;
  }
  public get lon(): number {
    return this._lon;
  }
  public set lon(value: number) {
    this._lon = value;
  }


}
