import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  decimals: ReadonlyArray<number> = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  romans: ReadonlyArray<string>  = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  fromArabic(n) {
    let r = '';
    for (let i = 0; i < this.decimals.length; i++) {
        while (n >= this.decimals[i]) {
            r += this.romans[i];
            n -= this.decimals[i];
        }
    }
    return r;
  }

  fromRoman(str) {
    let result = 0;
    for (let i = 0; i <= this.decimals.length; i++) {
      while (str.indexOf(this.romans[i]) === 0) {
        result += this.decimals[i];
        str = str.replace(this.romans[i], '');
      }
    }
    return result;
    }
  }



