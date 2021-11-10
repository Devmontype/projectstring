function string_add(str=""){

    let sum=0;
    if(str.length==0){
        return 0;
    }else{
        let cm_sep=str.split("");
        for(let i=0;i<cm_sep.length;i++){
            if(!isNaN(cm_sep.charAt(i))){
                sum+=Number(cm_sep[i]);
            }
            
        }
        return sum;
    }
}

module.exports=string_add