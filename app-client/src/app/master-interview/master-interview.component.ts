import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SocketService } from '../services/socket-service.service';

@Component({
  selector: 'app-master-interview',
  templateUrl: './master-interview.component.html',
  styleUrls: ['./master-interview.component.scss']
})
export class MasterInterviewComponent implements OnInit {
  private mouseEventOptions = {
    view: window,
    bubbles: true,
    cancelable: true,
    which: 1
  };

  private testForm = new FormGroup ({
    check1: new FormControl(''),
    check2: new FormControl(''),
    check3: new FormControl(''),
    input1: new FormControl(''),
    input2: new FormControl(''),
    select1: new FormControl('Onions')
  });

  private mousePos = '0';
  private clickedTimes = 0;
  private eventConnection;

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    this.mousePos = `${e.clientX} ${e.clientY}`;
  }

  private turnClick() {
    this.clickedTimes++;
  }

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.clickEventEmitter();
    this.keyEventEmitter();
    this.changeSelectState();
  }

  private clickEventEmitter() {
    this.socketService.getClickEvent()
      .subscribe((event: Array<number>) => {
          const targetElement = <HTMLElement>document.elementFromPoint(event[0], event[1]);
          const activeElement = <HTMLElement>document.activeElement;
          const mouseEvent = new MouseEvent('click', this.mouseEventOptions);
          
          console.log(targetElement);
          activeElement.blur();
          targetElement.dispatchEvent(mouseEvent);
          targetElement.focus();
      });
  }

  private keyEventEmitter() {
    this.socketService.getKeyEvent()
      .subscribe((event: any) => {
        this.testForm.controls[event.targetElement].setValue(event.newValue);
      });
  }

  private changeSelectState() {
    this.socketService.getSelectEvent()
      .subscribe((event: any) => {
        this.testForm.controls[event.targetElement].setValue(event.newValue);
      });
  }

  private catchClick(event) {
    if (!event.isTrusted) {  // if event initiated programatically
      return;                // don't react to it
    }

    if (event.clientX + event.clientY === 0) {
      return;
    }

    console.log([event.clientX, event.clientY]);
    this.socketService.sendClick([event.clientX, event.clientY]);
  }

  private catchTextInput(event) {
    const newValue = event.target.value + event.key;

    this.keyboardEventHandler(event, newValue);
  }

  private catchBackspace(event) {
    const newValue = event.target.value;

    this.keyboardEventHandler(event, newValue);
  }

  private keyboardEventHandler(event, newValue) {
    const eventInfo = {
      targetElement: event.target.getAttribute('formcontrolname'),
      newValue
    };

    this.socketService.sendKeysEvent(eventInfo);
  }

  private catchSelectChange(event) {
    if (event.target.nodeName !== 'SELECT') { // prevent events from checkboxes
      return;
    }

    const eventInfo = {
      targetElement: event.target.getAttribute('formcontrolname'),
      newValue: event.target.value
    };

    this.socketService.sendSelectEvent(eventInfo);
  }
}
