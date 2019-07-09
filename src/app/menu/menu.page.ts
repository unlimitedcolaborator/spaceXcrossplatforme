import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath: string;
  pages = [
    {
      title: 'Home',
      url: '/menu/home'
    },
    {
      title: 'capsules',
      url: '/menu/capsules'
    },
    {
      title: 'Cores',
      url: '/menu/cores'
    },
    {
      title: 'Dragons',
      url: '/menu/dragons'
    },
    {
      title: 'History',
      url: '/menu/history'
    },
    {
      title: 'Info',
      url: '/menu/info'
    },
    {
      title: 'LandingPads',
      url: '/menu/LandingPads'
    },
    {
      title: 'Launches',
      url: '/menu/launches'
    },
    {
      title: 'LunchPads',
      url: '/menu/LunchPads'
    },
    {
      title: 'Missions',
      url: '/menu/Missions'
    },
    {
      title: 'Payload',
      url: '/menu/payload'
    },
    {
      title: 'Rockets',
      url: '/menu/rockets'
    },
    {
      title: 'Roadster',
      url: '/menu/roadster'
    },
    {
      title: 'Ships',
      url: '/menu/ships'
    },
  ];
  constructor(
    private router: Router,
    public progress: NgProgress
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
    this.progress.start();

    setTimeout(() => {
      /** progress ends after 2 seconds */
      this.progress.done();
    }, 10000);
  }

}
