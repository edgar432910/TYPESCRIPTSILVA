
import App  from "./app";
import ServerBootstrap from "@bootstrap/server.bootstrap";
import { DatabaseBootstrap } from "@bootstrap/database.bootstrap";

const serverBootstrap = new ServerBootstrap(App);
const databaseBootstrap = new DatabaseBootstrap();



(async()=>{
    try{

        await serverBootstrap.initialize();
        await databaseBootstrap.initialize();
       
    }
    catch(err){
        console.log({err})
        databaseBootstrap.getConnection().close();

        process.exit(1);// significa que un script se ejecuta correctamente 0, y 1 ha habido un error
    }
})();


