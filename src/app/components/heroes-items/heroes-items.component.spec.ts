import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesItemsComponent } from './heroes-items.component';

describe('HeroesItemsComponent', () => {
  let component: HeroesItemsComponent;
  let fixture: ComponentFixture<HeroesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
