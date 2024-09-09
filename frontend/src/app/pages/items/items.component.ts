import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Item } from "../../core/models/items.model";
import { errorSelector, isLoadingSelector, itemsSelector } from "../../core/store/items/items.selectors";
import { AppStateInterface } from "../../core/store/types/app-state.interface";


@Component({
    selector: "items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent {
  
    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    items$: Observable<Item[]>;
  
    constructor(private store: Store<AppStateInterface>) {
      this.isLoading$ = this.store.pipe(select(isLoadingSelector));
      this.error$ = this.store.pipe(select(errorSelector));
      this.items$ = this.store.pipe(select(itemsSelector));
    }
  
}
