import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VecpageComponent } from './vecpage.component';

describe('VecpageComponent', () => {
  let component: VecpageComponent;
  let fixture: ComponentFixture<VecpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VecpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VecpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
