import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
  selector: 'app-dashboard-cmp',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    //1. Template Ref types 
    @ViewChild('readOnlyTemplate')readOnlyTemplate : TemplateRef < any >;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

    //2. Other Variables
    message: string;
    project: Project;
    selProject: Project;
    selectedProject: Project;
    projects: Array<Project>;
    isNewRecord: boolean;
    statusMessage: string;
    //3. Constructor injected with the Service Dependency
    constructor() {
        this.projects = new Array<Project>();      
    }
    //4. Load all Projects
    ngOnInit() {
        this.loadProject();
    }

    private loadProject() {
        this.projects = [{ Id: 12, Title: 'Projekt Paris', Color: 'Red', Text: 'Paris details' },
            { Id: 111, Title: 'Projekt New York', Color: 'Orange', Text: 'New York details' },
            { Id: 119, Title: 'Projekt Zurich', Color: 'Green', Text: 'Zurich details' },
            { Id: 214, Title: 'Projekt Barcelona', Color: 'Pink', Text: 'Barcelona details' },
            { Id: 289, Title: 'Projekt Hong Kong', Color: 'Magenta', Text: 'Hong Kong details' },
            { Id: 325, Title: 'Projekt Madrid', Color: 'Blue', Text: 'Madrid details' }];
    }

    //5. Add Project
    addProject() {
        var maxId = Math.max.apply(Math, this.projects.map(function (o) { return o.Id; }));
        this.selProject = new Project(maxId + 1, '', '', '');
        this
            .projects
            .push(this.selProject);
        this.isNewRecord = true;
    }

    //6. Edit Project
    editProject(project: Project) {
        this.selProject = <any>{
            Id: project.Id,
            Title: project.Title,
            Color: project.Color,
            Text: project.Text,
        };
    }

    //7. Load either Read-Onoy Template or EditTemplate
    loadTemplate(project: Project) {
        if (this.selProject && this.selProject.Id == project.Id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }

    }
    //8. Save Project
    saveProject() {
        if (this.isNewRecord) {
            //add a new Project

            this.statusMessage = 'Record Added Successfully.',
            this.isNewRecord = false;
            this.projects.filter((obj)=> {
                if (obj.Id == this.selProject.Id)
                {
                    obj.Id = this.selProject.Id;
                    obj.Title = this.selProject.Title;
                    obj.Color = this.selProject.Color;
                    obj.Text = this.selProject.Text;
                    console.log(obj);
                }
            });
            

            this.selProject = null;

        } else {
            //edit the record
            this.statusMessage = 'Record Updated Successfully.';
                this.projects.filter((obj) => {
                    if (obj.Id == this.selProject.Id) {
                        obj.Id = this.selProject.Id;
                        obj.Title = this.selProject.Title;
                        obj.Color = this.selProject.Color;
                        obj.Text = this.selProject.Text;
                        console.log(obj);
                    }
                });
            this.selProject = null;

        }
    }
    //9. Cancel edit
    cancel() {
        if (this.isNewRecord)
            this.deleteProject(this.selProject);
        this.selProject = null;
        this.isNewRecord = false;
    }
    //10 Delete Project
    deleteProject(project: Project) {
        this.projects = this.projects.filter(function (obj) {
            return obj.Id !== project.Id;
        });
    }

    //11 Select Project
    selectProject(project: Project) {
        this.selectedProject = project;
    }

 }
