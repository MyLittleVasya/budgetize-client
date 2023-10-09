import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Data, DeliveryFormService, Destination} from "./delivery-form.service";



@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss', './delivery-form.component.icons.scss'],
  providers: [DeliveryFormService]
})
export class DeliveryFormComponent {

  @ViewChild('address_modal') modal: ElementRef;

  formTypes: any = ['Letter', 'Cargo', 'Document'];

  destinations_default: Destination[] =
    [
      new Destination('4332', 'Kyiv', 'вул. Хрещатик, 7/11'),
      new Destination('4333', 'Kyiv', 'вул. Софіївська, 5/9'),
      new Destination('4334', 'Kyiv', 'вул. Богдана Гаврилишина, 24/3'),
      new Destination('4335', 'Kyiv', 'вул. Хрещатик, 9/11'),
      new Destination('4336', 'Kyiv', 'вул. Софіївська, 8/9'),
      new Destination('4337', 'Kyiv', 'вул. Богдана Гаврилишина, 22/3'),
    ]

  destination_input: string = ''

  destinations_view: Destination[] = []

  type: string | null;

  destinationType: string = ''
  constructor(private router: Router, private route: ActivatedRoute, public service: DeliveryFormService) { }

  ngOnInit() {
    this.type = this.route.snapshot.queryParams['formType']

    if (!this.formTypes.includes(this.type)) {
      this.router.navigate(['notFound'])
    }

    this.destinations_view = this.service.filterDestinations('', this.destinations_default)
  }

  inputOnChange(value:string) {
    this.destination_input = value
    this.destinations_view = this.service.filterDestinations(this.destination_input.toLowerCase(), this.destinations_default)
  }

  showDestinationInput(type:string) {
    this.destinationType = type
    this.modal.nativeElement.style.display = 'flex'
  }

  hideDestinationInput() {
    this.modal.nativeElement.style.display = 'none'
  }

  input(value:string) {
    if (this.destinationType == 'from') {
      this.service.data.from = value
    }
    else {
      this.service.data.destination = value
    }
    this.hideDestinationInput()
  }

  backRedirect() {
    this.router.navigate(['..', 'services'], { relativeTo: this.route});
  }
  checkoutRedirect() {
    this.router.navigate(['..', 'checkout'], { relativeTo: this.route, queryParams: {formType: this.type}});
  }
}




