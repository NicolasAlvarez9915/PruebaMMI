import { ComponentFixture, TestBed } from '@angular/core/testing';
import {SoyPromotorComponent} from "./soy-promotor.component";



describe('SoyPromotorComponent', () => {
  let component: SoyPromotorComponent;
  let fixture: ComponentFixture<SoyPromotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoyPromotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoyPromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
