import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'xm-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AlbumComponent implements OnInit {
  value = 214124214
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('albumId')
    console.log(id)
  }

}
