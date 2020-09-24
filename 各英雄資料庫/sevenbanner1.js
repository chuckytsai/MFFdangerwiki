// NAV設定
$(function() {
    $("#NAV").load("layout-navigator.html");
});

// 清除所有條件的按鈕設定
function clearFilter(clear) {

    if (clear == 0) {
        // 所有select都變成第一個option的第一個
        $('.selectButton').val('');
        $('a.heroIcon').hide();
        $('a.heroIcon.preset').show();

    }
};

var heroDatas = [

    {

        'class': 'heroIcon preset men combat humen justice leader',
        'url': './近戰英雄-美國隊長.html',
        'bgImg': './img/英雄ICON/近戰英雄-美國隊長/復仇者聯盟.jpg',
        'name': '美 國 隊 長',
        'gender': 'm',
        'display': '',
    },



    {

        'class': 'heroIcon preset no universal biological neutral',
        'url': './宇宙中立-毀滅者.html',
        'bgImg': './img/英雄ICON/宇宙中立-毀滅者/現代.jpg',
        'name': '毀 滅 者 ',
        'gender': 'm',
        'display': 'display:',
    },



];

// 進入網頁後讓選擇英雄條件歸初始值
$(document).ready(function() {
    clearFilter(0);

    // ==============================所有英雄id+class+url+bgimg+name+gender+dispasy====================

    //舊式寫法:
    // for (let index = 0; index < heroDatas.length; index++) {
    //     $('#Allhero').append('<a  class="' + heroDatas[index].class + '" href="' + heroDatas[index].url + '"style="' + heroDatas[index].display + '; text-decoration:none;background: url(' + heroDatas[index].bgImg + ');"><h1 id="hero' + heroDatas[index].gender + '-text" style="font-family:fantasy;">' + heroDatas[index].name + '</h1> </a>');
    // }

    for (let index = 0; index < heroDatas.length; index++) {
        var tagTemplage =
            '<a  class="{heroClass}" href="{heroUrl}" style="{heroStyleDisplay}; text-decoration: none; background: url({heroBackgroundImage});">' +
            '<h1 id="hero{heroGender}-text" style="font-family:fantasy;">{heroHeroName}</h1>' +
            '</a>';

        var appendTag = tagTemplage
            .replace('{heroClass}', heroDatas[index].class)
            .replace('{heroUrl}', heroDatas[index].url)
            .replace('{heroStyleDisplay}', heroDatas[index].display)
            .replace('{heroBackgroundImage}', heroDatas[index].bgImg)
            .replace('{heroGender}', heroDatas[index].gender)
            .replace('{heroHeroName}', heroDatas[index].name);

        $('#Allhero').append(appendTag);
    }
});