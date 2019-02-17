import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss', '../app.component.scss']
})
export class LatestComponent implements OnInit {

  posts: Object;


  constructor(private postsData: PostService) {
   }

  ngOnInit() {
    // console.log(this.posts);
    this.postsData.getLatestPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    })
  }


}



class Post {
  // public title: string;
  // date: Date;
  // content: string;
  constructor(public title: string, public date: Date, public content: string) { }
}



