import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {

  constructor() { }
  
  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';

  debounce: Subject<string> = new Subject<string>();
  
  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.onTyping.emit(filter));
  }
  
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
  
  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      let elemento = target as HTMLInputElement;
      this.debounce.next( elemento.value );
    }
  }

}
