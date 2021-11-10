function string_add(str="",dm=""){

    let sum=0;
    if(str.length==0){
        return 0;
    }else{
        let cm_sep;
        if(!isNaN(str)){
            return Number(str)
        }else{
            if(dm!=""){
                cm_sep=str.split(dm);
              }else{
                  cm_sep=str.split("")
              }
              for(let i=0;i<cm_sep.length;i++){
                  if(!isNaN(cm_sep[i])){
                      sum+=Number(cm_sep[i]);
                  }
                  
              }
              return sum;
        }
        
    }
}

module.exports=string_add