import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CottageToolsComponent } from './cottage-tools.component';

describe('CottageToolsComponent', () => {
  let component: CottageToolsComponent;
  let fixture: ComponentFixture<CottageToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CottageToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CottageToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
