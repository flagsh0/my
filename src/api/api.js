import http from '../until/http'

function homeFind(){
    return  http("get",'/homepage/block/page');
};

export {
    homeFind
 }