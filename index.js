//Importing server
const server = require("./server");

//Port is either specified in the environment config or 5000
const PORT = process.env.PORT || 5000;

//Setting server listener
server.listen(PORT, () => console.log(`Magic happening on port: ${PORT}`));
