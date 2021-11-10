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