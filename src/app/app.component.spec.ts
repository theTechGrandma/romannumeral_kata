/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // Must be a valid character first

  it(`MustBeValidCharacter - letter`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.mustBeValidCharacter('v')).toEqual(true);
  }));

  it(`MustBeValidCharacter - Only numbers or letters`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.mustBeValidCharacter('*')).toEqual(false);
  }));

  it(`MustBeValidCharacter - Number`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.mustBeValidCharacter(1999)).toEqual(true);
  }));

  // Can Never Be Repeated (VLD)

  it(`CanNeverBeRepeated - Only 1 of the symbol 'v''`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.canNeverBeRepeated('v')).toEqual(true);
  }));

  it(`CanNeverBeRepeated - L`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.canNeverBeRepeated('LL')).toEqual(false);
  }));

  it(`CanNeverBeRepeated - d`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.canNeverBeRepeated('dd')).toEqual(false);
  }));

  it(`CanNeverBeRepeated - VLD is not included'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.canNeverBeRepeated('a')).toEqual(false);
  }));

  // The symbols 'I', 'X', 'C', and 'M' can be repeated at most 3 times in a row.
  it(`RepeatedNoMoreThanThreeTimes - X 3 of the same'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.repeatedNoMoreThanThreeTimes('XXX')).toEqual(true);
  }));

  // The symbols 'I', 'X', 'C', and 'M' can be repeated at most 3 times in a row.
  it(`RepeatedNoMoreThanThreeTimes - X 3 of the same with an addition straggler'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.repeatedNoMoreThanThreeTimes('XXXCX')).toEqual(true);
  }));

  // The symbols 'I', 'X', 'C', and 'M' can be repeated at most 3 times in a row.
  it(`RepeatedNoMoreThanThreeTimes - 4 of the same character'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.repeatedNoMoreThanThreeTimes('XXXX')).toEqual(false);
  }));

  // The symbols 'I', 'X', 'C', and 'M' can be repeated at most 3 times in a row.
  it(`RepeatedNoMoreThanThreeTimes - 4 of the same with other character.'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.repeatedNoMoreThanThreeTimes('CCCCAA')).toEqual(false);
  }));

  // Roman Numerals

  it(`should return roman numeral 'DCXLVIII'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.fromArabic(648)).toEqual('DCXLVIII');
  }));

  it(`should return roman numeral 'XLVII'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.fromArabic(47)).toEqual('XLVII');
  }));

  it(`should return roman numeral 'MMCCCXLV'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.fromArabic(2345)).toEqual('MMCCCXLV');
  }));

  it(`should return roman numeral 'MCMXCVIII'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.fromArabic(1998)).toEqual('MCMXCVIII');
  }));

  // Arabic

  it(`should return arabic numeral '648'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.fromRoman('DCXLVIII')).toEqual(648);
  }));

  it(`should return arabic numeral '3'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.fromRoman('III')).toEqual(3);
  }));

  it(`should return arabic numeral '1'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.fromRoman('I')).toEqual(1);
  }));

  it(`should return arabic numeral '1999'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.fromRoman('MCMLXXIX')).toEqual(1979);
  }));
});
