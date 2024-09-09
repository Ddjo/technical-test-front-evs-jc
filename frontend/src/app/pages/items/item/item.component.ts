import { Component } from "@angular/core";
import { FormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Item } from "../../../core/models/items.model";
import { ItemsActions } from "../../../core/store/items/items.actions";
import { AppStateInterface } from "../../../core/store/types/app-state.interface";

@Component({
    selector: "item",
    templateUrl: "./item.component.html",
    styleUrl: "./item.component.scss"
})
export class ItemComponent {
    
    itemForm = new UntypedFormGroup({
        label : new FormControl<string | undefined>(undefined, {
            validators: [Validators.required],
            nonNullable: true
          }),
    })

    constructor(
        private store: Store<AppStateInterface>,
    ) {}


    submitItem() {
        // If form valid, create item object
        if (this.itemForm.valid) {
            const item: Item = {
                id :  Date.now(),           
                ...this.itemForm.getRawValue()
            }

            this.store.dispatch(ItemsActions.createItem({item}));
        }
    }   
}
