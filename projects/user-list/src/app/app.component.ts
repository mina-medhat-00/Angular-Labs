import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { UserCardComponent } from "./components/user-card/user-card.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: "./app.component.html",
  styles: ``,
})
export class AppComponent implements OnInit {
  users: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any[]>("assets/data/users.json").subscribe((data) => {
      this.users = data;
    });
  }
}
