import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunlightmeterComponent } from './sunlightmeter.component';

describe('SunlightmeterComponent', () => {
  let component: SunlightmeterComponent;
  let fixture: ComponentFixture<SunlightmeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunlightmeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunlightmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
