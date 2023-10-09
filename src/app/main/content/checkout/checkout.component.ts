import {Component, ViewChild} from '@angular/core';
import {StripeCardComponent} from "ngx-stripe";
import {StripeCardElementOptions} from "@stripe/stripe-js";
import {ActivatedRoute, Router} from "@angular/router";
import {Data, DeliveryFormService} from "../delivery-form/delivery-form.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss', './checkout.component.icons.scss'],
  providers: [DeliveryFormService],
})
export class CheckoutComponent {

  formTypes: any = ['Letter', 'Cargo', 'Document'];

  type: string

  data: Data

  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {color: '#fce883'},
        '::placeholder': {color: '#87bbfd'}
      },
      invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee'
      }
    }
  };

  constructor(private router: Router, private route: ActivatedRoute, public service: DeliveryFormService) { }

  ngOnInit() {
    this.type = this.route.snapshot.queryParams['formType']
    this.data = this.service.data

    if (!this.formTypes.includes(this.type)) {
      this.router.navigate(['notFound'])
    }
  }

  protected readonly JSON = JSON;
}
