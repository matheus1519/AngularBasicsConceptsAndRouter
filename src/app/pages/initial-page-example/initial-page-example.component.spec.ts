import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPageExampleComponent } from './initial-page-example.component';

describe('InitialPageExampleComponent', () => {
  let component: InitialPageExampleComponent;
  let fixture: ComponentFixture<InitialPageExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialPageExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialPageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
