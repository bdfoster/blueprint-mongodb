module.exports = exports = {
  connections: {
    $default: {
      connstr: 'mongodb://localhost/blueprint_tests',

      options : {
        db: {
          native_parser: true,
          read_preference: "primary",
          forceServerObjectId: false,
          w: 1
        },
        server: {
          auto_reconnect: true,
          keepAlive: 1,
          poolSize: 5,
          socketOptions: {}
        }
      }
    }
  }
};
