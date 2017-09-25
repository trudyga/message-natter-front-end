import {AbstractControl, ValidatorFn} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import UserModel from "../_models/user.model";

import 'rxjs';
import 'rxjs/observable/from';
import 'rxjs/observable/of';
import 'rxjs/operator/map';

export class DateValidator {
  static validateYear(minYear: number, maxYear?: number): ValidatorFn {
    if (!maxYear)
      maxYear = new Date().getFullYear();
    return function(c: AbstractControl): {[key: string]: any} {
      let year = +c.value;
      if (!year)
        return {'yearValidator': "Year must be specified"};
      if (year < minYear)
        return {'yearValidator': `Year must be greater then ${minYear}`};
      if (year > maxYear)
        return {'yearValidator': `Year must be lower then ${maxYear}`};
      return null;
    }
  }

  static validateMonth(maxMonth: number): ValidatorFn {
    return function (c: AbstractControl): {[key: string]: any} {
      let month = +c.value;
      if (!month)
        return {'monthValidator': "Month must be specified"};
      if (month < 1)
        return {'monthValidator': "Month must be greater then 1"};
      if (month > maxMonth)
        return {'monthValidator': `Month must be lower, then ${maxMonth}`};
      return null;
    }
  }

  static validateDay(maxDay: number): ValidatorFn {
    return function (c: AbstractControl): {[key: string]: any} {
      let day = +c.value;
      if (!day)
        return {'dayValidator': 'Day must be specified'};
      if (day < 1)
        return {'dayValidator': 'Day must be greater then 1'};
      if (day > maxDay)
        return {'dayValidator': `Day must be lower then ${maxDay}`}
    }
  }
}

export class UsernameValidator {
  static dublicated(userService: {get: (u: String) => Observable<UserModel>}):
    (c: AbstractControl) => Observable<any> {
    return function (c: AbstractControl): Observable<any> {
      return userService.get(c.value)
        .map(u => Observable.of({dublicated: true}))
        .catch(err => Observable.of(null));
    }
  }
}
