import StrictDataConstraint from '../StrictDataConstraint';

export default class EntityOtherRule extends StrictDataConstraint {
  private _statement: string;
  private _otherColumn: string;
  private _otherTable: string;

  public get statement(): string {
    return this._statement;
  }

  public get otherColumn(): string {
    return this._otherColumn;
  }

  public get otherTable(): string {
    return this._otherTable;
  }

  public set statement(value: string) {
    this._statement = value;
  }

  public set otherColumn(value: string) {
    this._otherColumn = value;
  }

  public set otherTable(value: string) {
    this._otherTable = value;
  }
}
