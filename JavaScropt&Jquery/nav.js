$(document).ready(function() {
    for (let index = 0; index < navbar.length; index++) {
        var tagTemplage =
            '<nav class="menu">' +
            '<a id="menubtn" class="toggle-nav" href="#">&#9776;</a>' +
            '<div class="menu-logo"><a href="https://chuckytsai.github.io/MFFdangerwiki/">首頁</a></div>' +
            '<ul id="menuUl" class="active">' +
            '<li class="current-active"></li>' +
            '<div class="liOption">' +
            '<li><a href="https://chuckytsai.github.io/MFFdangerwiki/news-banner1.html">最 新 改 版 消 息</a></li>' +
            '<li><a href="https://chuckytsai.github.io/MFFdangerwiki/news-banner2.html">最 新 速 報</a></li>' +
            '<li><a href="https://chuckytsai.github.io/MFFdangerwiki/news-banner3.html">活 動</a></li>' +
            '<li><a href="https://chuckytsai.github.io/MFFdangerwiki/各英雄資料庫/heroMenu.html">角 色</a></li>' +
            '<li><a href="https://chuckytsai.github.io/MFFdangerwiki/挑戰/sevenbanner2.html">挑 戰</a></li>' +
            '<li><a href="https://chuckytsai.github.io/MFFdangerwiki/神盾局/sevenbanner3.html">神 盾 局</a></li>' +
            '<li><a href="https://chuckytsai.github.io/MFFdangerwiki/任務/sevenbanner4.html">任 務</a></li>' +
            '<li><a href="https://chuckytsai.github.io/MFFdangerwiki/PVP模式/sevenbanner5.html">PVP 模 式</a></li>' +
            '<li><a href="https://chuckytsai.github.io/MFFdangerwiki/道具/sevenbanner6.html">道 具</a></li>' +
            '<li><a href="https://chuckytsai.github.io/MFFdangerwiki/組隊模式/sevenbanner7.html">組 隊 模 式</a></li>' +
            '</div></ul></nav>';

        var appendTag = tagTemplage
            .replace('{url}', navbar[index].url)
            .replace('{name}', navbar[index].name)
        $('#nav').append(appendTag);
    }
});

var navbar = [{
    'url': '',
    'name': '',
}, ]

let menubtn = document.getElementById('menubtn')
addEventListener('click', function(e) {
    $('#menuUl').toggleClass('active');
})

$('#menuUl li').click(function() {
    $(this).parent().find('li').each(function() {
        if ($(this).hasClass('current-active')) {
            $(this).toggleClass('current-active');
        }
    })
    $(this).toggleClass('current-active');
})