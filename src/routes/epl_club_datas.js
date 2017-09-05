import express from 'express';
import bodyParser from 'body-parser';
import epl from '../model/epl_club_rounds';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash.get';

let app = express();
app.use(bodyParser.json());
        
    // app.get('/:identifier', (request,response)=>{
    //     user.query({
    //         select:['username','email'],
    //         where: {email: request.params.identifier},
    //         orWhere: {username: request.params.identifier}
    //     }).fetch().then(usr=>{
    //         response.json({usr});
    //     });
    // });

 app.post('/',function(request,response){
      epl.query({
            
            select:['datas'],
            where: {id: 93}
         }).fetch().then(usr=>{
            response.json({usr});
        });
    }
 );

// app.post('/', (request,response)=>{
//     let datas = request.body;
//     console.log(datas);
//     //const datas={};
//     //for (const x of ) {
//         //const {key,name,code} =x;
//         //console.log("Key :"+key," Name :"+name," code :"+code);
//         //epl.forge({datas}).save();
//    // }
// });

export default app;