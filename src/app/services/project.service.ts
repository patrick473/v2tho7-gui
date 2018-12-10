import { IProjectForm } from './../components/target/Project/project-details/project-details.component';
import { Injectable } from '@angular/core';
import Project from '../models/Project';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getprojects(): Observable<Project[]> {

    const project1: Project = new Project(1, 'Profit Allocation Application', 'Los Angeles, USA');
    const project2: Project = new Project(2, 'Financial Wizard', 'Sacramento, USA');
    const project3: Project = new Project(3, 'ZZP Portal', 'Boston, USA');

    const projectList: Project[] = [project1, project2, project3];
    return of (projectList);
  }
  getproject(id: number): Project {
    const project: Project = new Project(id, 'ZZP Portal', 'Boston, USA');
    return project;
  }
  deleteProject(id: number): void {
    console.log(`project:${id} is deleted`);
  }
  createNewProject(projectData: IProjectForm): void {
    const {name, location} = projectData;
    const newProject: Project = new Project(1, name, location);
    console.log(newProject);
  }
  updateProject(projectData: IProjectForm, id: number): void {
    console.log(projectData);
    console.log(`id:${id} is updated`);
  }
}
