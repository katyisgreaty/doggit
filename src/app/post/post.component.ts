import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() postArray: Post[];

}
