import express from 'express';
import bodyParser from 'body-parser';
import epl from '../model/utilityModel';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash.get';

let app = express();
app.use(bodyParser.json());

app.post('/', (request,response)=>{
       let data = request.body;
     console.log(data);
    // epl.forge({data}).save();
    //  for (const x of ) {
    //      const {key,name,code} =x;
    //      console.log("Key :"+key," Name :"+name," code :"+code);
    //      epl.forge({datas}).save();
    //  }
    epl.where('id', 97).fetch({data: [data]}).then(function(user) {
  console.log(user.related('posts').toJSON());
}).catch(function(err) {
  console.error(err);
});
 });

export default app;
