import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewAComponent } from './detail-view-a.component';

describe('DetailViewAComponent', () => {
  let component: DetailViewAComponent;
  let fixture: ComponentFixture<DetailViewAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailViewAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
