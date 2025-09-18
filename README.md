# Scheduling

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Design and Architecture

This SPA is built with **Angular 20** using **standalone components**:

- **App** – Root component; manages selected date and editing state.  
- **DayComponent** – Displays current day with Previous/Next buttons; emits date changes.  
- **EventFormComponent** – Handles adding/editing events (title, description, start/end times).  
- **ScheduledEventsComponent** – Shows events for the selected day, sorted by start time, with edit/delete buttons.

**EventService** stores events in memory and provides methods to add, update, delete, and retrieve events.  
**ScheduledEvent model** defines the event structure (`id`, `title`, `description`, `date`, `startTime`, `endTime`).  

Dates and times are handled with **Luxon** for readable formatting (`September 18, 2025`, `9:00 AM - 10:30 AM`).

---

### Design Decisions

- **Standalone Components**: Modular and self-contained.  
- **Service-based state**: Centralizes events; easy to extend with backend later.  
- **Event-driven communication**: Parent-child interactions via `@Output` events.  
- **Separation of concerns**: Forms, lists, and state management handled in separate components.  
- **Accessibility**: Semantic HTML, ARIA labels, focus styles, and descriptive buttons.  
- **Styling**: Vanilla CSS; card-based event UI; green edit/red delete buttons for clarity.

---

### Trade-Offs

- **In-memory storage**: Simple and fast, but events reset on reload. Could change event service to persist in local storage or to api.
- **Luxon**: Slightly larger bundle, but provides easy and readable date handling.  
- **Event sorting**: Done in the component for simplicity, slight runtime overhead.  Could be done in the service if persisting data.
