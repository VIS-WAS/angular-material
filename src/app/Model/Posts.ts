export class Contact {
  id?: number;
  constructor(
    public createdAt: string,
    public first_name: string,
    public last_name: string,
    public emailId: string,
    public age: number,
    public gender: string,
    public mobilenumber: number,
    public adhaar_no: number,
    public pan_no: number,
    id: number
  ) {
    this.id = id;
  }
}
