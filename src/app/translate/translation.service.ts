import { TRANSLATION_PROVIDERS_STATIC } from './translateStatic';

export class TranslateService {
    private _currentLang: string;
    private _translations: any = TRANSLATION_PROVIDERS_STATIC;

    public get currentLang() {
        return this._currentLang;
    }

    constructor() { }

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
        return this.translate(key); 
    }
}