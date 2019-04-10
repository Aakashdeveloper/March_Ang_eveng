import { Component, OnInit } from '@angular/core';
import { MusicService } from './musicservice.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  musicData: any[];

  constructor(private _musicS: MusicService) { }

  ngOnInit(): void {
    this._musicS.getArtist()
      .subscribe((data) => {this.musicData = data[0].artists});
  }

}
