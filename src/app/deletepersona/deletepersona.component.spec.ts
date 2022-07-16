import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepersonaComponent } from './deletepersona.component';

describe('DeletepersonaComponent', () => {
  let component: DeletepersonaComponent;
  let fixture: ComponentFixture<DeletepersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletepersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletepersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
