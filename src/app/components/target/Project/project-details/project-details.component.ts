import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../../services/target/project.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Project from 'src/app/models/Project';

export interface IProjectForm {
  name: string;
  location: string;
}
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  submitted = false;
  projectID: number;
  projectForm: FormGroup;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      location: new FormControl('', [Validators.required, Validators.maxLength(255)])
    });
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.projectID = parseInt(params['id'], 10);
        const selectedProject: Project = this.projectService.getproject(this.projectID);
        this.projectForm.setValue({
          name: selectedProject.name,
          location: selectedProject.location
        }, {onlySelf: true, emitEvent: true});
      }
    });
  }

  onSubmit() {

    let formData: IProjectForm = Object.assign({}, this.projectForm.value);
    formData = Object.assign({}, formData);
    if (this.projectID) {
      this.projectService.updateProject(formData, this.projectID);
    } else {this.projectService.createNewProject(formData); }

    this.router.navigate([`/target/project`]);
  }

}
