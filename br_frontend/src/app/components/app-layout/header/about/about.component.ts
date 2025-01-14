import { animate, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  companyHistory: string = `This is a deal finder app to help people to find the best deal for the product they are searching. We have AI-based systems to find deals from different sites, and then we cherry-pick the best deal just for you so that you can get the most value-for-money product without much hassle. Please share this app with your friends and family so they can save their time for you instead of scrolling through website after website to find the best deal!`;

  companyStats = [
    { value: '4+ Years', label: 'In Work' },
    { value: '5+', label: 'Projects Completed' }
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToContact(): void {
    window.location.href = "https://www.linkedin.com/in/abhishek-sharma-42969113a";
  }
}