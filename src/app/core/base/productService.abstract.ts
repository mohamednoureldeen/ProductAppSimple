import { Observable } from "rxjs";

export abstract class ProductServiceAbi {
    abstract getProducts(): Observable<any>;
    abstract getOneProduct(id: string): Observable<any>;
}