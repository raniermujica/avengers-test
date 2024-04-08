import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/heroes';
import { RouterLink } from '@angular/router';
import { PipesModule } from '../../pipes.module';

@Component({
  selector: 'app-heroes-items',
  standalone: true,
  imports: [RouterLink, PipesModule],
  templateUrl: './heroes-items.component.html',
  styleUrl: './heroes-items.component.css',
})
export class HeroesItemsComponent implements OnInit {
  [x: string]: any;

  @Input() heroData!: any;
  @Input() searchFilter: string = '';
  
  constructor(private elementRef: ElementRef) {}


  ngOnInit(): void {
    const observerView = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on view');
          observerView.unobserve(entry.target);
          console.log(this.heroData)
        }
      } )
    })
    observerView.observe(this.elementRef.nativeElement);
  }
  getImageUrl(thumbnail: any): string {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }
}
