
import startUp from './startUp';
// import swaggerUi from 'swagger-ui-express';
// import * as swaggerDocument from './swagger.json';

let port = process.env.PORT || '3050';



startUp.app.listen(port,function(){
    console.log(`servidor execultando na porta ${port}`);
  
})