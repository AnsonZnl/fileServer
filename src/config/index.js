const isDev = process.env.NODE_ENV === 'development';

//获取本机ip地址
function getIPAdress() {
    var interfaces = require('os').networkInterfaces();　　
    for (var devName in interfaces) {　　　　
        var iface = interfaces[devName];　　　　　　
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }　　
    }
}

const IP = getIPAdress();
const serverPort = 3001;
const staticPath = isDev ? `http://${IP}:${serverPort}` : `http://139.224.102.110:${serverPort}`;

export default {
  protocol: 'http:',
  host: 'localhost',
  serverPort,
  staticPath
}