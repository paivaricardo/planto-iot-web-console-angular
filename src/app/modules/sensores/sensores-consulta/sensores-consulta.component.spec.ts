import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoresConsultaComponent } from './sensores-consulta.component';

describe('SensoresConsultaComponent', () => {
  let component: SensoresConsultaComponent;
  let fixture: ComponentFixture<SensoresConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensoresConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensoresConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
