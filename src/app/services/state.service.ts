import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor() {}

  showComponent: boolean = true;

  private isToggleMenu = new BehaviorSubject<boolean>(true);
  toggleMenu$ = this.isToggleMenu.asObservable();

  setIsToggleMenu(value: boolean) {
    this.isToggleMenu.next(value);
  }

  getIsToggleMenu(): boolean {
    return this.isToggleMenu.value;
  }
}
