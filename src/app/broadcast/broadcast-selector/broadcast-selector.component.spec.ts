import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BroadcastSelectorComponent } from "./broadcast-selector.component";

describe("BroadcastSelectorComponent", () => {
  let component: BroadcastSelectorComponent;
  let fixture: ComponentFixture<BroadcastSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BroadcastSelectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
