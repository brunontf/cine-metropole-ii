import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddFilmeComponent } from './form-add-filme.component';

describe('FormAddFilmeComponent', () => {
  let component: FormAddFilmeComponent;
  let fixture: ComponentFixture<FormAddFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddFilmeComponent]
    });
    fixture = TestBed.createComponent(FormAddFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
