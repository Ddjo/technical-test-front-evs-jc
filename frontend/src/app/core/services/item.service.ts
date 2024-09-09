import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Item } from "../models/items.model";

export const url = `${environment.backendUrl}/api/items`

@Injectable({
    providedIn: "root"
})
export class ItemsService {
    constructor(
        private http: HttpClient, 
    ) {}

    /**
     * Returns the list of items.
     * @returns An observable of type `Item[]`
     */
    getAllItems(): Observable<Item[]> {
        return this.http.get<Item[]>(url);
    }

    /**
     * Create an item.
     *
     * @param item - object of type `TItem`  
     * @returns An observable of type `TItem`
     */
    createItem(item : Item) : Observable<Item> {

        return this.http.post<Item>(`${url}`, item );
    }

}
