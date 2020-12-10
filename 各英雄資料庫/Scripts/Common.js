function getQueryStringItem(itemName) {
    var url = location.href;
    if (url.indexOf('?') != -1) {
        var ary = url.split('?')[1].split('&');
        for (i = 0; i <= ary.length - 1; i++) {
            if (ary[i].split('=')[0] == itemName) {
                return ary[i].split('=')[1];
            }
        }
    }
    return "";
}

// 數字加上千分位
// ref: https://stackoverflow.com/a/2646441
function AddCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}