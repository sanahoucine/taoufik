import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import {RouterLink, RouterLinkActive, RouterModule} from '@angular/router';

@Component({
    selector:'shared-header',
    standalone:true,
    imports: [CommonModule,RouterModule,RouterLink,RouterLinkActive], // Import RouterModule here
    templateUrl : './header.component.html',
    styleUrl : './header.component.scss'

})


export default class HeaderComponent{
    @Input() links = [
        {
          name: 'الصفحة الرئيسية',
          routerLink: '/Home',
          routerLinkActive: 'active',
          routerLinkActiveOptions: '{ exact: true }',
        },
        {
          name: ' مبتدأ في التجويد ',
          routerLink: '/mobtada',
          routerLinkActive: 'active',
        },
    ]
}