import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from "../../../data/dataFake"

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  pageTitle:string = "Titulo aqui"
  pageContent:string = "Conteudo aqui"
  imageUrl:string = "https://i1.wp.com/gelatologia.com/wp-content/uploads/2020/07/placeholder.png?ssl=1"
  private id: string = ""


  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id") || ""
    )

    if (this.id !== "") {
      this.getData()
    }
  }

  getData() {
    const conteudo = dataFake.find(data => data.id === this.id)
    if (conteudo) {
      this.pageTitle = conteudo.title
      this.pageContent = conteudo.description
      this.imageUrl = conteudo.imageUrl
    }
  }



}
