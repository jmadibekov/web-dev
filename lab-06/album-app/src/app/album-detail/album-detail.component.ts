import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ALBUMS } from '../mock-data';
import { Album, AlbumPhoto } from '../models';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  loaded: boolean | undefined;
  photos: AlbumPhoto[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    // const routeParams = this.route.snapshot.paramMap;
    // const albumIdFromRoute = Number(routeParams.get('id'));
    // this.album = ALBUMS.find((album) => album.id === albumIdFromRoute);

    // this.route.paramMap.subscribe((params) => {
    //   const albumIdFromRoute = Number(params.get('id'));
    //   this.album = ALBUMS.find((album) => album.id === albumIdFromRoute);
    // });
    this.getAlbum();
  }

  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const albumIdFromRoute = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getAlbum(albumIdFromRoute).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  updateAlbum() {
    this.loaded = false;
    this.albumsService.updateAlbum(this.album).subscribe((album) => {
      console.log('PUT', album);
      this.album = album;
      this.loaded = true;
    });
  }

  // showPhotos() {
  //   this.albumsService.getAlbumPhotos(this.album.id).subscribe((photos) => {
  //     this.photos = photos;
  //   });
  // }

  goBack() {
    this.location.back();
  }
}
