// code from https://scotch.io/tutorials/simple-language-translation-in-angular-2-part-1

import { Injectable, Inject } from '@angular/core';
import { TRANSLATIONS } from './translation';

@Injectable()
export class TranslateService {
    private _currentLang: string;

    public get currentLang() {
        return this._currentLang;
    }

    constructor(@Inject(TRANSLATIONS) private _translations: any) {
    }

    public use(lang: string): void {
        this._currentLang = lang;
    }

    private translate(key: string): string {
        let translation = key;

        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }

        return translation;
    }

    public instant(key: string) {
        // call translation
        return this.translate(key); 
    }
}