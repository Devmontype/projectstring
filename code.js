function string_add(str = "", dm = "") {

    let negative = []
    let sum = 0;
    if (str.length == 0) {
        return 0;
    } else {
        let cm_sep;
        if (!isNaN(str)) {
            return Number(str)
        } else {
            if (dm != "") {
                cm_sep = str.split(dm);
            } else {
                cm_sep = str.split("")
            }
            for (let i = 0; i < cm_sep.length; i++) {
                if (!isNaN(cm_sep[i])) {
                    let num = Number(cm_sep[i])
                    if (num < 0) {
                        negative.push(num)
                    } else {
                        sum += num;
                    }

                }else{
                    a_sep=cm_sep[i].split("")
                    for(let j=0;j<a_sep.length;j++){
                        if (!isNaN(a_sep[j])) {
                            let num2 = Number(a_sep[j])
                            if (num2 < 0) {
                                negative.push(num2)
                            } else {
                                sum += num2;
                            }
        
                        }
                    }
                }

            }
            if (negative.length > 0) {
                return `negatives not allowed : ${negative.join(",")}`;
            } else {
                return sum;
            }

        }

    }
}

module.exports = string_add