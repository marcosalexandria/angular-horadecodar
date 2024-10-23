import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandaNumeroComponent } from './manda-numero.component';

describe('MandaNumeroComponent', () => {
  let component: MandaNumeroComponent;
  let fixture: ComponentFixture<MandaNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MandaNumeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandaNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
