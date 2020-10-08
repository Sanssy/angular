import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesAComponent } from './titles-a.component';

describe('TitlesAComponent', () => {
  let component: TitlesAComponent;
  let fixture: ComponentFixture<TitlesAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlesAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
