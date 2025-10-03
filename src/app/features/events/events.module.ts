import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {ListEventComponent} from './pages/list-event/list-event.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    EventsComponent,
    EventDetailComponent,
    EventCardComponent,
    NavBarComponent,
    ListEventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class EventsModule { }
