import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebCardapioProvider {

  private baseApiPath = "http://localhost/webservice";
  constructor(public http: Http) { }

  getCardapios() {
    return this.http.get(this.baseApiPath);
  }
}
