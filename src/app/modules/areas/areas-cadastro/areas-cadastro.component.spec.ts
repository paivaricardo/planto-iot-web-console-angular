import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasCadastroComponent } from './areas-cadastro.component';

describe('AreasCadastroComponent', () => {
  let component: AreasCadastroComponent;
  let fixture: ComponentFixture<AreasCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
