import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ItemComponent } from "./item.component";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";


@NgModule({
    declarations: [
        ItemComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        ButtonModule,
        InputTextModule
    ],
})
export class ItemModule { }
