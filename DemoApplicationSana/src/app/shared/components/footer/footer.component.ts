import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {RouterLink, RouterLinkActive, RouterModule} from '@angular/router';

@Component({
    selector:'shared-footer',
    standalone:true,
    imports: [CommonModule,RouterModule,RouterLink,RouterLinkActive], // Import RouterModule here
    templateUrl : './footer.component.html',
    styleUrl : './footer.component.scss'

})


export default class FooterComponent{}