const os = require ('os');

setInterval(() => {

   const {freemem , totalmem} = os;//pegando de OS os valores de freemem e totalmem

   const memory = freemem() / 1024 / 1024;
   const totalMemory = totalmem() / 1024 / 1024;
   const percents = parseInt((memory / totalMemory) * 100 );
   
   const stats = {
      Free  :  `${memory} MB`,
      Total :  `${totalMemory} MB`,
      Usage :  `${percents} %`
   }
   console.clear();
   console.log("****** PC STATS || MEMORY USAGE ******");
   console.table(stats);

}, 1000);

