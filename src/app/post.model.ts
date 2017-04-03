export class Post {

    public isFocusPost: boolean = false;
    public postId: number;

    constructor(public title: string, public author: string, public content: string) {
        this.postId = Post.postIdCounter;
        Post.postIdCounter++;
    }

    static postIdCounter: number = 0;

}
