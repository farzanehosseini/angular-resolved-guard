import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlnumDetailsComponent } from './alnum-details.component';

describe('AlnumDetailsComponent', () => {
  let component: AlnumDetailsComponent;
  let fixture: ComponentFixture<AlnumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlnumDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlnumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
