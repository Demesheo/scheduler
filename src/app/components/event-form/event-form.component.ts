import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScheduledEvent } from '../../models/scheduled-event.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-form.html',
  styleUrls: ['./event-form.css'],
})
export class EventFormComponent {
  @Input() date!: string;
  @Input() event: ScheduledEvent | null = null;
  @Output() submitEvent = new EventEmitter<ScheduledEvent>();

  formData: Partial<ScheduledEvent> = {};

  ngOnChanges() {
    this.formData = this.event
      ? { ...this.event }
      : { date: this.date, startTime: '09:00', endTime: '10:00' };
  }

  onSubmit() {
    if (!this.formData.title || !this.formData.startTime || !this.formData.endTime) return;

    const newEvent: ScheduledEvent = {
      id: this.formData.id ?? uuidv4(),
      date: this.date,
      title: this.formData.title!,
      description: this.formData.description ?? '',
      startTime: this.formData.startTime!,
      endTime: this.formData.endTime!,
    };

    this.submitEvent.emit(newEvent);
    this.formData = { date: this.date };
  }
}
