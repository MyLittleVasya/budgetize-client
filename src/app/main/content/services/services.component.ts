import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss', './services.components.images.scss']
})
export class ServicesComponent {
  constructor(private router: Router, private r:ActivatedRoute) {}

  serviceRedirect(formType:string) {
    this.router.navigate(['..', 'deliveryForm'], { relativeTo: this.r, queryParams: {formType: formType}});
  }
}
