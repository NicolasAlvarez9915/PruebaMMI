import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaDeProductoComponent } from './casa-de-producto.component';

describe('CasaDeProductoComponent', () => {
  let component: CasaDeProductoComponent;
  let fixture: ComponentFixture<CasaDeProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaDeProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaDeProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
