import BusinessRule from './Businessrule';
import ITriggerEvents from './interfaces/ITriggerEvents';

export default abstract class StrictDataConstraint extends BusinessRule {
  private _constraintPossible: boolean;
  private _column: string;
  private _table: string;

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
  ) {
    super(id, type, description, example, name, triggerEvents, errorMessage);
    this._constraintPossible = constraintPossible;
    this._column = column;
    this._table = table;
  }
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
