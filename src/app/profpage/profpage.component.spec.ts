import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfpageComponent } from './profpage.component';

describe('ProfpageComponent', () => {
  let component: ProfpageComponent;
  let fixture: ComponentFixture<ProfpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
