import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
    declarations: [
        ProductCardComponent
    ],
    exports: [
        ProductCardComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ]
})
export class ProductCardModule { }
