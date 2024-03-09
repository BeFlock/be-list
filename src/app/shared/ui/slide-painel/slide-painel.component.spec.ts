import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePainelComponent } from './slide-painel.component';

describe('SlidePainelComponent', () => {
  let component: SlidePainelComponent;
  let fixture: ComponentFixture<SlidePainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidePainelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlidePainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
