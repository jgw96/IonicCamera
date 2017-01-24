import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

/*
  Generated class for the SafeUrl pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'safeUrl'
})
@Injectable()
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {};
  /*
    Takes a value and makes it lowercase.
   */
  transform(value) {
    let converted = URL.createObjectURL(value);
    return this.sanitizer.bypassSecurityTrustUrl(converted);
  }
}
