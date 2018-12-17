import StrictDataConstraint from '../StrictDataConstraint';

export default class TupleOtherRule extends StrictDataConstraint {
  private _statement: string;
  private _otherColumn: string;




  public get statement(): string {
    return this._statement;
  }

  public get otherColumn(): string {
    return this._otherColumn;
  }

  public set statement(value: string) {
    this._statement = value;
  }

  public set otherColumn(value: string) {
    this._otherColumn = value;
  }
}
