import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientListComponent } from './page-client-list.component';

describe('PageClientListComponent', () => {
  let component: PageClientListComponent;
  let fixture: ComponentFixture<PageClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageClientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
