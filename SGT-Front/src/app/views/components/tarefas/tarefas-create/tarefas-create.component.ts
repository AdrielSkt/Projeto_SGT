import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { ResponsavelService } from 'src/app/services/responsavel.service';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefas-create',
  templateUrl: './tarefas-create.component.html',
  styleUrls: ['./tarefas-create.component.css']
})
export class TarefasCreateComponent implements OnInit {

  tarefa: Tarefa = {
    dataInicio: '',
    terminoPrevisto: '',
    horasEfetivas: 0 ,
    status:'', 
    responsavel:{
      nome: ""
    },
    comentario: []

  }

  selected: string ='';

  constructor(private router: Router, private service:TarefaService, private responsavelService: ResponsavelService) { }

  ngOnInit(): void {
  }


  cancelar(): void{
    this.router.navigate(['responsaveis'])

  }
  create(): void{
    this.service.create(this.tarefa).subscribe((resposta)=> {
      this.router.navigate(['responsaveis'])
      this.service.messege('Responsavel Criado Com Sucesso')

    })

  }
  // listarTecnicos()

}
