import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { ConfirmaDesignacaoComponent } from '../confirma_designacao/confirma-designacao.component';

// import Swiper from 'swiper';
import Swiper, {
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  Autoplay,
  Manipulation,
  Keyboard,
} from 'swiper';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-designacao-tecnico',
  templateUrl: './designacao-tecnico.component.html',
  styleUrls: ['./designacao-tecnico.component.css'],
})
export class DesignacaoTecnicoComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    const swiper = new Swiper('.swiper', {
      modules: [
        Navigation,
        Pagination,
        Mousewheel,
        Autoplay,
        Scrollbar,
        Keyboard,
        Manipulation,
      ],
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      // autoplay: {
      //   delay: 1000,
      // },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 3,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
      keyboard: true,
      grabCursor: true,
    });
  }

  public designaTecnico() {
    let lista: any = document.getElementById('lista');

    let item = document.createElement('div');

    lista.appendChild(item);

    console.log(lista);
    console.log(item);
  }

  public formDesignaTecnico() {
    console.log('Formulario de designação de tecnico');
  }

  // public confirm() {
  //   console.log('Cancelar');
  //   this.router.navigate(['/confirma-designacao']);
  // }

  public confirm() {
    const dialogRef = this.dialog.open(ConfirmaDesignacaoComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });

    throw new Error('Method not implemented.');
  }
}
