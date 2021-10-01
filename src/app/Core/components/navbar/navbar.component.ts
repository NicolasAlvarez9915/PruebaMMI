import { Component, OnInit } from '@angular/core';
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons/faMobileAlt";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mobile = faMobileAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
