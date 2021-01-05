import {request} from './request'
export function getHomeMultidata(){
  return request({
    params:{
      reqpath:"multidata"
    }
  })
}
export function getHomeGoods(type,page){
  return request({
    params:{
      reqpath:"data",
      type,
      page
    }
  })
}