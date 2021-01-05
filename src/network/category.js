import {request} from './request'


export function getCategory() {
  return request({
    params:{
      reqpath:"category"
    }
  })
}

export function getSubcategory(maitKey) {
  return request({
    params: {
      reqpath:"subcategory",
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    params: {
      reqpath:"subcategory/detail",
      miniWallkey,
      type
    }
  })
}
