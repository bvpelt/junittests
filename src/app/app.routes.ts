import { Routes } from "@angular/router";
import { Part02Component } from "./part02/part02.component";
import { Part03Component } from "./part03/part03.component";
import { Part04Component } from "./part04/part04.component";
import { Part05Component } from "./part05/part05.component";

export const routes: Routes = [
  { path: "part02", component: Part02Component },
  { path: "part03", component: Part03Component },
  { path: "part04", component: Part04Component },
  { path: "part05", component: Part05Component },
];
