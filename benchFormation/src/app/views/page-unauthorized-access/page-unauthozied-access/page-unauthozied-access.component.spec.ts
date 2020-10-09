import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUnauthoziedAccessComponent } from './page-unauthozied-access.component';

describe('PageUnauthoziedAccessComponent', () => {
  let component: PageUnauthoziedAccessComponent;
  let fixture: ComponentFixture<PageUnauthoziedAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUnauthoziedAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUnauthoziedAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
