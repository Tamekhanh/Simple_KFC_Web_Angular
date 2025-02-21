import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  topFunction(): void {
    const container = document.getElementById("container");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}
