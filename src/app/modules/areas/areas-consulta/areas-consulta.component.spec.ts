import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasConsultaComponent } from './areas-consulta.component';

describe('AreasConsultaComponent', () => {
  let component: AreasConsultaComponent;
  let fixture: ComponentFixture<AreasConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
