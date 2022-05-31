import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "src/app/guards/auth.guard";
import { AuthService } from "src/app/services/auth.service";

@NgModule({
    declarations: [AuthComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatTabsModule,
        MatFormFieldModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [HttpClientModule, AuthService, AuthGuard],
})
export class AuthModule {}
