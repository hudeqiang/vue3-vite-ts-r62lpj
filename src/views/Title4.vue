<template>
    
</template>
<script>
const arr1 = [{name: 'Facebook', age: 24}, {name: 'Github', age: 18}, {name: 'OpenAI', age: 18}];
const arr2 = [{name: 'Google', age: 24}, {name: 'Copilot', age: 20}, {name: 'John', age: 24}];
console.log(groupByAge(arr1,arr2))
function groupByAge(jsonArr, jsonArr2){
    let arr=Torepeat(jsonArr,jsonArr2)
    //console.log("Torepeat:",arr);
    let str= {};
    for (let i = 0; i < arr.length; i++) {
        if(!str[arr[i].age]){
            str[arr[i].age]=[];
        }
        str[arr[i].age].push(arr[i])
    } 
    return str;
}
function Torepeat(jsonArr, jsonArr2){
        //去重
    let jsonArrSet=Array.from(new Set([...arr1,...arr2]))
   
    for (let i = 0; i < jsonArrSet.length; i++) {
        for (let j = i+1; j < jsonArrSet.length; j++) 
        {
            if (jsonArrSet.length > 0) {
                if (jsonArrSet[i]["name"] == jsonArrSet[j]["name"]) {
                    jsonArrSet.splice(i, 1); 
                }
            }
        }
    } 

    //分组 排序
    return jsonArrSet.sort((x,y)=>{
        return x.age - y.age
    })
}


</script>