if(process.env.NODE_ENV == 'production'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}

//process.env.NODE_ENV 환경변수를 가르킴