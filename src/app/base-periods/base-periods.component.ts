import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BasePeriod } from '../model';

import { BasePeriodComponent } from './base-period/base-period.component';
import { formViewProvider } from '../providers/controlContainer.provider';

@Component({
  selector: 'app-base-periods',
  templateUrl: './base-periods.component.html',
  styleUrls: ['./base-periods.component.css'],
  viewProviders: [formViewProvider],
})
//viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
export class BasePeriodsComponent implements OnInit {
  @Input() basePeriods: BasePeriod[] = [];
  @ViewChildren(BasePeriodComponent)
  basePeriod!: QueryList<BasePeriodComponent>;

  baseActive: number = 0;
  ngOnInit() {
    this.addOptionPeriodData();
  }

  addOptionPeriod(event: Event) {
    event.preventDefault();
    this.addOptionPeriodData();
    // this.contractService.setFormSubmitted(false);
  }

  addOptionPeriodData() {
    const basePeriod = new BasePeriod();
    this.basePeriods.push(basePeriod);
    this.baseActive = this.basePeriods.length - 1;
  }

  removeBaseIndex(index: number, event: Event) {
    event.preventDefault();
    this.basePeriods.splice(index, 1);

    if (index > 0) {
      this.baseActive = index - 1;
    } else {
      this.baseActive = 0;
    }
  }

  
}
