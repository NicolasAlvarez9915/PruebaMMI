import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPromotorCasaComponent } from './tab-promotor-casa.component';

describe('TabPromotorCasaComponent', () => {
  let component: TabPromotorCasaComponent;
  let fixture: ComponentFixture<TabPromotorCasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPromotorCasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPromotorCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
