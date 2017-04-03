import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Post } from '../post.model';
import { DogBreed } from '../dog.component';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent {
    @Input() breedArray: DogBreed[];
    @Input() postArray: Post[];
    public postVisible: boolean = false;

    // toggleVisible() {
    //     if(this.postVisible == false) {
    //         this.postVisible = true;
    //     } else {
    //         this.postVisible = false;
    //     }
    // }

    showDetails(selectedBreed: DogBreed) {
   for(let individualBreed of this.breedArray) {
     if(individualBreed.breedId !== selectedBreed.breedId){
         individualBreed.isFocusBreed = false;
     }
   }
   selectedBreed.isFocusBreed = (!(selectedBreed.isFocusBreed));
 }
}
