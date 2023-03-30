import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaingaugeComponent } from './raingauge.component';

describe('RaingaugeComponent', () => {
  let component: RaingaugeComponent;
  let fixture: ComponentFixture<RaingaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaingaugeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaingaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
