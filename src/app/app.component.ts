/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from "@angular/core";

import { SeoService } from "./@core/utils/seo.service";
import { AuthService } from "./auth/authService.service";
@Component({
  selector: "ngx-app",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.authService.autoLogIn();
    this.seoService.trackCanonicalChanges();
  }
}
