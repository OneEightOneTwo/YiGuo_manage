let uniq=(array)=>{
    //数组去重封装
    var temp=[];//一个新的临时数组
    for(var i=0;i<array.length;i++){
        if(temp.indexOf(array[i])==-1){
            temp.push(array[i]);
        }
    }
    return temp;
}



module.exports = {
    uniq,
}
