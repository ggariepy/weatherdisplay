import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WxpageComponent } from './wxpage.component';

describe('WxpageComponent', () => {
  let component: WxpageComponent;
  let fixture: ComponentFixture<WxpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WxpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WxpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
