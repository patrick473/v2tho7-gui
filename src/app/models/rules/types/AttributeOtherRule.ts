import StrictDataConstraint from '../StrictDataConstraint';
import ITriggerEvents from '../interfaces/ITriggerEvents';

export default class AttributeOtherRule extends StrictDataConstraint {
  private _statement: string;

  constructor(
    id: number,
    type: string,
    description: string,
    example: string,
    name: string,
    triggerEvents: ITriggerEvents,
    errorMessage: string,
    constraintPossible: boolean,
    column: string,
    table: string,

    statement: string
  ) {
    super(id, type, description, example, name, triggerEvents, errorMessage, constraintPossible, column, table);
    this._statement = statement;
  }

  public get statement(): string {
    return this._statement;
  }

  public set statement(value: string) {
    this._statement = value;
  }
}
