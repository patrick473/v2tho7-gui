
import { DatabaseType } from 'src/app/models/DatabaseType';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabasetypeService {

  constructor() { }

  async getDatabaseTypes(): Promise<DatabaseType[]> {

    const type: DatabaseType  = {
      id: 1,
      dialect: 'oracle',
      triggerTemplate: '',
      constraintTemplate: ''

    };
    return [type];
  }
  getDatabaseType(id: number):  Promise<DatabaseType> {

    const type: DatabaseType  = {
      id: id,
      dialect: 'oracle',
      triggerTemplate: '',
      constraintTemplate: ''

    };
    return Promise.resolve(type);
  }
}
