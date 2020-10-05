import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientDetailsComponent } from './page-client-details.component';

describe('PageClientDetailsComponent', () => {
  let component: PageClientDetailsComponent;
  let fixture: ComponentFixture<PageClientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageClientDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
