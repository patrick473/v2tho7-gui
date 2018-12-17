import StrictDataConstraint from '../StrictDataConstraint';

export default class AttributeListRule extends StrictDataConstraint {
  private _list: string[];
  private _inList: boolean;

  public get list(): string[] {
    return this._list;
  }

  public get inList(): boolean {
    return this._inList;
  }

  public set list(value: string[]) {
    this._list = value;
  }

  public set inList(value: boolean) {
    this._inList = value;
  }
}
