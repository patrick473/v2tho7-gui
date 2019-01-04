import BusinessRule from '../Businessrule';
import ITriggerEvents from '../interfaces/ITriggerEvents';

export default class ModifyRule extends BusinessRule {
  private _code: string;

  constructor(
    id: number,
    type: string,
    description: string,
    example: string,
    name: string,
    triggerEvents: ITriggerEvents,
    errorMessage: string,
    code: string
  ) {
    super(id, type, description, example, name, triggerEvents, errorMessage);
    this._code = code;
  }

  public get code(): string {
    return this._code;
  }

  public set code(value: string) {
    this._code = value;
  }
}
