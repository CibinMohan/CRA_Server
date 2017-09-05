import express from 'express';
import path from'path';
import bodyParser from 'body-parser';
import users from './routes/users';
import auth from './routes/auth';
import epl from './routes/epl_club_datas';
import utility from './routes/utilityPost';
import epl_name from './routes/epl_club_basic';
let app = express();

app.use(bodyParser.json());
//app.use('/api/users', users);

app.use('/api/users', users);
app.use('/api/utility', utility);
app.use('/api/epl', epl);
app.use('/api/auth', auth);
app.use('/api/clubname', epl_name);

app.listen(8080, () => console.log('listen on ser 8080'));
