const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const githubRouter = require('./routes/github');
const kypuSlonaRouter = require('./routes/kypu-slona');
const studentsRouter = require('./routes/students')
const carRouter = require('./routes/car')
const roadRouter = require('./routes/road');
const packmanRouter = require('./routes/packman');
const pizzaRouter = require('./routes/pizza_menu')

const app = express();

const checkAuth = (req, res, next) => {
  if (req.session.email) {
    next();
  } else {
    res.redirect('/auth/login');
  }
}

app.set('trust proxy', 1)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'my-secret-key', //TODO change to env variable
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, //set to true if https is used
}));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/repositories', checkAuth, githubRouter);
app.use('/kypu-slona', kypuSlonaRouter);
app.use('/students', studentsRouter)
app.use('/car', carRouter);
app.use('/road', roadRouter);
app.use('/packman', packmanRouter);
app.use('/pizza_menu', pizzaRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
