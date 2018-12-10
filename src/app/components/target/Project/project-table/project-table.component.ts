import { Router } from '@angular/router';
import { ProjectService } from './../../../../services/project.service';
import { Component, OnInit } from '@angular/core';
import Project from 'src/app/models/Project';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getprojects()
    .subscribe(projects => this.projects = projects);
  }
  onDelete(id: number) {
    this.projectService.deleteProject(id);
  }
  onEdit(id: number) {
    this.router.navigate([`/target/project/details/`], {queryParams: {id}} );
  }
}
