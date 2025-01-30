import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent  {
  title = 'angular-project';

  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      initFlowbite();
    }
  }

  public mobile = signal<boolean>(false);

  public mobileDownloadMenu = signal<boolean>(false);

  public toggleMobile(): void {
    this.mobile.set(!this.mobile());
  }

  public toggleMobileDownloadMenu(): void {
    this.mobileDownloadMenu.set(!this.mobileDownloadMenu());
  }

  public toggleMobileDownloadMenuToFalse(): void {
    this.mobileDownloadMenu.set(false);
  }

  public tipos: tipoLink[] = Object.values(tipoLink) as tipoLink[];
  listaLinks = [
    {
      nome: "[1] Download",
      link: "https://drive.google.com/file/d/1zStEPmJ9fhYd6W7NToEY7dD2FyNeChdC/view",
      tipo: tipoLink.PC
    },
    {
      nome: "[2] Download",
      link: "https://drive.google.com/file/d/1tyX-aM8Sqm0daPdQztT4KFy-7r6kERso/view",
      tipo: tipoLink.PC
    },
    {
      nome: "[3] Download",
      link: "https://drive.google.com/file/d/1-gRYWfVdpp44hYv-dZez6lwK8kCEUTZ_/view",
      tipo: tipoLink.PC
    },
    {
      nome: "[1] Download",
      link: "https://drive.google.com/file/d/17KYdEu95InUrZ64vPDeMJWYMScwMiPJP/view?usp=sharing",
      tipo: tipoLink.Android
    },
    {
      nome: "[2] Download",
      link: "https://www.mediafire.com/file/tu4dc3c5x5en88x/DreamScape_20241225_-1.apk/file",
      tipo: tipoLink.Android
    },
    {
      nome: "[1] Download",
      link: "https://f.fenfa88.com/PjaV",
      tipo: tipoLink.IOS
    },

  ]

  public retornarLink(tipo: tipoLink) {
    if (tipo != null) {
      return this.listaLinks.filter(v => v.tipo === tipo);
    }
    return [];
  }

  public retornarMainColor(tipodoLink: tipoLink, adtionalText: string): string {
    let retorno: string = "gray-700";
    if (tipodoLink != null) {
      switch (tipodoLink) {
        case tipoLink.PC:
          retorno = `gray-700`;
          break;
        case tipoLink.Android:
          retorno = `green-900`;
          break;
        case tipoLink.IOS:
          retorno = `amber-600`;
          break;
      }
    }
    return `${adtionalText}${retorno}`;
  }

  //#region código de teste
  // public retornarMainColorBg(tipodoLink: tipoLink):string {
  //   let retorno:string = "bg-gray-700";
  //   if (tipodoLink != null) {
  //     switch(tipodoLink){
  //       case tipoLink.PC:
  //         retorno = `bg-gray-700`;
  //         break;
  //       case tipoLink.Android:
  //         retorno = `bg-green-900`;
  //         break;
  //       case tipoLink.IOS:
  //         retorno =  `bg-amber-600`;
  //         break;
  //     }
  //   }
  //   return `${retorno}`;
  // }
  //
  // public retornarMainColorText(tipodoLink: tipoLink):string {
  //   let retorno:string = "md:hover:text-gray-700";
  //   if (tipodoLink != null) {
  //     switch(tipodoLink){
  //       case tipoLink.PC:
  //         retorno = `md:hover:text-gray-700`;
  //         break;
  //       case tipoLink.Android:
  //         retorno = `md:hover:text-green-900`;
  //         break;
  //       case tipoLink.IOS:
  //         retorno =  `md:hover:text-amber-600`;
  //         break;
  //     }
  //   }
  //   return `${retorno}`;
  // }
  //
  // public retornarMainColorText2(tipodoLink: tipoLink):string {
  //   let retorno:string = "after:bg-gray-700";
  //   if (tipodoLink != null) {
  //     switch(tipodoLink){
  //       case tipoLink.PC:
  //         retorno = `after:bg-gray-700`;
  //         break;
  //       case tipoLink.Android:
  //         retorno = `after:bg-green-900`;
  //         break;
  //       case tipoLink.IOS:
  //         retorno =  `after:bg-amber-600`;
  //         break;
  //     }
  //   }
  //   return `${retorno}`;
  // }
  //#endregion
}

export enum tipoLink {
  PC = 'PC',
  Android = 'Android',
  IOS = 'IOS'
}

