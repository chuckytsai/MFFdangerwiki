// NAV設定
$(function() {
    $("#NAV").load("layout-navigator.html");
});



$(document).ready(function() {
    var heroID = "odin";
    var heroData = introductionData[heroID];
    var introductionSample =
        '<section>' +
        '<table  ID="introductionTr" border="4">' +
        '<tr>' + '<td id=introduction>' + '介 紹:' + '</td>' + '<td>' + '</td>' + '</tr>' +
        '<tr>' + '<td>實際姓名:</td>' + '<td>{heroName}</td></tr>' +
        '<tr>' + '<td>身高/體重:</td>' + '<td>{hw}</td> </tr>' +
        '<tr>' + '<td>種族:</td>' + '<td>{race}</td> </tr>' +
        '<tr>' + '<td>能力:</td>' + '<td>{ability}</td> </tr>' +
        '</table>' +
        '<table  ID="introductionTr" border="4">' + '<td> {introductionStroy} </td>' +
        '</table>'
    '</section>';

    var appendTag = introductionSample
        .replace('{introduction}', heroData.class)
        .replace('{heroName}', heroData.heroName)
        .replace('{hw}', heroData.hw)
        .replace('{race}', heroData.race)
        .replace('{ability}', heroData.ability)
        .replace('{introductionStroy}', heroData.introductionStroy);

    $('#' + heroID).append(appendTag);
});


var introductionData = {

    // 奧丁
    'odin': {
        'heroName': '奧丁.博爾森',
        'hw': '205.7cm/295kg',
        'race': '外星人 ',
        'ability': '指揮/;能量注入/',
        'introductionStroy': '身為最強大的北歐之神，數世紀以來眾神之父奧丁統領著阿斯嘉的九大界。索爾的父親奧丁所使用的[奧丁之力]令他擁有永恆的生命及接近無敵的力量。',
    },

    // 新星(山姆)
    'nova': {
        'heroName': '山姆.亞歷山大',
        'hw': '167.6cm/63.5kg',
        'race': '人類',
        'ability': '移形幻步/;能量注入/;',
        'introductionStroy': '追隨著父親的腳步而開始守護銀河，年少的山姆.亞歷山大加入了守護全銀河的新星戰隊。新星力量給予了他力量.速度.和飛行能力， 因此也獲得了人型火箭的稱號。',
    },
};