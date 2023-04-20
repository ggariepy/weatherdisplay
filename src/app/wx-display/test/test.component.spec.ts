import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherConditions, selectBaromABSIn } from 'src/app/state/state';
import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('reducers', () => {
    let state;
    state = selectBaromABSIn(
                        {state:
                            {rawData:
                              {
                                dateutc:1682018460000,
                                tempinf:75.4,
                                humidityin:33,
                                baromrelin:30.053,
                                baromabsin:29.374,
                                tempf:63.7,
                                battout:1,
                                humidity:54,
                                winddir:292,
                                windspeedmph:0.9,
                                windgustmph:1.1,
                                maxdailygust:15.9,
                                hourlyrainin:0,
                                eventrainin:0.098,
                                dailyrainin:0.012,
                                weeklyrainin:0.169,
                                monthlyrainin:2.421,
                                totalrainin:39.74,
                                solarradiation:574.86,
                                uv:5,
                                batt_co2:1,
                                feelsLike:63.7,
                                dewPoint:46.74,
                                feelsLikein:74.2,
                                dewPointin:44.3,
                                lastRain:'2023-04-20T17:22:00.000Z',
                                tz:'America/New_York',
                                date:'2023-04-20T19:21:00.000Z'
                            },
                            baromabsin:29.374,
                            baromrelin:30.053,batt_co2:1,
                            battout:1,
                            dailyrainin:0.012,
                            date:'2023-04-20T19:21:00.000Z',
                            dateutc:1682018460000,
                            dewPoint:46.74,
                            dewPointin:44.3,
                            eventrainin:0.098,
                            feelsLike:63.7,
                            feelsLikein:74.2,
                            hourlyrainin:0,
                            humidity:54,
                            humidityin:33,
                            lastRain:'2023-04-20T17:22:00.000Z',
                            maxdailygust:15.9,
                            monthlyrainin:2.421,
                            solarradiation:574.86,
                            tempf:63.7,
                            tempinf:75.4,
                            totalrainin:39.74,
                            tz:'America/New_York',
                            uv:5,
                            weeklyrainin:0.169,
                            winddir:292,
                            windgustmph:1.1,
                            windspeedmph:0.9}},
 {weather:[{macAddress:'98:CD:AC:22:F7:D6',lastData:{dateutc:1682018520000,tempinf:75.4,humidityin:33,baromrelin:30.048,baromabsin:29.368,tempf:63.7,battout:1,humidity:57,winddir:130,windspeedmph:1.8,windgustmph:3.4,maxdailygust:15.9,hourlyrainin:0,eventrainin:0.098,dailyrainin:0.012,weeklyrainin:0.169,monthlyrainin:2.421,totalrainin:39.74,solarradiation:578.89,uv:5,batt_co2:1,feelsLike:63.7,dewPoint:48.18,feelsLikein:74.2,dewPointin:44.3,lastRain:'2023-04-20T17:22:00.000Z',tz:'America/New_York',date:'2023-04-20T19:22:00.000Z'},info:{name:'Cavant Drive Wx Authority',coords:{geo:{type:'Point',coordinates:[-83.06610839999999,42.5504025]},elevation:190.2972259521484,location:'Sterling Heights',address:'35015 Cavant Dr, Sterling Heights, MI 48310, USA',coords:{lon:-83.06610839999999,lat:42.5504025}}}}],type:'[WX-Api] GET_WX_DATA_SUCCESS'});
    expect(state).toEqual({state:{rawData:{dateutc:1682018520000,tempinf:75.4,humidityin:33,baromrelin:30.048,baromabsin:29.368,tempf:63.7,battout:1,humidity:57,winddir:130,windspeedmph:1.8,windgustmph:3.4,maxdailygust:15.9,hourlyrainin:0,eventrainin:0.098,dailyrainin:0.012,weeklyrainin:0.169,monthlyrainin:2.421,totalrainin:39.74,solarradiation:578.89,uv:5,batt_co2:1,feelsLike:63.7,dewPoint:48.18,feelsLikein:74.2,dewPointin:44.3,lastRain:'2023-04-20T17:22:00.000Z',tz:'America/New_York',date:'2023-04-20T19:22:00.000Z'},baromabsin:29.368,baromrelin:30.048,batt_co2:1,battout:1,dailyrainin:0.012,date:'2023-04-20T19:22:00.000Z',dateutc:1682018520000,dewPoint:48.18,dewPointin:44.3,eventrainin:0.098,feelsLike:63.7,feelsLikein:74.2,hourlyrainin:0,humidity:57,humidityin:33,lastRain:'2023-04-20T17:22:00.000Z',maxdailygust:15.9,monthlyrainin:2.421,solarradiation:578.89,tempf:63.7,tempinf:75.4,totalrainin:39.74,tz:'America/New_York',uv:5,weeklyrainin:0.169,winddir:130,windgustmph:3.4,windspeedmph:1.8}});
  });
});
