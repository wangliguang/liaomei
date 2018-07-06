
const type = Number(getValue('type'));

switch (type) {
  case 1: {
    location.href = './type/1/index.html'
  }
  case 2: {
    location.href = './type/2/index.html'
  }
}








function getValue(myKey){
	/*获取请求信息*/
 var info = location.search;
 /*去除？*/
 info = info.length > 0 ? info.substring(1) : " ";
 /*以&分割字符串*/
 var result1 = info.split("&");
 /*存储key和value的数组*/
 var key,value;
 var data = [];
 for(var i=0;i<result1.length;i++){
		 /*以=分割字符串*/
		 var result2 = result1[i].split("=");
		 key = result2[0];
		 value = result2[1];
		 data[key] = value;
 }
 return data[myKey];
}