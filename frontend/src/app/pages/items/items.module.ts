import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ItemModule } from "./item/item.module";
import { ItemsRoutingModule } from "./items-routing.module";
import { ItemsComponent } from "./items.component";

@NgModule({
    declarations: [
        ItemsComponent
    ],
    imports: [
        CommonModule,
        ItemsRoutingModule,
        ItemModule,
        RouterModule,
        TableModule,
        ButtonModule
    ],
    providers: [
        DatePipe
    ]
})
export class ItemsModule { }
