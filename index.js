/*!
 * jn-each <https://github.com/jnxyx/jn-each>
 *
 * Copyright (c) 2016-2017, Yun Xiang Xu.
 * Licensed under the MIT License.
 */

module.exports = function jnEach(loopable, callback, self) {

    //保存追加参数
    var additionalArgs = Array.prototype.slice.call(arguments, 3);

    if (loopable) {
        //数组类型
        if (loopable.length === +loopable.length) {

            var i;
            for (i = 0; i < loopable.length; i++) {
                callback.apply(self, [loopable[i], i].concat(additionalArgs));
            }
        }
        //对象类型
        else {

            for (var item in loopable) {
                callback.apply(self, [loopable[item], item].concat(additionalArgs));
            }
        }
    }
}