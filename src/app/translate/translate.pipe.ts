import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translation.service';

@Pipe({
    name: 'translate',
    pure: false
})

export class TranslatePipe implements PipeTransform {
    
    constructor(private _translate: TranslateService) {}

    transform(value: string, args: any[]) : any {
        console.log('transform, ', value);
        if (!value) return;
        return this._translate.instant(value);
    }
}