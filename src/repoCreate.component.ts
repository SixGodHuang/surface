import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {NgClass} from '@angular/common';
import { RepoService } from './repo.service';
import 'rxjs/add/operator/toPromise';

@Component({
	moduleId: module.id,
  selector: 'repo-create',
  templateUrl: '../templates/repository/repoCreate.html'
})
export class RepoCreateComponent { 
  errorMsg: string;
	step = 0;
	repo = {}
	constructor(
		private http: Http,
		private repoService: RepoService){
	}

	changeStep(step) {
		this.step = step
	}

	saveRepoInfo(step){
		console.log(this.repo)
		this.repoService.repoCreate(this.repo)
      .then(res => {},
            error => this.errorMsg = <any>error);
	}
}