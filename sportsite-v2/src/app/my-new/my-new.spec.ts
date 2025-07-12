import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNew } from './my-new';

describe('MyNew', () => {
  let component: MyNew;
  let fixture: ComponentFixture<MyNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
