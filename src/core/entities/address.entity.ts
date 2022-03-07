export class Address {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<Address>) {
    Object.assign(this, partial);
  }
}
