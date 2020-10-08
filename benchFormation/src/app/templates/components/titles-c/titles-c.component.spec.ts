import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesCComponent } from './titles-c.component';

describe('TitlesCComponent', () => {
  let component: TitlesCComponent;
  let fixture: ComponentFixture<TitlesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlesCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
