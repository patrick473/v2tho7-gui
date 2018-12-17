import StrictDataConstraint from '../StrictDataConstraint';

export default class AttributeRangeRule extends StrictDataConstraint {
  private _rangeStart: number;
  private _rangeEnd: number;
  private _inRange: boolean;

  public get rangeStart(): number {
    return this._rangeStart;
  }

  public get rangeEnd(): number {
    return this._rangeEnd;
  }

  public get inRange(): boolean {
    return this._inRange;
  }

  public set rangeStart(value: number) {
    this._rangeStart = value;
  }

  public set rangeEnd(value: number) {
    this._rangeEnd = value;
  }

  public set inRange(value: boolean) {
    this._inRange = value;
  }
}
