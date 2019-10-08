import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sh-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {
  @Input()
  initial: string;

  @Input()
  options: { value: string, label?: string }[];

  @Input()
  label: string;

  @Output()
  selected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(value: string): void {
    this.selected.emit(value);
  }
}
