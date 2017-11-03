import { Injectable, NgModule } from '@angular/core';
import { ngcuiThisIsJustAnotherPersonInterface } from 'ngcui-interfaces';

@Injectable()
export class JustAnotherDummyPersonCacheService {
  private _person: ngcuiThisIsJustAnotherPersonInterface;

  public getCurrentPerson() {
    return this._person;
  }

  public setCurrentPerson(person: ngcuiThisIsJustAnotherPersonInterface) {
    this._person = person;
  }
}

@NgModule({
  providers: [JustAnotherDummyPersonCacheService],
})
export class JustAnotherModuleToImport { }