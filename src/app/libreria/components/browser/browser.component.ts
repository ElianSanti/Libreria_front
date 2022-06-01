import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  debouncer: Subject<string> = new Subject();

  termino:string = ''

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300))
    .subscribe(valor=>{
      this.onDebounce.emit(valor)
    })
  }

  teclapresionada(){
    this.debouncer.next(this.termino)
  }
}
