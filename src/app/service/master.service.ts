import { Injectable } from '@angular/core';
import { colorentiry } from '../Entity/colorentity';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor() {}

  GetColorList(): colorentiry[] {
    return [
      { code: 'c1', name: 'Red' },
      { code: 'c2', name: 'Green' },
      { code: 'c3', name: 'Yellow' },
      { code: 'c4', name: 'Black' },
    ];
  }
}
