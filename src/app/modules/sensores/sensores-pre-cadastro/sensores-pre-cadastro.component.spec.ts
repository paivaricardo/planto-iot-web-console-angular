import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoresPreCadastroComponent } from './sensores-pre-cadastro.component';

describe('SensoresPreCadastroComponent', () => {
  let component: SensoresPreCadastroComponent;
  let fixture: ComponentFixture<SensoresPreCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensoresPreCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensoresPreCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
