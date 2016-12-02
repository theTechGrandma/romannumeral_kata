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
    try {
      // // if character is not valid, return
      if (!this.mustBeValidCharacter(n)) {
        return; }

      let r = '';
      for (let i = 0; i < this.decimals.length; i++) {
          while (n >= this.decimals[i]) {
              r += this.romans[i];
              n -= this.decimals[i];
          }}
          return r;
        } catch (err) {
        console.log('Error: ', err.message); }
  }

  fromRoman(str) {
    try {

      // if character is not valid, return
      if (!this.mustBeValidCharacter(str)) {
        return; }

      // if VLD is repeated, return
      if (this.canNeverBeRepeated(str)) {
        return; }

      // if IXCM has been used more than 3 times, return
      if (!this.repeatedNoMoreThanThreeTimes(str)) {
        return; }

      // else ..... let's get on that conversion train.

      let result = 0;
      for (let i = 0; i <= this.decimals.length; i++) {
        while (str.indexOf(this.romans[i]) === 0) {
          result += this.decimals[i];
          str = str.replace(this.romans[i], '');
        }}
        return result;
      } catch (err) {
          console.log('Error: ', err.message); }
    }

    canNeverBeRepeated(item): boolean {
      let patt = /^(?!.*(.).*\1)[vVlLdD]+$/;
      let result = patt.test(item);
      return result;
    }

    repeatedNoMoreThanThreeTimes(str): boolean {
      let patt = /^(?!.*([iIxXcCmM])\1{3})/;
      let result = patt.test(str);
      return result;
    }

    mustBeValidCharacter(str): boolean {
      let patt = /^\w+$/;
      let result = patt.test(str);
      return result;
    }
}



