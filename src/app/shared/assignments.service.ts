import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      nom:"Devoir Angular de Michel Buffa",
      dateDeRendu: new Date("2024-02-15"),
      rendu:false
    },
    {
      nom:"Devoir SQL3 de Serge Miranda",
      dateDeRendu: new Date("2024-01-15"),
      rendu:true
    },
    {
      nom:"Devoir BD de Mr Gabriel Mopolo",
      dateDeRendu: new Date("2024-03-01"),
      rendu:false
    }
  ];
  constructor() { }
  getAssignments(): Observable<Assignment[]>{
    return of(this.assignments);
  }
  addAssignment(assignmentToAdd : Assignment): Observable<string>{
    this.assignments.push(assignmentToAdd);
    return of("Assignment : "+assignmentToAdd.nom+" ajouté avec succès!!");
  }
}
