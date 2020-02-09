
// 这个是封装地址
// 1.添加遮罩
// 2.配置通用的url
// 3.使用promise进行改造
// params是形参
import {BASE_URL} from "./urls.js"
export const request=(params)=>{
  wx.showLoading({
    title: '正在加载中',
    mask:true
  })
  return new Promise(function (resolve, reject) {
    wx.request({
      ...params,
      url: BASE_URL+params.url,
       success:(res)=>{
        //  console.log(res)
         resolve(res.data.message);
      
       },
       fail:(err)=>{
         reject(err);
       },
       complete:()=>{
         wx.hideLoading();
       }
  })
  })
}