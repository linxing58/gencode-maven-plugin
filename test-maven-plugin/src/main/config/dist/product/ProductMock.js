/*产品模拟数据},作者:alvin198761@163.com,日期:2019-11-17 21:00:17*/
'use strict';
var Mock = require('mockjs')
var Random = Mock.Random;
module.exports = {

  'POST /api/product/queryPage': function (req, res, next) {
    var data = Mock.mock({
      'content|10': [{
                                    id: "@integer(100,200)",//主键
                                                prodNo : "@word(5,10)",// 货号
                                                taxType : "@word(5,10)",// 税收类型
                                                prodName : "@word(5,10)",// 产品名称
                                                specNo : "@word(5,10)",// 规格型号
                                                note : "@word(5,10)",// 产品说明
                                                unit : "@word(5,10)",// 单位
                                                price: "@integer(100,200)",//底价
                                                sellPrice: "@integer(100,200)",//售卖价(含税)
                                                markPrice: "@integer(100,200)",//市场价(不含税)
                                                hasTax : "@word(5,10)",// 市场价(含税)
                                                priceMode : "@word(5,10)",// 价格类型
                                                vendorId: "@integer(100,200)",//货物来源
                                                pic1 : "@word(5,10)",// 产品图片1
                                                pic2 : "@word(5,10)",// 产品图片2
                                                pic3 : "@word(5,10)",// 产品图片3
                                                remark : "@word(5,10)",// 备注
                          }],
      'number': '@integer(100,200)',
      'size': 10,
      'totalElements': 500,
    });

    var resp = {
         "code": 200,
         "errorMsg": "请求成功",
         "data":data
         };

    setTimeout(function () {
      res.json(resp);
    }, 500);
  },

  'POST /api/product/update': function (req, res, next) {
    var resp = {
           "code": 200,
           "errorMsg": "请求成功",
           "data":1
           };
    setTimeout(function () {
      res.json(resp);
    }, 500);
  },

  'POST /api/product/save': function (req, res, next) {
   var resp = {
         "code": 200,
         "errorMsg": "请求成功",
         "data":1
         };
    setTimeout(function () {
      res.json(resp);
    }, 500);
  },

  'POST /api/product/queryList': function (req, res, next) {
    var data = Mock.mock({
      'content|10': [{
                                    id: "@integer(100,200)",//主键
                                                prodNo : "@word(5,10)",// 货号
                                                taxType : "@word(5,10)",// 税收类型
                                                prodName : "@word(5,10)",// 产品名称
                                                specNo : "@word(5,10)",// 规格型号
                                                note : "@word(5,10)",// 产品说明
                                                unit : "@word(5,10)",// 单位
                                                price: "@integer(100,200)",//底价
                                                sellPrice: "@integer(100,200)",//售卖价(含税)
                                                markPrice: "@integer(100,200)",//市场价(不含税)
                                                hasTax : "@word(5,10)",// 市场价(含税)
                                                priceMode : "@word(5,10)",// 价格类型
                                                vendorId: "@integer(100,200)",//货物来源
                                                pic1 : "@word(5,10)",// 产品图片1
                                                pic2 : "@word(5,10)",// 产品图片2
                                                pic3 : "@word(5,10)",// 产品图片3
                                                remark : "@word(5,10)",// 备注
                          }]
    });
      var resp = {
         "code": 200,
         "errorMsg": "请求成功",
         "data":data.content
         };

        setTimeout(function () {
          res.json(resp);
        }, 500);

  },

  'POST /api/product/delete': function (req, res, next) {
     var resp = {
       "code": 200,
       "errorMsg": "请求成功",
       "data":1
       };
    setTimeout(function () {
      res.json(resp);
    }, 500);
  },
}