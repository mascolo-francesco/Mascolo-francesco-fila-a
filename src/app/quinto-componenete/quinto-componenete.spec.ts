import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoComponenete } from './quinto-componenete';

describe('QuintoComponenete', () => {
  let component: QuintoComponenete;
  let fixture: ComponentFixture<QuintoComponenete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuintoComponenete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuintoComponenete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
