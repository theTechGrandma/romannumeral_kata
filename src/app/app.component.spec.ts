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
  it(`should return arabic numeral '1989'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.fromRoman('MCMLXXXIX')).toEqual(1989);
  }));

  it(`should return arabic numeral '1999'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.fromRoman('MCMLXXXXIX')).toEqual(1999);
  }));
});
