// Your code here

function mapToNegativize(arr){
  let arr1=[]
  for(let i=0;i<arr.length;i++){
    arr1[i]=arr[i]*-1
  }
  return arr1
}
 
 function mapToNoChange(arr){
   let arr2=[]
   for(let i=0;i<arr.length;i++){
     arr2[i]=arr[i]
   }
   return arr2
 }
 
 function mapToDouble(arr){
   let arr3=[]
   for(i=0;i<arr.length;i++){
     arr3[i]=arr[i]*2
   }
   return arr3
 }
 
 function mapToSquare(arr){
   let arr4=[]
   for(let i=0;i<arr.length;i++){
     arr4[i]=arr[i]*arr[i]
   }
   return arr4
 }