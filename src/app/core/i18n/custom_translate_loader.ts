import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { L10nDictionary, dictionary } from './l10n_dictionary';

export class CustomTranslateLoader implements TranslateLoader {
  constructor() {}
  getTranslation(lang: string): Observable<L10nDictionary> {
    return of(this.getL10n(lang));
  }

  private getL10n(lang: string): L10nDictionary {
    const copy = JSON.parse(JSON.stringify(dictionary));
    const l10nOjbect: L10nDictionary = {};

    for (const key in copy) {
      if (dictionary.hasOwnProperty(key)) {
        const element = copy[key];
        l10nOjbect[key] = element[lang.toLowerCase()];
      }
    }

    return l10nOjbect;
  }
}
