import http from '../until/http'

function homeFind(data){
    return  http("get",'/homepage/block/page',data);
};
function ball(data){
    return  http("get",'/homepage/dragon/ball',data);
};
function song(data){
    return http("get","/song/url?id=33894312",data)
}

export {
    homeFind,
    ball,
    song
 }