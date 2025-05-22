import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariablesService {
  public isDefaultHeadlines: boolean = false;

  public isMenuOpen: boolean = true;

  constructor() {}
}
