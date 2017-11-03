import { Injectable, NgModule } from '@angular/core';
import { ngcuiThisIsJustAnotherPersonInterface } from 'ngcui-interfaces';
import { Request } from 'express';

@Injectable()
export class JustAnotherDummyPersonCacheService {
  private _person: ngcuiThisIsJustAnotherPersonInterface;
  private _request: Request;

  public getCurrentPerson() {
    return this._person;
  }

  public setCurrentPerson(person: ngcuiThisIsJustAnotherPersonInterface) {
    this._person = person;
  }

  public doItWithTypes(request: Request) {
    this._request = request;
  }

  public getRequest() {
    return this._request;
  }
}

@NgModule({
  providers: [JustAnotherDummyPersonCacheService],
})
export class JustAnotherModuleToImport { }