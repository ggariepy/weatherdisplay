import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { WxDisplayModule } from './wx-display/wx-display.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { WeatherReducer } from '../app/state/reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './state/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WxDisplayModule,
    StoreModule.forRoot({store : WeatherReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(WeatherEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
