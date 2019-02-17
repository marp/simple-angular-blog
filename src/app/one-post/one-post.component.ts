import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { isArray } from 'util';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.scss', '../app.component.scss']
})
export class OnePostComponent implements OnInit {

  post: any;
  id: any;

  constructor(private route: ActivatedRoute, private postsData: PostService) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      // switchMap((params: ParamMap) =>
      //   of(params.get('id'))
      // )
      switchMap((params: ParamMap) =>
     params.get('id')
      )
    ).subscribe((d) => {
      this.id = d;
    });
    // this.postsData.getOnePost(this.id).subscribe(posts => {
    //   this.post = posts;
    //   console.log(this.post);
    // })
    this.postsData.getOnePost(this.id).subscribe(posts => {
      this.post = posts;
      console.log(this.post);
    })

    console.log(this.post);
    console.log(isArray(this.post));
    console.log(this.id);
    // console.log(dump(this.post));
  }

}

class Post {
  // public title: string;
  // date: Date;
  // content: string;
  constructor(public title: string, public date: Date, public content: string) { }
}
