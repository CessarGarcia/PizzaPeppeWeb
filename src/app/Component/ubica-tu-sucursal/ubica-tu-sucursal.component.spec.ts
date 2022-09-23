import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicaTuSucursalComponent } from './ubica-tu-sucursal.component';

describe('UbicaTuSucursalComponent', () => {
  let component: UbicaTuSucursalComponent;
  let fixture: ComponentFixture<UbicaTuSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicaTuSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicaTuSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
