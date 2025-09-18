import { Injectable } from '@angular/core';
import { ScheduledEvent } from '../models/scheduled-event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: ScheduledEvent[] = [];

  // Get all events
  getEvents(): ScheduledEvent[] {
    return this.events;
  }

  // Get events for a specific date
  getEventsForDate(date: string): ScheduledEvent[] {
    return this.events.filter((e) => e.date === date);
  }

  // Add new event
  addEvent(event: ScheduledEvent): void {
    this.events.push(event);
  }

  // Update existing event
  updateEvent(event: ScheduledEvent): void {
    const index = this.events.findIndex((e) => e.id === event.id);
    if (index > -1) {
      this.events[index] = { ...event };
    }
  }

  // Delete event by id
  deleteEvent(id: string): void {
    this.events = this.events.filter((e) => e.id !== id);
  }
}
