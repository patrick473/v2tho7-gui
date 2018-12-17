import StrictDataConstraint from '../StrictDataConstraint';

export default class AttributeCompareRule extends StrictDataConstraint {
  private _comparisonType: string;
  private _otherColumn: string;

  public get comparisonType(): string {
    return this._comparisonType;
  }

  public get otherColumn(): string {
    return this._otherColumn;
  }

  public set comparisonType(value: string) {
    this._comparisonType = value;
  }

  public set otherColumn(value: string) {
    this._otherColumn = value;
  }
}
