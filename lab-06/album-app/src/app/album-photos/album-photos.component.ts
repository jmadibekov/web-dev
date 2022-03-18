import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album, AlbumPhoto } from '../models';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  album!: Album;
  photos: AlbumPhoto[] = [];
  loaded: boolean | undefined;

  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAlbumPhotos();
  }

  getAlbumPhotos() {
    this.route.paramMap.subscribe((params) => {
      const albumIdFromRoute = Number(params.get('id'));
      this.loaded = false;

      this.albumsService.getAlbum(albumIdFromRoute).subscribe((album) => {
        this.album = album;

        this.albumsService.getAlbumPhotos(this.album.id).subscribe((photos) => {
          this.photos = photos;
          this.loaded = true;
        });
      });
    });
  }
}
