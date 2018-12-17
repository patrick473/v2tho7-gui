import StrictDataConstraint from '../StrictDataConstraint';

export default class AttributeOtherRule extends StrictDataConstraint {
  private _statement: string;

  public get statement(): string {
    return this._statement;
  }

  public set statement(value: string) {
    this._statement = value;
  }
}
