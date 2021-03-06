///<reference path="../services/messages.service.ts"/>
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PostMessageComponent} from './post-message.component';
import {MessagesService} from '../services/messages.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('PostMessageComponent', () => {
  let component: PostMessageComponent;
  let fixture: ComponentFixture<PostMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostMessageComponent],
      providers: [MessagesService],
      imports: [FormsModule, ReactiveFormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
