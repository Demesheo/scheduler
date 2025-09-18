import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduledEvent } from '../../models/scheduled-event.model';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-scheduled-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scheduled-events.html',
  styleUrls: ['./scheduled-events.css'],
})
export class ScheduledEventsComponent {
  @Input() events: ScheduledEvent[] = [];
  @Output() editEvent = new EventEmitter<ScheduledEvent>();
  @Output() deleteEvent = new EventEmitter<string>();

  get sortedEvents(): ScheduledEvent[] {
    return this.events.sort((a, b) => a.startTime.localeCompare(b.startTime));
  }

  formatTime(time: string): string {
    return DateTime.fromFormat(time, 'HH:mm').toFormat('h:mm a'); // 12-hour format with AM/PM
  }

  onEdit(event: ScheduledEvent) {
    this.editEvent.emit(event);
  }

  onDelete(id: string) {
    this.deleteEvent.emit(id);
  }
}
