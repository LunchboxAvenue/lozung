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
        //console.log('translate:', key);
        console.log('translations: ', this._translations);
        console.log('current language: ', this.currentLang);
        console.log('current key', key);

        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            console.log('getting translation. . . ');
            return this._translations[this.currentLang][key];
        }

        return translation;
    }

    public instant(key: string) {
        // call translation
        console.log('instant', key);
        return this.translate(key); 
    }
}