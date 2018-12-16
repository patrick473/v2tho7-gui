export default class Project {
  private _name: string;
  private _projectNumber: number;
  private _location: string;

  public constructor(projectNumber: number, name: string, location: string) {
    this._name = name;
    this._projectNumber = projectNumber;
    this._location = location;
  }
  public get name(): string {
    return this._name;
  }
  public get projectNumber(): number {
    return this._projectNumber;
  }
  public get location(): string {
    return this._location;
  }
}
