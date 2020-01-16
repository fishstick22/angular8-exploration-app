import { Component, OnInit } from '@angular/core';
import { DataService, Person } from 'app/shared/services/data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  people: Person[] = [];
  selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getPeople().subscribe(items => this.people = items);
  }

}
