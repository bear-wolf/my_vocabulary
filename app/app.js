// import dotenv from 'dotenv';
import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'client/config/environment';
import axios from "axios";

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  constructor(props) {
    super(props);
  }
}

loadInitializers(App, config.modulePrefix);
