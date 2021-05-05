import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsideComponent } from './rside.component';

describe('RsideComponent', () => {
  let component: RsideComponent;
  let fixture: ComponentFixture<RsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
