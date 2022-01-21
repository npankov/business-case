import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketsPageComponent } from './baskets-page.component';

describe('BasketsPageComponent', () => {
  let component: BasketsPageComponent;
  let fixture: ComponentFixture<BasketsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
