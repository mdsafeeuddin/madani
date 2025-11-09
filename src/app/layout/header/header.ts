import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
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
