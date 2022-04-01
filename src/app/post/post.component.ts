// import { Component, OnInit } from '@angular/core';
// Input is a decorator for establishing communication with the parent component
// EventEmitter is a class used to emmit an event from the child component, which in turn is caught and used by the parent
import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
// export class PostComponent implements OnInit {
//   constructor() { }

//   ngOnInit(): void {}
// }
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // img here is an alias to postImg so we have to define the alias prop name in the parent template while binding it
  @Input('img') postImg = '';
  // new custom event instance of the EventEmitter
  // Output decorator for communication with the parent
  @Output() imgSelected = new EventEmitter<string>();

  // default lifecycle hook in js
  constructor() {
    console.log('constructor() call', this.postImg);
  }

  // Angular specific which also gets called during the initialization
  ngOnInit() {
    console.log('ngonInit() call', this.postImg);
  }
  ngOnChanges() {
    console.log('ngOnChanges() call');
  }
  ngDoCheck() {
    console.log('ngDoCheck() call');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit() call');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() call');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit() call');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() call');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy() call');
  }
}
