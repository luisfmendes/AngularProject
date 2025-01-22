import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [[RouterOutlet], CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent {
  title = 'angular-project';
  public tipos: tipoLink[] = Object.values(tipoLink) as tipoLink[];
    listaLinks = [
    {
     nome: "Download 1",
     link: "https://drive.google.com/file/d/1zStEPmJ9fhYd6W7NToEY7dD2FyNeChdC/view",
     tipo: tipoLink.PC
    },
    {
      nome: "Download 2",
      link: "https://drive.google.com/file/d/1tyX-aM8Sqm0daPdQztT4KFy-7r6kERso/view",
      tipo: tipoLink.PC
     },
     {
      nome: "Download 3",
      link: "https://drive.google.com/file/d/1-gRYWfVdpp44hYv-dZez6lwK8kCEUTZ_/view",
      tipo: tipoLink.PC
     },
     {
      nome: "Download 1",
      link: "https://drive.google.com/file/d/17KYdEu95InUrZ64vPDeMJWYMScwMiPJP/view?usp=sharing",
      tipo: tipoLink.Android
     },
     {
      nome: "Download 2",
      link: "https://www.mediafire.com/file/tu4dc3c5x5en88x/DreamScape_20241225_-1.apk/file",
      tipo: tipoLink.Android
     },
     {
      nome: "Download 1",
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

  public retornarMainColor(tipo: tipoLink, adtionalText:string) {
    let retorno = "gray-700";
    if (tipo != null) {
      switch(tipo){
        case tipoLink.PC:
          retorno = "gray-700";
          break;
          case tipoLink.Android:
            retorno =  "green-900";
          break;
          case tipoLink.IOS:
            retorno =  "amber-600";
          break;
      }
    }
//    console.log(`retornarMainColor(${tipo}, ${adtionalText}) = ${adtionalText + retorno}`);
    return adtionalText + retorno;
  }

}

export enum tipoLink {
  PC = 'PC',
  Android = 'Android',
  IOS = 'IOS'
}

