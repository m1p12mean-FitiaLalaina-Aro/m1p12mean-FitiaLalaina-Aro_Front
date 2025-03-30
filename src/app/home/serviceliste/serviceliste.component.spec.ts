import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicelisteComponent } from './serviceliste.component';

describe('ServicelisteComponent', () => {
  let component: ServicelisteComponent;
  let fixture: ComponentFixture<ServicelisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicelisteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
