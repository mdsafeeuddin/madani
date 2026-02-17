import { Component } from "@angular/core";

@Component({
  selector:'website',
  standalone: false,
  templateUrl:'./website.html',
  styleUrl:'./website.css',
})

export class Website{
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