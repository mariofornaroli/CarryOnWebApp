import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';

import { CoGlobalsService } from './_services/coGlobals.service';
import { RqgtService } from './_services/rqgt.service';
import { ErrorMngService } from './_services/errorMng.service';
import { TransportService } from "app/_services/transport.service";

import { DpDatePickerModule } from 'ng2-date-picker';
import { CommonService } from "app/_services/common.service";
import { UserService } from "app/_services/user.service";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        DpDatePickerModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent        
    ],
    providers: [CoGlobalsService, RqgtService, ErrorMngService, TransportService, CommonService, UserService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
