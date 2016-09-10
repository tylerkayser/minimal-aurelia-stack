export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.options.pushState = true;
    config.options.root = '/';

    config.map([
      {
        name: 'home',
        moduleId: 'home/index',
        route: ''
      },
      {
        name: 'about',
        moduleId: 'about/index',
        nav: true,
        route: 'about',
        title: 'About'
      },
      {
        name: 'contact',
        moduleId: 'contact/index',
        nav: true,
        route: 'contact',
        title: 'Contact'
      }
    ]);

    this.router = router;
  }
}
