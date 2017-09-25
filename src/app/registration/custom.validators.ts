import {FormControl} from '@angular/forms';
import {Observable} from "rxjs/Observable";

interface IValidation {
  [key: string]: boolean;
}

export class CustomValidators {
  static emailFormat(control: FormControl): IValidation {
    let pattern:RegExp = /\S+@\S+\.\S+/;
    return pattern.test(control.value) ? null : {"emailFormat": true};
  }

  static duplicated(control: FormControl) {
    const q = new Promise<IValidation>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'john.doe@gmail.com') {
          resolve({'duplicated': true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return q;
  }
}
