import { NgModule } from '@angular/core';
import { SharedModule} from '../shared/shared.module';
import { MusicComponent } from './music.component';
import { MusicService } from './musicservice.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    MusicService
  ]
})
export class MusicModule { }
