import BusinessRule from './Businessrule';

export default abstract class StrictDataConstraint extends BusinessRule {
  private _constraintPossible: boolean;
  private _column: string;
  private _table: string;

  public get constraintPossible(): boolean {
    return this._constraintPossible;
  }

  public get column(): string {
    return this._column;
  }

  public get table(): string {
    return this._table;
  }

  public set constraintPossible(value: boolean) {
    this._constraintPossible = value;
  }

  public set column(value: string) {
    this._column = value;
  }

  public set table(value: string) {
    this._table = value;
  }
}
