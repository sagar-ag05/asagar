import { Component } from '@angular/core';

@Component({
    selector: 'blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {

    blogObj = {
        'blog-1' : 'https://medium.com/@sagar.ag05/everything-between-var-let-and-const-d5c6e544f3d8',
        'blog-2' : 'https://medium.com/@sagar.ag05/everything-between-var-let-and-const-d5c6e544f3d8'
    };

    openBlog(blogId) {
        window.open(this.blogObj[blogId]);
    }

}