import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturasCadastroComponent } from './culturas-cadastro.component';

describe('CulturasCadastroComponent', () => {
  let component: CulturasCadastroComponent;
  let fixture: ComponentFixture<CulturasCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturasCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
