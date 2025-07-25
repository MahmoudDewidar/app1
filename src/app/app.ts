import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/navbar";
import { Home } from "./home/home";
import { About } from "./about/about";
import { Portfolio } from "./portfolio/portfolio";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar, Home, About, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app1');
}
