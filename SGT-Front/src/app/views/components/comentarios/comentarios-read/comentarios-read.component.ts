import { AfterViewInit, Component, Input, ViewChild, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Comentario } from 'src/app/models/comentario';
import { Tarefa } from 'src/app/models/tarefa';

@Component({
  selector: 'app-comentarios-read',
  templateUrl: './comentarios-read.component.html',
  styleUrls: ['./comentarios-read.component.css']
})
export class ComentariosReadComponent implements AfterViewInit {
  
  @Input() tarefa!: Tarefa;
  
  displayedColumns: string[] = ['comentario'];
    dataSource = new MatTableDataSource<Comentario>(this.tarefa?.comentario);
  
  

    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    constructor(){}
  
    ngAfterViewInit() {

    }
  

}
