import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAccessibleComponent } from './icon-accessible.component';

describe('IconAccessibleComponent', () => {
  let component: IconAccessibleComponent;
  let fixture: ComponentFixture<IconAccessibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconAccessibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAccessibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
