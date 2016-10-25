import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Artist} from '../../artist';
import {Album} from '../../album';
import {SpotifyService} from '../../services/spotify.service';

@Component({
    selector: 'album',
    template: require('./album.component.html'),
    providers: [SpotifyService]
})
export class AlbumComponent implements OnInit {
    id:string;
    album:Album[];

    constructor(
        private _spotifyService: SpotifyService,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    })
            });
    }
}
