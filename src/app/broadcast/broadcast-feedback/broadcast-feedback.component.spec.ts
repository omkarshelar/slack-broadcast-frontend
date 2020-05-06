import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BroadcastFeedbackComponent } from "./broadcast-feedback.component";

describe("BroadcastFeedbackComponent", () => {
  let component: BroadcastFeedbackComponent;
  let fixture: ComponentFixture<BroadcastFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BroadcastFeedbackComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
