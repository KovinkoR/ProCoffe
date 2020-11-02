/* eslint-disable no-underscore-dangle */
import express from 'express';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import passport from 'passport';

import './misc/env.js';
import './misc/db.js';
import './passportJs/passport-setup.js';

import authRouter from './routes/authRouter.js';
import googleAuthRoutes from './routes/googleAuthRouter.js';
import readTextRouter from './routes/readRouter.js';
import userRouter from './routes/userRouts.js';
import searchRouter from './routes/searchRouter.js';
import restoreRouter from './routes/restoreRouter.js';

const app = express();
const FileStore = sessionFileStore(session);

app.set('session cookie name', 'sid');

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));
app.use(express.static(path.resolve('../front/build/')));

// const corsOptions = {
//   origin: 'http://localhost:3000/privetIzGoogla',
//   optionsSuccessStatus: 200,
// };

app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.use(session({
  name: app.get('session cookie name'),
  secret: process.env.SESSION_SECRET,
  store: new FileStore({
    secret: process.env.SESSION_SECRET,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
  },
}));

app.use((req, res, next) => {
  // console.log(req.session.user, 'пользователь в сессии');
  next();
});

app.use(authRouter);
app.use(googleAuthRoutes);
app.use(readTextRouter);
app.use(searchRouter);
app.use(userRouter);
app.use(restoreRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('../front/build/index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => { console.log(`Port ${port} is alive!`); });
