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

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
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
