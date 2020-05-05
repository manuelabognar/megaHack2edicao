module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8080, // porta default é 8545
      network_id: "*"
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}