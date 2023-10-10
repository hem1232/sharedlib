import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedlibComponent } from './sharedlib.component';

describe('SharedlibComponent', () => {
  let component: SharedlibComponent;
  let fixture: ComponentFixture<SharedlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedlibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
