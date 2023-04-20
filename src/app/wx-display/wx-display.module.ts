import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WxpageComponent } from './wxpage/wxpage.component';
import { ThermometerComponent } from './thermometer/thermometer.component';
import { AnemometerComponent } from './anemometer/anemometer.component';
import { ChronometerComponent } from './chronometer/chronometer.component';
import { BarometerComponent } from './barometer/barometer.component';
import { RaingaugeComponent } from './raingauge/raingauge.component';
import { SunlightmeterComponent } from './sunlightmeter/sunlightmeter.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    WxpageComponent,
    ThermometerComponent,
    AnemometerComponent,
    ChronometerComponent,
    BarometerComponent,
    RaingaugeComponent,
    SunlightmeterComponent,
    TestComponent
  ],
  exports: [
    WxpageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class WxDisplayModule { }
