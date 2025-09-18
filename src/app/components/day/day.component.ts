import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day.html',
  styleUrls: ['./day.css'],
})
export class DayComponent {
  @Input() selectedDate!: string;
  @Output() dateChange = new EventEmitter<string>();

  get formattedDate(): string {
    return DateTime.fromISO(this.selectedDate).toFormat('LLLL d, yyyy');
  }

  changeDate(offset: number): void {
    const dt = DateTime.fromISO(this.selectedDate).plus({ days: offset });
    this.dateChange.emit(dt.toISODate()!);
  }
}
