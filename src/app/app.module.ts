import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { FormsModule } from '@angular/forms';
import { DirectivesDemoComponent } from './components/directives-demo/directives-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from "@angular/material/card";
import {MatTableModule} from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { BoardComponent } from './components/board/board.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DirectivesDemoComponent,
    TemplateDrivenFormComponent,
    TicTacToeComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,MatCardModule,MatTableModule,MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
