import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { ModalComponent } from './components/modal/modal.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WorksComponent } from './components/works/works.component';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './translate';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ModalComponent,
    HomeComponent,
    AboutComponent,
    WorksComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'works', component: WorksComponent },
            { path: '**', redirectTo: 'home' }
        ])
  ],
  providers: [ 
    TRANSLATION_PROVIDERS, 
    TranslateService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
