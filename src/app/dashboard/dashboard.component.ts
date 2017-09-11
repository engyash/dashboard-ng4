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
        this.projects = [{ _id: '1', Title: 'test title 1', Color: 'Blue', Text: 'testing 1' },
            { _id: '2', Title: 'test title 2', Color: 'Red', Text: 'testing 2' }];
    }

    //5. Add Project
    addProject() {
        this.selProject = new Project('', '', '', '');
        this
            .projects
            .push(this.selProject);
        this.isNewRecord = true;
    }

    //6. Edit Project
    editProject(project: Project) {
        this.selProject = project;
    }

    //7. Load either Read-Onoy Template or EditTemplate
    loadTemplate(project: Project) {
        if (this.selProject && this.selProject._id == project._id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }

    }
    //8. Save Project
    saveProject() {
        if (this.isNewRecord) {
            //add a new Project

            this.selProject._id = Math.random().toString();
            this.statusMessage = 'Record Added Successfully.',
            this.isNewRecord = false;
            this.selProject = null;

        } else {
            //edit the record
                this.statusMessage = 'Record Updated Successfully.',
            this.selProject = null;

        }
    }
    //9. Cancel edit
    cancel() {
        this.selProject = null;
    }
    //10 Delete Project
    deleteProject(project: Project) {
        this.projects = this.projects.filter(function (obj) {
            return obj._id !== project._id;
        });
    }

 }
