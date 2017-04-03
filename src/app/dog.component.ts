export class DogBreed {

    public isFocusBreed: boolean = false;
    public breedId: number;

    constructor(public name: string, public size: string, public temperament: string, public lifespan: number, public health: number) {
        this.breedId = DogBreed.breedIdCounter;
        DogBreed.breedIdCounter++;
    }

    static breedIdCounter: number = 0;
}
