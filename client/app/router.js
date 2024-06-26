import EmberRouter from '@ember/routing/router';
import config from 'client/config/environment';
import LessonComponent from "./components/lesson";
import TestComponent from "./components/test";
import UserComponent from "./components/user";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('user', {path: '/user'});
  this.route('lesson', {path: '/lesson', component: LessonComponent});
  this.route('test', {path: '/test', component: TestComponent});
});
