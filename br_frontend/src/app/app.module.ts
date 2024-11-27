import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/app-layout/header/header.component';
import { FooterComponent } from './components/app-layout/footer/footer.component';
import { SidebarComponent } from './components/app-layout/sidebar/sidebar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AboutComponent } from './components/app-layout/header/about/about.component';
import { ContactComponent } from './components/app-layout/header/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DealsComponent } from './components/deals/deals.component';
import { FilterBarComponent } from './components/deals/filter-bar/filter-bar.component'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CardLayoutComponent } from './components/deals/card-layout/card-layout.component';
import { TestComponent } from './components/test/test.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomepageComponent,
    AboutComponent,
    ContactComponent,
    DealsComponent,
    FilterBarComponent,
    CardLayoutComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, 
    FormsModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
