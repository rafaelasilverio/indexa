import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContatoComponent } from './form-contato.component';

describe('FormContatoComponent', () => {
  let component: FormContatoComponent;
  let fixture: ComponentFixture<FormContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormContatoComponent]
    });
    fixture = TestBed.createComponent(FormContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});