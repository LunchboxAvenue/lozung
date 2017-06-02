import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate/translation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  public translatedText: string;
  public supportedLanguages: any[];

  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'Latviešu', value: 'lv' },
      { display: 'Русский', value: 'ru' }
    ];

    this.selectLang('en');
  }

  isCurrentLang(lang: string) {
      return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
      console.log('component selectLang', lang);
      this._translate.use(lang);
      this.refreshText();
  }

  refreshText() {
      console.log('refresh text');
      this.translatedText = this._translate.instant('hello world');
  }
}
