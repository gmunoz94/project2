app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '/views/layouts')
  }));
  app.set('views', path.join(__dirname, '/views'));
  app.set('view engine', 'handlebars');