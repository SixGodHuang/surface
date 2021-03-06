import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Org } from './org';


@Injectable()
export class OrgService {
  private headers = new Headers({'Content-Type':'application/json'})
  constructor(private http: Http){}

  // getOrgList(): Promise<Org[]> {
  //   var arr = [{ name: "small",
  //                 title: "small",
  //                 bio: "desc",
  //                 id: 50,
  //                 gravatar: "img/logo.png",
  //                 teams: 30,
  //                 repositories: 100
  //               }]
  //   return Promise.resolve(arr);
  // }
  
  getOrgList(): Promise<Org[]> {
    return this.http.get('json/orgList.json')
               .toPromise()
               .then(this.dealData)
               .catch(this.handleError)
  }

  orgCreate(info): Promise<Org[]> {
    let params=JSON.stringify(info)
    return this.http.post('/web/v1/orgs', params, {headers: this.headers})
               .toPromise()
               .then(this.dealData)
               .catch(this.handleError)
  }

  private dealData (res: Response) {
    return res.json() || {}
  }
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
    return Promise.reject(errMsg);
  }
  // getRepo(id: number): Promise<Repo> {
  //   return this.getRepoList()
  //              .then(heroes => heroes.find(hero => hero.id === id));
  // }
}