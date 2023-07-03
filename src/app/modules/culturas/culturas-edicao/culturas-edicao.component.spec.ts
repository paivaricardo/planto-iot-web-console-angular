import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturasEdicaoComponent } from './culturas-edicao.component';

describe('CulturasEdicaoComponent', () => {
  let component: CulturasEdicaoComponent;
  let fixture: ComponentFixture<CulturasEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturasEdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturasEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
