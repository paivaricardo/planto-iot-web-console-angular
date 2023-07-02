import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturasConsultaComponent } from './culturas-consulta.component';

describe('CulturasConsultaComponent', () => {
  let component: CulturasConsultaComponent;
  let fixture: ComponentFixture<CulturasConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturasConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturasConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
