import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Responsavel } from 'src/app/models/responsavel';
import { ResponsavelService } from 'src/app/services/responsavel.service';

@Component({
  selector: 'app-responsavel-create',
  templateUrl: './responsavel-create.component.html',
  styleUrls: ['./responsavel-create.component.css']
})
export class ResponsavelCreateComponent implements OnInit {

responsavel: Responsavel ={
  id:'',
  nome: '',
}

  constructor(private router: Router,private service: ResponsavelService) { }

  ngOnInit(): void {
  }

  cancelar(): void{
    this.router.navigate(['responsaveis'])

  }
  create(): void{
    this.service.create(this.responsavel).subscribe((resposta)=> {
      this.router.navigate(['responsaveis'])
      this.service.messege('Responsavel Criado Com Sucesso')

    })

  }
}
