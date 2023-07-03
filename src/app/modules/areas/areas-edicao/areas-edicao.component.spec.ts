import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasEdicaoComponent } from './areas-edicao.component';

describe('AreasEdicaoComponent', () => {
  let component: AreasEdicaoComponent;
  let fixture: ComponentFixture<AreasEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasEdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
