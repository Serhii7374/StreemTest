import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  Articles: {};
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const id = this.actRoute.snapshot.paramMap.get('id');
        this.getArticles(id);
      }
    });
  }

  ngOnInit(): void {
  }

  async getArticles(id: string) {
    let response = await fetch("https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users/" + id + "/posts");

    if (response.ok) {
      let json = await response.json();
      this.Articles = json;
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }

  async post(){
    let NewArticle;
    let response = await fetch('https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(NewArticle)
    });
  }

  async edit() {
    let NewArticle;
    // // change date in our arr and post new arr to server
    // let response = await fetch('https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8'
    //   },
    //   body: JSON.stringify(NewArticle)
    // });
  }

  async delete() {
    let NewArticle;
  //   // delete some date in our arr and post new arr to server

  //   let response = await fetch('https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8'
  //     },
  //     body: JSON.stringify(NewArticle)
  //   });
  }

}
