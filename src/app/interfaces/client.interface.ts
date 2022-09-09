export interface Client {
  _id?: String;
  __v?: String;
  name: String;
  last_name: String;
  email: String;
  tel: String;
  birthday: Date;
  address: String;
  contact_type: 'Cliente';
  origin: 'Landing Page';
}
