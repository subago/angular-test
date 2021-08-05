import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRowComponent } from './prod-row.component';

describe('ProductRowComponent', () => {
  let component: ProdRowComponent;
  let fixture: ComponentFixture<ProdRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
