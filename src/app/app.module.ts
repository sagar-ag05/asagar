import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHome, faAddressCard, faGraduationCap,
  faBook, faSuitcase, faNewspaper, faMapMarkedAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import { faSquare, faCheckSquare, faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium, 
  faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutMeComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    
    library.addIcons(faUser, faGraduationCap, faAddressCard, faBook, faSuitcase, faNewspaper, faMapMarkedAlt,
      faPhoneAlt, faEnvelope, faHome, faStackOverflow, faGithub, faLinkedinIn, faTwitter, faMedium);
  }
}
