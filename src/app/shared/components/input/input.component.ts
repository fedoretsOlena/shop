import { Component, ChangeDetectionStrategy, Input} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sh-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  id = Math.round(Math.random() * +new Date());

  @Input()
  label: string;

  @Input()
  textarea = false;

  @Input()
  type = 'text';

  @Input()
  placeholder = '';

  @Input()
  control: FormControl;
}
