import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class MyService {

  public mySubject: BehaviorSubject<any> = new BehaviorSubject<any>(0);


  public doSomething(): void {
    let myValue: number = 123;
    this.mySubject.next(myValue);
  }
}
