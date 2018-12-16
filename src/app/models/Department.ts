export default class Department {

  private _departmentNumber: number;
  private _name: string;
  private _location: string;

  public constructor(departmentNumber: number, name: string, location: string) {
    this._departmentNumber = departmentNumber;
    this._name = name;
    this._location = location;
  }

  public get departmentNumber(): number {
    return this._departmentNumber;
  }

  public get name(): string {
    return this._name;
  }

  public get location(): string {
    return this._location;
  }
}
