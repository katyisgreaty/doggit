import { Component, Input } from '@angular/core';
import { DogBreed } from './dog.component';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  breedArray: DogBreed[] = [
      new DogBreed("French Bulldog", "small", "lazy", 12, 5),
      new DogBreed("Neapolitan Mastiff", "large", "playful", 9, 8),
      new DogBreed("St. Bernard", "large", "friendly", 12, 7),
      new DogBreed("Newfoundland", "large", "devoted", 10, 8),
      new DogBreed("Corgi", "medium", "alert", 13, 9),
      new DogBreed("Cavalier King Charles Spaniel", "small", "gentle", 13, 8)
  ];
   postArray: Post[] = [
       new Post("My Widdle Floofer", "Jeremy Irons", "I just wuv my widdle floofer. When I was in Man in the Iron Mask, he was by my side ever day giving me widdle kisses and cuddles! 10/10 would cuddle again."),
       new Post("Killing Machine", "Agatha Christie", "I always value ruthlessness, and this dog has it. I modeled many of my stealthy, bloodthirsty murderers after this dog. Love it"),
       new Post("Farts too much", "Keely Glenn", "I love my dog so much, but he <span class='farts'>farts</span> way too much. He is so proud of his <span class='farts'>farts</span> that I feel bad not enjoying them, but they just smell so much. What a dilemma!")
   ];
}
