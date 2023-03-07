import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartiesDataService {
  private _parties = [ //is private so it won't be changed
    'ליכוד',
    'עבודה',
    'מחנה ממלכתי',
    'יש עתיד',
    `ש"ס`,
    'ישראל ביתנו',
    'צינות דתית',
    'יהדות התורה',
    `רע"ם`,
    'צעירים בוערים',
    `חד"ש - תע"ל`,
    'מרצ'
  ];

  public get parties() { //makes a copy of the parties array
    return [...this._parties];
  }

  addParty(party: string) {
    if (party.length > 3)
      this._parties.push(party);
  }
}
