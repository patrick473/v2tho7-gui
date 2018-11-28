export default class Employee {
  private _employeeNumber: number;
  private _firstName: string;
  private _lastName: string;
  private _ssn: string;
  private _birthDate: string;
  private _address: string;
  private _city: string;
  private _country: string;
  private _email: string;
  private _sex: string;
  private _jobTitle: string;
  private _department: string;


  public constructor(employeeNumber: number, firstName: string, lastName: string, ssn: string, birthDate: string, address: string, city: string, country: string, email: string, sex: string, jobTitle: string, department: string) {
    this._employeeNumber = employeeNumber;
    this._firstName = firstName;
    this._lastName = lastName;
    this._ssn = ssn;
    this._birthDate = birthDate;
    this._address = address;
    this._city = city;
    this._country = country;
    this._email = email;
    this._sex = sex;
    this._jobTitle = jobTitle;
    this._department = department;

  }

  public get employeeNumber(): number {
    return this._employeeNumber;
  }
  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get ssn(): string {
    return this._ssn;
  }

  public get birthDate(): string {
    return this._birthDate;
  }

  public get address(): string {
    return this._address;
  }

  public get city(): string {
    return this._city;
  }

  public get country(): string {
    return this._country;
  }

  public get email(): string {
    return this._email;
  }

  public get sex(): string {
    return this._sex;
  }

  public get jobTitle(): string {
    return this._jobTitle;
  }

  public get department(): string {
    return this._department;

}
}
