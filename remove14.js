/*
 * 实现一个函数，输入为一个整数（0<=数值<=13）的数组，将数组中所有两个数
 * 相加等于14的数字成对删除，求剩余数。
 * 
 * 来自朋友发的面试题。
 */

function remove14(array) {
    var map = {},
        result = [];
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (map.hasOwnProperty(value)) {
            map[value].qty++;
        }
        else {
            map[value] = {
                value: value,
                qty: 1
            };
        }
    }

    for (var i = 1; i < 7; i++) {
        if (map.hasOwnProperty(i) && map.hasOwnProperty(14 - i)) {
            map[i].qty--;
            map[14 - i].qty--;
        }
    }

    for (var i = 0; i < 14; i++) {
        if (map.hasOwnProperty(i)) {
            var o = map[i];
            if (o.qty > 0) {
                for (var j = 0; j < o.qty; j++) {
                    result.push(o.value);
                }
            }
        }
    }

    return result;
}
