import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
class DeliveryFormService {

  data: Data = new Data()

  filterDestinations(keyword:string, destinations_default: Destination[]) {
    return destinations_default.filter((obj) => {
      return (
        obj.id.toLowerCase().includes(keyword) ||
        obj.address.toLowerCase().includes(keyword) ||
        obj.city.toLowerCase().includes(keyword)
      );
    });
  }

  resetForm() {
    this.data = new Data()
  }

  constructor() { }
}

class Data {
  constructor(
    public from?: string,
    public destination?: string,
    public payer?: string,
    public weight?: number,
    public isFragile:boolean = false,
    public numberOfDocuments?: number
  ) {
  }
}

class Destination {
  constructor(
    public id: string,
    public city: string,
    public address: string
  ){}
}

export {DeliveryFormService, Data, Destination}
