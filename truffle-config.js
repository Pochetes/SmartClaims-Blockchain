const path = require("path");

module.exports = {
// See <http://truffleframework.com/docs/advanced/configuration>
// to customize your Truffle configuration!
contracts_build_directory: path.join(__dirname, "client/src/contracts"),
networks: {
genache: {
host:"localhost",
port: 7545,
gas:5000000,
network_id:"*"
}
}
};
