export class WeatherDetails {
  constructor(
    private _id: number,
    private _main: string,
    private _description: string,
    private _icon: string
  ) {}

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get main(): string {
    return this._main;
  }
  public set main(value: string) {
    this._main = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get icon(): string {
    return this._icon;
  }
  public set icon(value: string) {
    this._icon = value;
  }

}
