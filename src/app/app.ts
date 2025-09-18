import { Component } from '@angular/core';
import { DateTime } from 'luxon';
import { EventService } from './services/event.service';
import { ScheduledEvent } from './models/scheduled-event.model';
import { DayComponent } from './components/day/day.component';
import { ScheduledEventsComponent } from './components/scheduled-events/scheduled-events.component';
import { EventFormComponent } from './components/event-form/event-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DayComponent, ScheduledEventsComponent, EventFormComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  selectedDate: string = DateTime.now().toISODate()!;
  editingEvent: ScheduledEvent | null = null;

  constructor(public eventService: EventService) {}

  get eventsForDay(): ScheduledEvent[] {
    return this.eventService.getEventsForDate(this.selectedDate);
  }

  changeDate(date: string) {
    this.selectedDate = date;
    this.editingEvent = null;
  }

  addOrUpdateEvent(event: ScheduledEvent) {
    if (this.eventService.getEvents().some((e) => e.id === event.id)) {
      this.eventService.updateEvent(event);
    } else {
      this.eventService.addEvent(event);
    }
    this.editingEvent = null;
  }

  editEvent(event: ScheduledEvent) {
    this.editingEvent = { ...event };
  }

  deleteEvent(id: string) {
    this.eventService.deleteEvent(id);
  }
}
