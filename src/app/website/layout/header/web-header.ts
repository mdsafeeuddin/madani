import { Component } from '@angular/core';

@Component({
  selector: 'web-header',
  standalone: false,
  templateUrl: './web-header.html',
  styleUrl: './web-header.css',
})
export class WebHeader {
  constructor(){
    window.addEventListener('scroll', () => {
      const btn = document.getElementById('scrollTopBtn');
      if(!btn) return;
      if (window.pageYOffset > 300){
        btn.classList.remove('d-none');
      }else{
        btn.classList.add('d-none');
      }
    })
  }

  scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
