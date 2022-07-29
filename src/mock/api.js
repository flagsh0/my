import Mock from 'mockjs'//ES6写法
// let Mock = require("mockjs") ES5写法
//模拟延迟
Mock.setup({
    timeout:500
})
//生成随机数据
Mock.mock("http://localhost:3001/mock/usermsg","get",function(){
    return Mock.mock({
        "code": 200,
        "msg":"",
        "result":{
            "list|15":[{
                "id|+1":1,
                "userName":"@cname",
                "sex|0-1":"1",
                "status|1":[1,2,3,4,5],
                "interest|1":[1,2,3,4,5],
                "birthday":"2020-5-20",
                "address":"@province",
                "time":"09:00"
            }],
            "page":1,
            "page_size":1,
            "total":100
        }
    })
})
