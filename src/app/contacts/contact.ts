export class Contact {
    _id?: string; // _id will be auto-generated on the server side
    name: string;
    email: string;
    phone: {
        mobile: string;
        work: string;
    }
}
