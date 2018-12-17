import BusinessRule from '../Businessrule';

export default class ModifyRule extends BusinessRule {
  private _code: string;

  public get code(): string {
    return this._code;
  }

  public set code(value: string) {
    this._code = value;
  }
}
