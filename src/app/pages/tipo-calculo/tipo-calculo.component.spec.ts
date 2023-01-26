import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCalculoComponent } from './tipo-calculo.component';

describe('TipoCalculoComponent', () => {
  let component: TipoCalculoComponent;
  let fixture: ComponentFixture<TipoCalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoCalculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
