import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchvalueformComponent } from './patchvalueform.component';

describe('PatchvalueformComponent', () => {
  let component: PatchvalueformComponent;
  let fixture: ComponentFixture<PatchvalueformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatchvalueformComponent]
    });
    fixture = TestBed.createComponent(PatchvalueformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
