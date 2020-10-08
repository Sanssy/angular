import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesBComponent } from './titles-b.component';

describe('TitlesBComponent', () => {
  let component: TitlesBComponent;
  let fixture: ComponentFixture<TitlesBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlesBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
