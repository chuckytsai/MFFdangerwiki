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
        'id': 'captainAmeric',
        'class': 'heroIcon preset men combat humen justice leader',
        'url': './近戰英雄-美國隊長.html',
        'bgImg': './img/英雄ICON/近戰英雄-美國隊長/復仇者聯盟.jpg',
        'name': '美 國 隊 長',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'captainAmeric:sw2099',
        'class': 'heroIcon women combat humen justice leader',
        'url': './近戰英雄-美國隊長.html?id=skin3',
        'bgImg': './img/英雄ICON/近戰英雄-美國隊長/秘密戰爭-2099.jpg ',
        'name': '美國隊長: 秘密戰爭2099 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'captainAmeric:hydra',
        'class': 'heroIcon men blast humen villain leader',
        'url': './近戰英雄-美國隊長.html?id=skin11',
        'bgImg': './img/英雄ICON/近戰英雄-美國隊長/九頭蛇至尊.jpg ',
        'name': '美國隊長: 九頭蛇至尊 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'blackpanther',
        'class': 'heroIcon preset men combat humen justice leader',
        'url': './近戰英雄-黑豹.html',
        'bgImg': './img/英雄ICON/近戰英雄-黑豹/現代.jpg',
        'name': '黑 豹 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'hulk',
        'class': 'heroIcon preset men combat humen justice gamma',
        'url': './近戰英雄-浩克.html',
        'bgImg': './img/英雄ICON/近戰英雄-浩克/復仇者聯盟.jpg',
        'name': '浩 克 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'hulk:sw',
        'class': 'heroIcon men combat humen villain gamma',
        'url': './近戰英雄-浩克.html?id=skin2',
        'bgImg': './img/英雄ICON/近戰英雄-浩克/秘密戰爭-不完美的未來.jpg ',
        'name': '浩克: 秘密戰爭-不完美的未來',
        'gender': 'm',
        'display': 'display:none;',
    },

    {
        'id': 'hulk:immortal',
        'class': 'heroIcon men combat humen villain gamma',
        'url': './近戰英雄-浩克.html?id=skin7',
        'bgImg': './img/英雄ICON/近戰英雄-浩克/不朽浩克.jpg ',
        'name': '浩克-不朽浩克 ',
        'gender': 'm',
        'display': 'display:none;',
    },

    {
        'id': 'thing',
        'class': 'heroIcon preset men combat humen justice f4',
        'url': './近戰英雄-石頭人.html',
        'bgImg': './img/英雄ICON/近戰英雄-石頭人/現代.jpg',
        'name': '石 頭 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'beast',
        'class': 'heroIcon preset men combat xmen justice',
        'url': './近戰英雄-野獸.html',
        'bgImg': './img/英雄ICON/近戰英雄-野獸/經典.jpg',
        'name': '野 獸 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'beast:apocalypse',
        'class': 'heroIcon men combat xmen villain',
        'url': './近戰英雄-野獸.html?id=skin2',
        'bgImg': './img/英雄ICON/近戰英雄-野獸/天啟紀元.jpg ',
        'name': '野獸-天啟紀元 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'colossus',
        'class': 'heroIcon preset men combat xmen justice',
        'url': './近戰英雄-鋼人.html',
        'bgImg': './img/英雄ICON/近戰英雄-鋼人/現代.jpg',
        'name': '鋼 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'colossus:phoenix',
        'class': 'heroIcon men combat xmen villain phoenix',
        'url': './近戰英雄-鋼人.html?id=skin3',
        'bgImg': './img/英雄ICON/近戰英雄-鋼人/鳳凰5人組.jpg ',
        'name': '鋼人-鳳凰5人組 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'giantman',
        'class': 'heroIcon preset men combat humen justice',
        'url': './近戰英雄-巨人.html',
        'bgImg': './img/英雄ICON/近戰英雄-巨人/現代.jpg',
        'name': '巨 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'giantman:ultron',
        'class': 'heroIcon men universal humen villain',
        'url': './近戰英雄-巨人.html?id=skin3',
        'bgImg': './img/英雄ICON/近戰英雄-巨人/奧創皮姆.jpg ',
        'name': '巨人-皮姆奧創 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'shehulk',
        'class': 'heroIcon preset women combat humen justice gamma',
        'url': './近戰英雄-女浩克.html',
        'bgImg': './img/英雄ICON/近戰英雄-女浩克/秘密戰爭-A-force.jpg',
        'name': '女 浩 克 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'shehulk:f4',
        'class': 'heroIcon women combat humen justice gamma f4',
        'url': './近戰英雄-女浩克.html?id=skin3',
        'bgImg': './img/英雄ICON/近戰英雄-女浩克/驚奇4超人.jpg ',
        'name': '女浩克-驚奇4超人 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'hulking',
        'class': 'heroIcon preset men combat et justice',
        'url': './近戰英雄-小浩克.html',
        'bgImg': './img/英雄ICON/近戰英雄-小浩克/新復仇者.jpg',
        'name': '小 浩 克 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'wolverine',
        'class': 'heroIcon preset men combat xmen justice leader',
        'url': './近戰英雄-金鋼狼.html',
        'bgImg': './img/英雄ICON/近戰英雄-金鋼狼/經典.jpg',
        'name': '金 鋼 狼 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'americaChavez',
        'class': 'heroIcon preset women combat humen justice',
        'url': '近戰英雄-阿美利卡.html',
        'bgImg': './img/英雄ICON/近戰英雄-阿美利卡/終極戰隊.jpg',
        'name': '阿 美 利 卡 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'agentVenom',
        'class': 'heroIcon preset men combat humen justice',
        'url': './近戰英雄-猛毒特工.html',
        'bgImg': './img/英雄ICON/近戰英雄-猛毒特工/全新全異.jpg',
        'name': '猛 毒 特 工 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'misterFantastic',
        'class': 'heroIcon preset men combat humen justice leader f4',
        'url': './近戰英雄-驚奇先生.html',
        'bgImg': './img/英雄ICON/近戰英雄-驚奇先生/現代.jpg',
        'name': '驚 奇 先 生 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'hulkbuster',
        'class': 'heroIcon preset no combat biological justice mechanical',
        'url': './近戰英雄-反浩克裝甲.html',
        'bgImg': './img/英雄ICON/近戰英雄-反浩克裝甲/復仇者聯盟-奧創紀元.jpg',
        'name': '反 浩 克 裝 甲 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'warpath',
        'class': 'heroIcon preset men combat xmen justice',
        'url': './近戰英雄-戰跡.html',
        'bgImg': './img/英雄ICON/近戰英雄-戰跡/X特攻隊.jpg',
        'name': '戰 跡 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'whiteTiger',
        'class': 'heroIcon preset women combat humen justice',
        'url': './近戰英雄-白虎.html',
        'bgImg': './img/英雄ICON/近戰英雄-白虎/新復仇者.jpg',
        'name': '白 虎 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'namor',
        'class': 'heroIcon preset men combat xmen justice leader',
        'url': './近戰英雄-納摩.html',
        'bgImg': './img/英雄ICON/近戰英雄-納摩/經典.jpg',
        'name': '納 摩 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'namor:phoenix',
        'class': 'heroIcon men combat xmen villain leader phoenix',
        'url': './近戰英雄-納摩.html?id=skin2',
        'bgImg': './img/英雄ICON/近戰英雄-納摩/鳳凰5人組.jpg ',
        'name': '納摩-鳳凰5人組 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'shangchi',
        'class': 'heroIcon preset men combat humen justice leader',
        'url': './近戰英雄-上氣.html',
        'bgImg': './img/英雄ICON/近戰英雄-上氣/現代.jpg',
        'name': '上 氣 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'Volstagg',
        'class': 'heroIcon preset men combat humen et justice',
        'url': './近戰英雄-佛格斯泰格.html',
        'bgImg': './img/英雄ICON/近戰英雄-佛勒斯泰格/現代.jpg',
        'name': '佛 勒 斯 泰 格 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'blade',
        'class': 'heroIcon preset men combat humen justice arms',
        'url': './近戰英雄-刀鋒戰士.html',
        'bgImg': './img/英雄ICON/近戰英雄-刀鋒戰士/現代.jpg',
        'name': '刀 鋒 戰 士 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'punisher',
        'class': 'heroIcon preset men combat humen justice arms leader',
        'url': './近戰英雄-制裁者.html',
        'bgImg': './img/英雄ICON/近戰英雄-制裁者/現代.jpg',
        'name': '制 裁 者 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'punisher:gr',
        'class': 'heroIcon men universal humen villain arms leader',
        'url': './近戰英雄-制裁者.html?id=skin6',
        'bgImg': './img/英雄ICON/近戰英雄-制裁者/宇宙惡靈戰警.jpg ',
        'name': '制裁者-宇宙惡靈戰警 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'swordMaster',
        'class': 'heroIcon preset men combat humen justice arms leader',
        'url': './近戰英雄-劍仙.html',
        'bgImg': './img/英雄ICON/近戰英雄-劍仙/現代.jpg',
        'name': '劍 仙 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'lukeCage',
        'class': 'heroIcon preset men combat humen justice arms leader',
        'url': './近戰英雄-力量人.html',
        'bgImg': './img/英雄ICON/近戰英雄-力量人/現代.jpg',
        'name': '力 量 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'sif',
        'class': 'heroIcon preset women combat et justice',
        'url': './近戰英雄-希芙.html',
        'bgImg': './img/英雄ICON/近戰英雄-希芙/神盾局特工.jpg',
        'name': '希 芙 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'crescent',
        'class': 'heroIcon preset women combat humen justice leader',
        'url': './近戰英雄-弦月神女.html',
        'bgImg': './img/英雄ICON/近戰英雄-弦月神女/現代.jpg',
        'name': '弦 月 神 女 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'hogun',
        'class': 'heroIcon preset men combat et justice',
        'url': './近戰英雄-後剛.html',
        'bgImg': './img/英雄ICON/近戰英雄-後剛/現代.jpg',
        'name': '後 剛 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'drax',
        'class': 'heroIcon preset men combat et justice',
        'url': './近戰英雄-德克斯.html',
        'bgImg': './img/英雄ICON/近戰英雄-德克斯/星際異攻隊.jpg',
        'name': '德 克 斯 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'moonKight',
        'class': 'heroIcon preset men combat humen justice arms leader',
        'url': './近戰英雄-月光騎士.html',
        'bgImg': './img/英雄ICON/近戰英雄-月光騎士/現代.jpg',
        'name': '月 光 騎 士 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'gorgon',
        'class': 'heroIcon preset men combat inhumans justice',
        'url': './近戰英雄-戈爾工.html',
        'bgImg': './img/英雄ICON/近戰英雄-戈爾工/皇者之戰.jpg',
        'name': '戈 爾 工 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'groot',
        'class': 'heroIcon preset men combat et justice',
        'url': './近戰英雄-古魯特.html',
        'bgImg': './img/英雄ICON/近戰英雄-古魯特/星際異攻隊.jpg',
        'name': '古 魯 特 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'groot:sw',
        'class': 'heroIcon men universal et justice',
        'url': './近戰英雄-古魯特.html?id=skin2',
        'bgImg': './img/英雄ICON/近戰英雄-古魯特/秘密戰爭-索爾.jpg ',
        'name': '古魯特: 秘密戰爭-索爾 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'groot:gx2',
        'class': 'heroIcon men speed et justice',
        'url': './近戰英雄-古魯特.html?id=skin3',
        'bgImg': './img/英雄ICON/近戰英雄-古魯特/星際異攻隊2.jpg ',
        'name': '古魯特: 星際異攻隊2 ',
        'gender': 'm',
        'display': 'display:none',
    },


    {
        'id': 'goliath',
        'class': 'heroIcon preset men combat humans justice',
        'url': './近戰英雄-歌利亞.html',
        'bgImg': './img/英雄ICON/近戰英雄-歌利亞/經典.jpg',
        'name': '歌 利 亞 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'deathlok',
        'class': 'heroIcon preset men combat humans justice 機械',
        'url': './近戰英雄-死亡戰士.html',
        'bgImg': './img/英雄ICON/近戰英雄-死亡戰士/神盾局特工.jpg',
        'name': '死 亡 戰 士 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'deathlok:modern',
        'class': 'heroIcon men blast humans justice 機械',
        'url': './近戰英雄-死亡戰士.html?id=skin2',
        'bgImg': './img/英雄ICON/近戰英雄-死亡戰士/現代.jpg ',
        'name': '死亡戰士-現代 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'hulkCho',
        'class': 'heroIcon preset men combat humans justice 伽碼射線',
        'url': './近戰英雄-浩克(阿爾迪斯).html',
        'bgImg': './img/英雄ICON/近戰英雄-浩克阿爾迪斯/完全嶄新的浩克.jpg',
        'name': '浩 克(阿爾迪斯． 趙)',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'jessicaJones',
        'class': 'heroIcon preset women combat humans justice',
        'url': './近戰英雄-潔西卡瓊斯.html',
        'bgImg': './img/英雄ICON/近戰英雄-潔西卡瓊斯/現代.jpg',
        'name': '潔 西 卡 瓊 斯 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'warwolf',
        'class': 'heroIcon preset men combat humans justice',
        'url': './近戰英雄-狼人.html',
        'bgImg': './img/英雄ICON/近戰英雄-狼人/神盾局咆嘯突擊隊.jpg',
        'name': '狼 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'valkyrie',
        'class': 'heroIcon preset women combat et justice',
        'url': './近戰英雄-瓦爾基麗.html',
        'bgImg': './img/英雄ICON/近戰英雄-瓦爾基麗/雷神索爾-諸神黃昏.jpg',
        'name': '瓦 爾 基 麗 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'ironfist',
        'class': 'heroIcon preset men combat humans justice',
        'url': './近戰英雄-鐵拳俠.html',
        'bgImg': './img/英雄ICON/近戰英雄-鐵拳俠/經典.jpg',
        'name': '鐵 拳 俠 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'kamalaKhan',
        'class': 'heroIcon preset women combat inhumans justice',
        'url': './近戰英雄-驚奇女士.html',
        'bgImg': './img/英雄ICON/近戰英雄-驚奇女士/全新全異.jpg',
        'name': '驚 奇 女 士 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'kamalaKhan:karachi',
        'class': 'heroIcon women speed inhumans justice',
        'url': './近戰英雄-驚奇女士.html?id=skin2',
        'bgImg': './img/英雄ICON/近戰英雄-驚奇女士/喀拉蚩服裝.jpg ',
        'name': '驚奇女士: 喀拉蚩服裝 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'gorillaman',
        'class': 'heroIcon preset men combat humans justice arms',
        'url': './近戰英雄-猩猩人.html',
        'bgImg': './img/英雄ICON/近戰英雄-猩猩人/現代.jpg',
        'name': '猩 猩 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'warTiger',
        'class': 'heroIcon preset men combat humans justice',
        'url': './近戰英雄-戰虎.html',
        'bgImg': './img/英雄ICON/近戰英雄-戰虎/現代.jpg',
        'name': '戰 虎 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'gladiator',
        'class': 'heroIcon preset men combat et justice leader',
        'url': './近戰英雄-角鬥士.html',
        'bgImg': './img/英雄ICON/近戰英雄-角鬥士/現代.jpg',
        'name': '角 鬥 士 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'redShehulk',
        'class': 'heroIcon preset women combat humen justice gamma fire',
        'url': './近戰英雄-女紅浩克.html',
        'bgImg': './img/英雄ICON/近戰英雄-女紅浩克/現代.jpg',
        'name': '女 紅 浩 克 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'nebula',
        'class': 'heroIcon preset women combat et villain',
        'url': './近戰反派-涅布拉.html',
        'bgImg': './img/英雄ICON/近戰反派-涅布拉/星際特攻隊.jpg',
        'name': '涅 布 拉 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'nebula:eg',
        'class': 'heroIcon women combat et justice',
        'url': './近戰反派-涅布拉.html?id=skin3',
        'bgImg': './img/英雄ICON/近戰反派-涅布拉/復仇者聯盟-終局之戰.jpg ',
        'name': '涅布拉: 復仇者聯盟-終局之戰 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'nebula:team',
        'class': 'heroIcon women combat et justice',
        'url': './近戰反派-涅布拉.html?id=skin4',
        'bgImg': './img/英雄ICON/近戰反派-涅布拉/復仇者聯盟-終局之戰.jpg ',
        'name': '涅布拉-復仇者隊服 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'redHulk',
        'class': 'heroIcon preset men combat humen villain gamma fire',
        'url': './近戰反派-紅浩克.html',
        'bgImg': './img/英雄ICON/近戰反派-紅浩克/現代.jpg',
        'name': '紅 浩 克 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'redHulk:vengeance',
        'class': 'heroIcon men universal humen justice gamma fire',
        'url': './近戰反派-紅浩克.html?id=skin3',
        'bgImg': './img/英雄ICON/近戰反派-紅浩克/復仇共生體.jpg ',
        'name': '紅浩克-復仇共生體 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'titania',
        'class': 'heroIcon preset women combat humen villain',
        'url': './近戰反派-泰坦妮亞.html',
        'bgImg': './img/英雄ICON/近戰反派-泰坦妮亞/現代.jpg',
        'name': '泰 坦 妮 亞 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'apocalypse',
        'class': 'heroIcon preset men combat xmen villain',
        'url': './近戰反派-天啟.html',
        'bgImg': './img/英雄ICON/近戰反派-天啟/天啟紀元.jpg',
        'name': '天 啟 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'doctorOctopus',
        'class': 'heroIcon preset men combat humen villain mechanical six6',
        'url': './近戰反派-八爪博士.html',
        'bgImg': './img/英雄ICON/近戰反派-八爪博士/經典.jpg',
        'name': '八 爪 博 士 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'doctorOctopus:spider',
        'class': 'heroIcon men combat humen justice mechanical six6 spider',
        'url': './近戰反派-八爪博士.html?id=skin2',
        'bgImg': './img/英雄ICON/近戰反派-八爪博士/究極蜘蛛人.jpg',
        'name': '八爪博士-究極蜘蛛人 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'doctorOctopus:superior',
        'class': 'heroIcon men speed humen villain mechanical six6',
        'url': './近戰反派-八爪博士.html?id=skin3',
        'bgImg': './img/英雄ICON/近戰反派-八爪博士/究極八爪.jpg',
        'name': '八爪博士-究極八爪 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'kingpin',
        'class': 'heroIcon preset men combat humen villain',
        'url': './近戰反派-金霸王.html',
        'bgImg': './img/英雄ICON/近戰反派-金霸王/現代.jpg',
        'name': '金 霸 王 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'kingpin:sw',
        'class': 'heroIcon men blast humen villain',
        'url': './近戰反派-金霸王.html?id=skin3',
        'bgImg': './img/英雄ICON/近戰反派-金霸王/秘密戰爭-裝甲戰爭.jpg',
        'name': '金霸王: 秘密戰爭-裝甲戰爭 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'venom',
        'class': 'heroIcon preset men combat humen villain',
        'url': './近戰反派-猛毒.html',
        'bgImg': './img/英雄ICON/近戰反派-猛毒/經典.jpg',
        'name': '猛 毒 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'antiVenom',
        'class': 'heroIcon men combat humen justice',
        'url': './近戰反派-猛毒.html?id=skin3',
        'bgImg': './img/英雄ICON/近戰反派-猛毒/反猛毒.jpg',
        'name': '猛毒-反猛毒 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'sandman',
        'class': 'heroIcon preset men combat humen villain six6',
        'url': './近戰反派-沙人.html',
        'bgImg': './img/英雄ICON/近戰反派-沙人/經典.jpg',
        'name': '沙 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'lizard',
        'class': 'heroIcon preset men combat humen villain',
        'url': './近戰反派-蜥蜴人.html',
        'bgImg': './img/英雄ICON/近戰反派-蜥蜴人/經典.jpg',
        'name': '蜥 蜴 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'carnage',
        'class': 'heroIcon preset men combat humen villain',
        'url': './近戰反派-屠殺.html',
        'bgImg': './img/英雄ICON/近戰反派-屠殺/全新全異.jpg',
        'name': '屠 殺 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'bullseye',
        'class': 'heroIcon preset men combat humen villain',
        'url': './近戰反派-靶眼.html',
        'bgImg': './img/英雄ICON/近戰反派-靶眼/現代.jpg',
        'name': '靶 眼 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'sabretooth',
        'class': 'heroIcon preset men combat xmen villain',
        'url': './近戰反派-劍齒虎.html',
        'bgImg': './img/英雄ICON/近戰反派-劍齒虎/變種人兄弟會.jpg',
        'name': '劍 齒 虎 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'crossBones',
        'class': 'heroIcon preset men combat humen villain',
        'url': './近戰反派-十字骨.html',
        'bgImg': './img/英雄ICON/近戰反派-十字骨/美國隊長-英雄內戰.jpg',
        'name': '十 字 骨 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'skurge',
        'class': 'heroIcon preset men combat et villain',
        'url': './近戰反派-史泰奇.html',
        'bgImg': './img/英雄ICON/近戰反派-史泰奇/雷神索爾-諸神黃昏.jpg',
        'name': '史 泰 奇 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'absorbingman',
        'class': 'heroIcon preset men combat humen villain',
        'url': './近戰反派-吸收人.html',
        'bgImg': './img/英雄ICON/近戰反派-吸收人/現代.jpg',
        'name': '吸 收 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'ulik',
        'class': 'heroIcon preset men combat et villain',
        'url': './近戰反派-烏里克.html',
        'bgImg': './img/英雄ICON/近戰反派-烏里克/現代.jpg',
        'name': '烏 里 克 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'moltenman',
        'class': 'heroIcon preset men combat humen villain fire',
        'url': './近戰反派-熔岩人.html',
        'bgImg': './img//英雄ICON/近戰反派-熔岩人/蜘蛛人-離家日.jpg',
        'name': '熔 岩 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'rhino',
        'class': 'heroIcon preset men combat humen villain',
        'url': './近戰反派-犀牛人.html',
        'bgImg': './img//英雄ICON/近戰反派-犀牛人/經典.jpg',
        'name': '犀 牛 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'minnerva',
        'class': 'heroIcon preset women combat et villain',
        'url': './近戰反派-米勒娃.html',
        'bgImg': './img/英雄ICON/近戰反派-米勒娃/現代.jpg',
        'name': '米 勒 娃 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'juggernaut',
        'class': 'heroIcon preset men combat xmen villain',
        'url': './近戰反派-紅坦克.html',
        'bgImg': './img//英雄ICON/近戰反派-紅坦克/變種人兄弟會.jpg',
        'name': '紅 坦 克 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'killmonger',
        'class': 'heroIcon preset men combat humen villain',
        'url': './近戰反派-奇爾蒙格.html',
        'bgImg': './img//英雄ICON/近戰反派-奇爾蒙格/經典.jpg',
        'name': '奇 爾 蒙 格 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'redGuardian',
        'class': 'heroIcon preset men combat humen villain',
        'url': './近戰反派-紅色守衛者.html',
        'bgImg': './img//英雄ICON/近戰反派-紅色守衛者/現代.jpg',
        'name': '紅 色 守 衛 者 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'redGuardian:bw',
        'class': 'heroIcon men combat humen justice',
        'url': './近戰反派-紅色守衛者.html?id=skin2',
        'bgImg': './img//英雄ICON/近戰反派-紅色守衛者/漫威黑寡婦.jpg',
        'name': '紅色守衛者-漫威黑寡婦 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'taskmaster',
        'class': 'heroIcon preset men combat humen villain arms',
        'url': './近戰反派-模仿大師.html',
        'bgImg': './img/英雄ICON/近戰反派-模仿大師/現代.jpg',
        'name': '模 仿 大 師 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'abomination',
        'class': 'heroIcon preset men combat humen villain gamma',
        'url': './近戰反派-惡形怪.html',
        'bgImg': './img/英雄ICON/近戰反派-惡型怪/現代.jpg',
        'name': '惡 形 怪 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'morbius',
        'class': 'heroIcon preset men combat humen villain',
        'url': './近戰反派-魔比斯.html',
        'bgImg': './img//英雄ICON/近戰反派-魔比斯/現代.jpg',
        'name': '魔 比 斯 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'ironman',
        'class': 'heroIcon preset men blast humen justice mechanical',
        'url': './爆破英雄-鋼鐵人.html',
        'bgImg': './img/英雄ICON/爆破英雄-鋼鐵人/經典.jpg',
        'name': '鋼 鐵 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'warMachine',
        'class': 'heroIcon preset men blast humen justice mechanical leader',
        'url': './爆破英雄-戰爭機器.html',
        'bgImg': './img/英雄ICON/爆破英雄-戰爭機器/現代.jpg',
        'name': '戰 爭 機 器 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'doctorStrange',
        'class': 'heroIcon preset men blast humen justice',
        'url': './爆破英雄-奇異博士.html',
        'bgImg': './img/英雄ICON/爆破英雄-奇異博士/全新全異.jpg',
        'name': '奇 異 博 士 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'negasonicTeenageWarhead',
        'class': 'heroIcon preset women blast xmen justice',
        'url': './爆破英雄-青少年彈頭.html',
        'bgImg': './img/英雄ICON/爆破英雄-青少女彈頭/現代.jpg',
        'name': '青 少 女 彈 頭 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'cable',
        'class': 'heroIcon preset men blast xmen justice arms',
        'url': './爆破英雄-機堡.html',
        'bgImg': './img/英雄ICON/爆破英雄-機堡/現代.jpg',
        'name': '機 堡 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'cyclops',
        'class': 'heroIcon preset men blast xmen justice',
        'url': './爆破英雄-獨眼龍.html',
        'bgImg': './img/英雄ICON/爆破英雄-獨眼龍/經典.jpg',
        'name': '獨 眼 龍 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'cyclops:apocalypse',
        'class': 'heroIcon men blast xmen villain',
        'url': './爆破英雄-獨眼龍.html?id=skin2',
        'bgImg': './img/英雄ICON/爆破英雄-獨眼龍/天啟紀元.jpg ',
        'name': '獨眼龍-天啟紀元 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'cyclops: phoenix',
        'class': 'heroIcon men blast xmen villain phoenix',
        'url': './爆破英雄-獨眼龍.html?id=skin4',
        'bgImg': './img/英雄ICON/爆破英雄-獨眼龍/鳳凰5人組.jpg ',
        'name': '獨眼龍-鳳凰5人組 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'jeanGrey',
        'class': 'heroIcon preset women blast xmen justice phoenix spirit',
        'url': './爆破英雄-琴葛雷.html',
        'bgImg': './img/英雄ICON/爆破英雄-琴葛雷/鳳凰.jpg',
        'name': '琴 葛 雷 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'jeanGrer:msMarvel',
        'class': 'heroIcon women universal xmen justice phoenix spirit',
        'url': './爆破英雄-琴葛雷.html?id=skin3 ',
        'bgImg': './img/英雄ICON/爆破英雄-琴葛雷/驚奇少女.jpg ',
        'name': '琴葛雷-驚奇少女 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'sharonRogers',
        'class': 'heroIcon preset women blast humen justice leader',
        'url': '爆破英雄-雪倫羅傑斯.html',
        'bgImg': './img/英雄ICON/爆破英雄-雪倫羅傑斯/美國隊長75周年紀念.jpg',
        'name': '雪 倫． 羅 傑 斯 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'ancientOne',
        'class': 'heroIcon preset men blast humen justice leader',
        'url': './爆破英雄-上古尊者.html',
        'bgImg': './img/英雄ICON/爆破英雄-上古尊者/現代.jpg',
        'name': '上 古 尊 者 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'ancientOne:ds',
        'class': 'heroIcon women blast humen justice leader',
        'url': './爆破英雄-上古尊者.html?id=skin4',
        'bgImg': './img/英雄ICON/爆破英雄-上古尊者/奇異博士.jpg ',
        'name': '上古尊者-奇異博士 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'iceman',
        'class': 'heroIcon preset men blast xmen justice',
        'url': './爆破英雄-冰人.html',
        'bgImg': './img/英雄ICON/爆破英雄-冰人/現代.jpg',
        'name': '冰 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'weaponHex',
        'class': 'heroIcon preset women blast xmen justice',
        'url': './爆破英雄-咒術武器.html',
        'bgImg': './img/英雄ICON/爆破英雄-咒術武器/無限融合.jpg',
        'name': '咒 術 武 器 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'infernd',
        'class': 'heroIcon preset men blast inhumen justice fire',
        'url': './爆破英雄-地獄火.html',
        'bgImg': './img/英雄ICON/爆破英雄-地獄火/全新全異.jpg',
        'name': '地 獄 火 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'wiccan',
        'class': 'heroIcon preset men blast humen justice',
        'url': './爆破英雄-巫術.html',
        'bgImg': './img/英雄ICON/爆破英雄-巫術/新復仇者.jpg',
        'name': '巫 術 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'vision',
        'class': 'heroIcon preset men blast biological justice',
        'url': './爆破英雄-幻視.html',
        'bgImg': './img/英雄ICON/爆破英雄-幻視/現代.jpg',
        'name': '幻 視 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'vision:ua',
        'class': 'heroIcon men universal biological justice',
        'url': './爆破英雄-幻視.html?id=skin2 "  display: n',
        'bgImg': './img/英雄ICON/爆破英雄-幻視/復仇者聯盟-奧創紀元.jpg ',
        'name': '幻視: 復仇者聯盟-奧創紀元 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'rescue',
        'class': 'heroIcon preset women blast humen justice mechanical leader',
        'url': './爆破英雄-救援.html',
        'bgImg': './img/英雄ICON/爆破英雄-救援/終局之戰.jpg',
        'name': '救 援 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'starLord',
        'class': 'heroIcon preset men blast humen justice arms',
        'url': './爆破英雄-星爵.html',
        'bgImg': './img/英雄ICON/爆破英雄-星爵/星際特攻隊.jpg',
        'name': '星 爵 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'storm',
        'class': 'heroIcon preset women blast xmen justice',
        'url': './爆破英雄-暴風女.html',
        'bgImg': './img/英雄ICON/爆破英雄-暴風女/現代.jpg',
        'name': '暴 風 女 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'moonGirl',
        'class': 'heroIcon preset women blast inhumans justice arms leader',
        'url': './爆破英雄-月亮女孩.html',
        'bgImg': './img/英雄ICON/爆破英雄-月亮女孩/Marvel.jpg',
        'name': '月 亮 女 孩 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'lincolnCampbell',
        'class': 'heroIcon preset men blast inhumans justice',
        'url': './爆破英雄-林肯坎貝爾.html',
        'bgImg': './img/英雄ICON/爆破英雄-林肯坎貝爾/神盾局特工.jpg',
        'name': '林 肯． 坎 貝 爾 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'sisterGrimm',
        'class': 'heroIcon preset women blast humans justice',
        'url': './爆破英雄-格林姊妹.html',
        'bgImg': './img/英雄ICON/爆破英雄-格林姊妹/秘密戰爭A-Force.jpg',
        'name': '格 林 姊 妹 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'songbird',
        'class': 'heroIcon preset women blast humans justice',
        'url': './爆破英雄-歌姬.html',
        'bgImg': './img/英雄ICON/爆破英雄-歌姬/新復仇者.jpg',
        'name': '歌 姬 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'kidOmega',
        'class': 'heroIcon preset men blast xmen justice phoenix',
        'url': './爆破英雄-奧米伽小子.html.html',
        'bgImg': './img/英雄ICON/爆破英雄-奧米加小子/現代.jpg',
        'name': '奧 米 伽 小 子 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'crystal',
        'class': 'heroIcon preset women blast inhumans justice',
        'url': './爆破英雄-水晶.html',
        'bgImg': './img/英雄ICON/爆破英雄-水晶/全新全異.jpg',
        'name': '水 晶 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'crystal:f4',
        'class': 'heroIcon women blast inhumans justice f4',
        'url': './爆破英雄-水晶.html?id=skin3',
        'bgImg': './img/英雄ICON/爆破英雄-水晶/驚奇四超人.jpg ',
        'name': '水晶: 驚奇4超人 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'rocketRaccoon',
        'class': 'heroIcon preset men blast et justice arms',
        'url': './爆破英雄-火箭浣熊.html',
        'bgImg': './img/英雄ICON/爆破英雄-火箭浣熊/星際異功隊.jpg',
        'name': '火 箭 浣 熊 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'rachelSummers',
        'class': 'heroIcon preset women blast xmen justice phoenix',
        'url': './爆破英雄-瑞秋桑瑪斯.html',
        'bgImg': './img/英雄ICON/爆破英雄-瑞秋桑瑪斯/現代.jpg',
        'name': '瑞 秋． 桑 瑪 斯 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'bishop',
        'class': 'heroIcon preset men blast xmen justice',
        'url': './爆破英雄-畢曉普.html',
        'bgImg': './img/英雄ICON/爆破英雄-畢曉普/解散.jpg',
        'name': '畢 曉 普 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'jubilee',
        'class': 'heroIcon preset women blast xmen justice',
        'url': './爆破英雄-白光花火.html',
        'bgImg': './img/英雄ICON/爆破英雄-白光花火/經典.jpg',
        'name': '白 光 花 火 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'magik',
        'class': 'heroIcon preset women blast xmen justice',
        'url': './爆破英雄-秘客.html',
        'bgImg': './img/英雄ICON/爆破英雄-秘客/經典.jpg',
        'name': '秘 客 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'magik:phoenix',
        'class': 'heroIcon women blast xmen villain phoenix',
        'url': './爆破英雄-秘客.html?id=skin2',
        'bgImg': './img/英雄ICON/爆破英雄-秘客/鳳凰5人組.jpg ',
        'name': '秘客: 鳳凰5人組 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'scarletWitch',
        'class': 'heroIcon preset women blast xmen justiec',
        'url': './爆破英雄-緋紅女巫.html',
        'bgImg': './img/英雄ICON/爆破英雄-緋紅女巫/經典.jpg ',
        'display': 'display:',
        'name': '緋 紅 女 巫 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'emmaFrost',
        'class': 'heroIcon preset women blast xmen justice spirit',
        'url': './爆破英雄-艾瑪佛斯特.html',
        'bgImg': './img/英雄ICON/爆破英雄-艾瑪佛斯特/現代.jpg',
        'name': '艾 瑪． 佛 斯 特 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'emmaFrost:phoenix',
        'class': 'heroIcon women blast xmen villain spirit phoenix',
        'url': './爆破英雄-艾瑪佛斯特.html?id=skin3',
        'bgImg': './img/英雄ICON/爆破英雄-艾瑪佛斯特/鳳凰5人組.jpg ',
        'name': '艾瑪佛斯特-鳳凰5人組 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': '',
        'class': 'heroIcon preset men blast humans justice',
        'url': './爆破英雄-菲爾考森.html',
        'bgImg': './img/英雄ICON/爆破英雄-菲爾考森/神盾局特工.jpg',
        'name': '菲 爾． 考 森 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'philCoulson',
        'class': 'heroIcon preset women blast et justice',
        'url': './爆破英雄-螳螂女.html',
        'bgImg': './img/英雄ICON/爆破英雄-螳螂女/星際異攻隊2.jpg',
        'name': '螳 螂 女 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'adamWarlock',
        'class': 'heroIcon preset women blast biological justice',
        'url': './爆破英雄-術士亞當.html',
        'bgImg': './img/英雄ICON/爆破英雄-術士亞當/現代.jpg',
        'name': '術 士 亞 當 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'gambit',
        'class': 'heroIcon preset men blast xmen justice',
        'url': './爆破英雄-金牌手.html',
        'bgImg': './img/英雄ICON/爆破英雄-金牌手/現代.jpg',
        'name': '金 牌 手 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'ironHeart',
        'class': 'heroIcon preset women blast humen justice mechanical arms',
        'url': './爆破英雄-鋼鐵心.html',
        'bgImg': './img/英雄ICON/爆破英雄-鋼鐵心/Marvel!.jpg',
        'name': '鋼 鐵 心 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'invisobleWoman',
        'class': 'heroIcon preset women blast humans justice f4',
        'url': './爆破英雄-隱形女.html',
        'bgImg': './img/英雄ICON/爆破英雄-隱形女/現代.jpg',
        'name': '隱 形 女 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'humanTorch',
        'class': 'heroIcon preset men blast humans justice fire f4',
        'url': './爆破英雄-霹靂火.html',
        'bgImg': './img/英雄ICON/爆破英雄-霹靂火/現代.jpg',
        'name': '霹 靂 火 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'psylocke',
        'class': 'heroIcon preset women blast xmen justice',
        'url': './爆破英雄-靈蝶.html',
        'bgImg': './img/英雄ICON/爆破英雄-靈蝶/X特攻隊.jpg',
        'name': '靈 蝶 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'wasp',
        'class': 'heroIcon preset women blast humans justice',
        'url': './爆破英雄-黃蜂女.html',
        'bgImg': './img/英雄ICON/爆破英雄-黃蜂女/現代.jpg',
        'name': '黃 蜂 女 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'waspNadia',
        'class': 'heroIcon preset women blast humans justice',
        'url': './爆破英雄-黃蜂女(納迪婭).html',
        'bgImg': './img/英雄ICON/爆破英雄-黃蜂女納迪亞/現代.jpg',
        'name': '黃 蜂 女(納迪婭．范．達因)',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'daisyJohnson',
        'class': 'heroIcon preset women blast inhumans justice',
        'url': './爆破英雄-黛希強森.html',
        'bgImg': './img/英雄ICON/爆破英雄-戴希強森/神盾局特工.jpg',
        'name': '戴 希． 強 森 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'blueDargon',
        'class': 'heroIcon preset women blast humans justice leader',
        'url': './爆破英雄-青龍.html',
        'bgImg': './img/英雄ICON/爆破英雄-青龍/現代.jpg',
        'name': '青 龍 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'professorX',
        'class': 'heroIcon preset men blast xmen justice leader spirit',
        'url': './爆破英雄-X教授.html',
        'bgImg': './img/英雄ICON/爆破英雄-X教授/現代.jpg',
        'name': 'X 教 授 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'dazzler',
        'class': 'heroIcon preset women blast xmen justice',
        'url': './爆破英雄-炫音.html',
        'bgImg': './img/英雄ICON/爆破英雄-炫音/現代.jpg',
        'name': '炫 音 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'magneto',
        'class': 'heroIcon preset men blast xmen villain spirit',
        'url': './爆破反派-萬磁王.html',
        'bgImg': './img/英雄ICON/爆破反派-萬磁王/經典.jpg',
        'name': '萬 磁 王 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'kaecilius',
        'class': 'heroIcon preset men blast humen villain',
        'url': './爆破反派-卡西流斯.html',
        'bgImg': './img/英雄ICON/爆破反派-卡西流斯/奇異博士.jpg',
        'name': '卡 西 流 斯 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'ulyssesKlaue',
        'class': 'heroIcon preset men blast humen villain arms',
        'url': '爆破反派-尤里西斯克勞.html',
        'bgImg': './img/英雄ICON/爆破反派-尤里西斯克勞/漫威黑豹.jpg',
        'name': '尤 里 西 斯． 克 勞 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'hydroman',
        'class': 'heroIcon preset men blast humen villain',
        'url': './爆破反派-水人.html',
        'bgImg': './img/英雄ICON/爆破反派-水人/蜘蛛人-離家日.jpg',
        'name': '水 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'mysterio',
        'class': 'heroIcon preset men blast humen villain six6',
        'url': './爆破反派-神秘法師.html',
        'bgImg': './img/英雄ICON/爆破反派-神秘法師/經典.jpg',
        'name': '神 秘 法 師 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'redskull',
        'class': 'heroIcon preset men blast humen villain',
        'url': './爆破反派-紅骷髏.html',
        'bgImg': './img/英雄ICON/爆破反派-紅骷髏/美國隊長-復仇者先鋒.jpg',
        'name': '紅 骷 髏 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'redskull:sw',
        'class': 'heroIcon men speed humen villain',
        'url': './爆破反派-紅骷髏.html?id=skin2',
        'bgImg': './img/英雄ICON/爆破反派-紅骷髏/秘密戰爭-紅骷髏.jpg ',
        'name': '紅骷髏: 秘密戰爭-紅骷髏 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'stryfe',
        'class': 'heroIcon preset men blast xmen villain',
        'url': './爆破反派-紛爭.html',
        'bgImg': './img/英雄ICON/爆破反派-紛爭/現代.jpg',
        'name': '紛 爭 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'baronMordo',
        'class': 'heroIcon preset men blast humen villain',
        'url': './爆破反派-莫度男爵.html',
        'bgImg': './img/英雄ICON/爆破反派-莫度男爵/經典.jpg',
        'name': '莫 度 男 爵 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'baronMordo:ds',
        'class': 'heroIcon men speed humen justice',
        'url': './爆破反派-莫度男爵.html?id=skin2',
        'bgImg': './img/英雄ICON/爆破反派-莫度男爵/奇異博士.jpg ',
        'name': '莫度男爵-奇異博士 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'lash',
        'class': 'heroIcon preset men blast inhumans villain',
        'url': './爆破反派-萊許.html',
        'bgImg': './img/英雄ICON/爆破反派-萊許/神盾局特工.jpg',
        'name': '萊 許 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'whiplash',
        'class': 'heroIcon preset men blast humen villain',
        'url': './爆破反派-鞭狂.html',
        'bgImg': './img/英雄ICON/爆破反派-鞭狂/鋼鐵人2.jpg',
        'name': '鞭 狂 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'maximus',
        'class': 'heroIcon preset men blast inhumans villain spirit',
        'url': './爆破反派-馬克西穆斯.html',
        'bgImg': './img/英雄ICON/爆破反派-馬克西穆斯/皇者之戰.jpg',
        'name': '馬 克 西 穆 斯 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'enchanTress',
        'class': 'heroIcon preset women blast et villain',
        'url': './爆破反派-魅惑魔女.html',
        'bgImg': './img/英雄ICON/爆破反派-魅惑女巫/現代.jpg',
        'name': '魅 惑 魔 女 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'modok',
        'class': 'heroIcon preset men blast humen villain',
        'url': './爆破反派-魔多客.html',
        'bgImg': './img/英雄ICON/爆破反派-魔多客/經典.jpg',
        'name': '魔 多 客 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'malekith',
        'class': 'heroIcon preset men blast et villain',
        'url': './爆破反派-魔雷基.html',
        'bgImg': './img/英雄ICON/爆破反派-魔雷基/雷神索爾-黑暗世界.jpg',
        'name': '魔 雷 基 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'yellowJacket',
        'class': 'heroIcon preset men blast humen villain mechanical',
        'url': './爆破反派-黃衫俠.html',
        'bgImg': './img/英雄ICON/爆破反派-黃衫俠/蟻人.jpg',
        'name': '黃 衫 俠 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': '',
        'class': 'heroIcon preset men blast xmen villain',
        'url': './爆破反派-驚惡先生.html',
        'bgImg': './img/英雄ICON/爆破反派-驚惡先生/現代.jpg',
        'name': '驚 惡 先 生 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'misterSinister',
        'class': 'heroIcon preset women speed humen justice',
        'url': './速度英雄-黑寡婦.html',
        'bgImg': './img/英雄ICON/速度英雄-黑寡婦/復仇者聯盟.jpg',
        'name': '黑 寡 婦 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'hawekeye',
        'class': 'heroIcon preset men speed humen justice arms',
        'url': './速度英雄-鷹眼.html',
        'bgImg': './img/英雄ICON/速度英雄-鷹眼/復仇者聯盟.jpg',
        'name': '鷹 眼 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'spiderman',
        'class': 'heroIcon preset men speed humen justice spider leader',
        'url': './速度英雄-蜘蛛人.html',
        'bgImg': './img/英雄ICON/速度英雄-蜘蛛人/經典.jpg',
        'name': '蜘 蛛 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'falcon',
        'class': 'heroIcon preset men speed humen justice leader',
        'url': './速度英雄-獵鷹.html',
        'bgImg': './img/英雄ICON/速度英雄-獵鷹/美國隊長-酷寒戰士.jpg',
        'name': '獵 鷹 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'winterSoldier',
        'class': 'heroIcon preset men speed humen justice arms',
        'url': './速度英雄-酷寒戰士.html',
        'bgImg': './img/英雄ICON/速度英雄-酷寒戰士/美國隊長-酷寒戰士.jpg',
        'name': '酷 寒 戰 士 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'quicksilver',
        'class': 'heroIcon preset men speed xmen justice',
        'url': './速度英雄-快銀.html',
        'bgImg': './img/英雄ICON/速度英雄-快銀/經典.jpg',
        'name': '快 銀 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'nickFury',
        'class': 'heroIcon preset men speed humen justice arms leader',
        'url': './速度英雄-尼克福瑞.html',
        'bgImg': './img/英雄ICON/速度英雄-尼克福瑞/現代.jpg',
        'name': '尼 克 福 瑞 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'deadpool',
        'class': 'heroIcon preset men speed xmen justice arms',
        'url': './速度英雄-死恃.html',
        'bgImg': './img/英雄ICON/速度英雄-死恃/經典.jpg',
        'name': '死 恃 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'deadpool:lady',
        'class': 'heroIcon women speed xmen justice arms',
        'url': './速度英雄-死恃.html?id=skin3',
        'bgImg': './img/英雄ICON/速度英雄-死恃/女死恃.jpg ',
        'name': '死 恃 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'deadpool:party',
        'class': 'heroIcon women speed xmen justice arms',
        'url': './速度英雄-死恃.html?id=skin4',
        'bgImg': './img/英雄ICON/速度英雄-死恃/節日派對.jpg ',
        'name': '死 恃 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'domind',
        'class': 'heroIcon preset women speed xmen justice arms',
        'url': './速度英雄-多米諾.html',
        'bgImg': './img/英雄ICON/速度英雄-多米諾/X特攻隊.jpg',
        'name': '多 米 諾 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'gwenpool',
        'class': 'heroIcon preset women speed humen justice',
        'url': './速度英雄-關死恃.html',
        'bgImg': './img/英雄ICON/速度英雄-關死恃/全新全異.jpg',
        'name': '關 死 恃 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'lunaSnow',
        'class': 'heroIcon preset women speed humen justice leader',
        'url': './速度英雄-冰月花雪.html',
        'bgImg': './img/英雄ICON/速度英雄-冰月花雪/現代.jpg',
        'name': '冰 月 花 雪 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'antman',
        'class': 'heroIcon preset men speed humen justice',
        'url': './速度英雄-蟻人.html',
        'bgImg': './img/英雄ICON/速度英雄-蟻人/經典.jpg',
        'name': '蟻 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'agent13',
        'class': 'heroIcon preset women speed humen justice',
        'url': './速度英雄-13 號特工.html',
        'bgImg': './img/英雄ICON/速度英雄-13號特工/現代.jpg',
        'name': '13 特 工 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'x23',
        'class': 'heroIcon preset women speed xmen justice',
        'url': './速度英雄-X23.html',
        'bgImg': './img/英雄ICON/速度英雄-X23/經典.jpg',
        'name': 'X 23 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'mockingbird',
        'class': 'heroIcon preset women speed humen justice',
        'url': './速度英雄-仿聲鳥.html',
        'bgImg': './img/英雄ICON/速度英雄-仿聲鳥/英雄時代.jpg',
        'name': '仿 聲 鳥 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'kittyPryde',
        'class': 'heroIcon preset women speed xmen justice arms',
        'url': './速度英雄-凱蒂普萊特.html',
        'bgImg': './img/英雄ICON/速度英雄-凱蒂普萊特/現代.jpg',
        'name': '凱 蒂． 普 萊 德 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'yondu',
        'class': 'heroIcon preset men speed et justice arms',
        'url': './速度英雄-勇度.html',
        'bgImg': './img/英雄ICON/速度英雄-勇度/星際異攻隊.jpg',
        'name': '勇 度 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'karnak',
        'class': 'heroIcon preset men speed inhumans justice',
        'url': './速度英雄-卡爾奈克.html',
        'bgImg': './img/英雄ICON/速度英雄-卡爾奈克/皇者之戰.jpg',
        'name': '卡 爾 奈 克 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'hellcat',
        'class': 'heroIcon preset women speed humen justice',
        'url': './速度英雄-地獄貓.html',
        'bgImg': './img/英雄ICON/速度英雄-地獄貓/全新全異.jpg',
        'name': '地 獄 貓 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'nightcrawler',
        'class': 'heroIcon preset men speed xmen justice leader',
        'url': './速度英雄-夜行者.html',
        'bgImg': './img/英雄ICON/速度英雄-夜行者/現代.jpg',
        'name': '夜 行 者 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'daredevil',
        'class': 'heroIcon preset men speed humen justice leader',
        'url': './速度英雄-夜魔俠.html',
        'bgImg': './img/英雄ICON/速度英雄-夜魔俠/現代.jpg',
        'name': '夜 魔 俠 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'angel',
        'class': 'heroIcon preset men speed xmen justice',
        'url': './速度英雄-天使.html',
        'bgImg': './img/英雄ICON/速度英雄-天使/現代.jpg',
        'name': '天 使 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'spiderGwen',
        'class': 'heroIcon preset women speed humen justice spider leader',
        'url': './速度英雄-女蜘蛛人關.html',
        'bgImg': './img/英雄ICON/速度英雄-女蜘蛛人關/全新全異.jpg',
        'name': '女 蜘 蛛 人．關 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'rogue',
        'class': 'heroIcon preset women speed xmen justice',
        'url': './速度英雄-小淘氣.html',
        'bgImg': './img/英雄ICON/速度英雄-小淘氣/經典.jpg',
        'name': '小 淘 氣 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'elektra',
        'class': 'heroIcon preset women speed humen justice arms',
        'url': './速度英雄-幻影殺手.html',
        'bgImg': './img/英雄ICON/速度英雄-幻影殺手/經典.jpg',
        'name': '幻 影 殺 手 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'kidKaiju',
        'class': 'heroIcon preset men speed inhumen justice',
        'url': './速度英雄-怪獸小子.html',
        'bgImg': './img/英雄ICON/速度英雄-怪獸小子/怪物解放.jpg',
        'name': '怪 獸 小 子 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'squirrelgirl',
        'class': 'heroIcon preset women speed humen justice',
        'url': './速度英雄-松鼠女孩.html',
        'bgImg': './img/英雄ICON/速度英雄-松鼠女孩/新復仇者.jpg',
        'name': '松 鼠 女 孩 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'aero',
        'class': 'heroIcon preset women speed humen justice leader',
        'url': './速度英雄-氣旋.html',
        'bgImg': './img/英雄ICON/速度英雄-氣旋/現代.jpg',
        'name': '氣 旋 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'wave',
        'class': 'heroIcon preset women speed humen justice',
        'url': './速度英雄-浪.html',
        'bgImg': './img/英雄ICON/速度英雄-浪/現代.jpg',
        'name': '浪 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'wong',
        'class': 'heroIcon preset men speed humen justice',
        'url': './速度英雄-王.html',
        'bgImg': './img/英雄ICON/速度英雄-王/全新全異.jpg',
        'name': '王 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'fantomex',
        'class': 'heroIcon preset men speed xmen justice arms',
        'url': './速度英雄-白幽靈.html',
        'bgImg': './img/英雄ICON/速度英雄-白幽靈/X特攻隊.jpg',
        'name': '白 幽 靈 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'whiteFox',
        'class': 'heroIcon preset women speed humen justice leader',
        'url': './速度英雄-白狐.html',
        'bgImg': './img/英雄ICON/速度英雄-白狐/現代.jpg',
        'name': '白 狐 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'fandral',
        'class': 'heroIcon preset men speed et justice',
        'url': './速度英雄-范德爾.html',
        'bgImg': './img/英雄ICON/速度英雄-范達爾/現代.jpg',
        'name': '范 達 爾 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'shuri',
        'class': 'heroIcon preset women speed humen justice leader',
        'url': './速度英雄-舒莉.html',
        'bgImg': './img/英雄ICON/速度英雄-舒莉/漫威傳承.jpg',
        'name': '舒 莉 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'elsaBloodstone',
        'class': 'heroIcon preset women speed humen justice arms',
        'url': './速度英雄-艾爾莎血石.html',
        'bgImg': './img/英雄ICON/速度英雄-艾爾莎血石/現代.jpg',
        'name': '艾 爾 莎． 血 石 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'gamora',
        'class': 'heroIcon preset women speed et justice arms',
        'url': './速度英雄-葛摩拉.html',
        'bgImg': './img/英雄ICON/速度英雄-葛摩拉/星際異攻隊.jpg',
        'name': '葛 摩 拉 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'silk',
        'class': 'heroIcon preset women speed humen justice spider',
        'url': './速度英雄-蛛絲女.html',
        'bgImg': './img/英雄ICON/速度英雄-蛛絲女/全新全異.jpg',
        'name': '蛛 絲 女 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'spidermanMiles',
        'class': 'heroIcon preset men speed humen justice spider leader',
        'url': './速度英雄-蜘蛛人(邁爾斯).html',
        'bgImg': './img/英雄ICON/速度英雄-蜘蛛人邁爾斯/全新全異.jpg',
        'name': '蜘 蛛 人(邁爾斯． 摩拉斯)',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'spider2099',
        'class': 'heroIcon preset men speed humen justice spider leader',
        'url': './速度英雄-蜘蛛人2099.html',
        'bgImg': './img/英雄ICON/速度英雄-蜘蛛人2099/現代.jpg',
        'name': '蜘 蛛 人2099 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'arachKnight',
        'class': 'heroIcon preset men speed humen justice spider leader',
        'url': './速度英雄-蜘蛛騎士.html',
        'bgImg': './img/英雄ICON/速度英雄-蜘蛛騎士/無限融合.jpg',
        'name': '蜘 蛛 騎 士 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'mistyKnght',
        'class': 'heroIcon preset women speed humen justice arms',
        'url': './速度英雄-迷霧騎士.html',
        'bgImg': './img/英雄ICON/速度英雄-迷霧騎士/全新全異.jpg',
        'name': '迷 霧 騎 士 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'hawkeyeKate',
        'class': 'heroIcon preset women speed humen justice',
        'url': './速度英雄-鷹眼(凱特).html',
        'bgImg': './img/英雄ICON/速度英雄-鷹眼凱特/Marvel!.jpg',
        'name': '鷹 眼(凱特． 畢夏普)',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'sunBird',
        'class': 'heroIcon preset men speed humen justice',
        'url': './速度英雄-鳳皇.html',
        'bgImg': './img/英雄ICON/速度英雄-鳳皇/現代.jpg',
        'name': '鳳 皇 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'darkhawk',
        'class': 'heroIcon preset men speed humen justice leader',
        'url': './速度英雄-黑鷹.html',
        'bgImg': './img/英雄ICON/速度英雄-黑鷹/現代.jpg',
        'name': '黑 鷹 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'scarletSpider',
        'class': 'heroIcon preset men speed humen justice spider leader',
        'url': './速度英雄-猩紅蜘蛛.html',
        'bgImg': './img/英雄ICON/速度英雄-猩紅蜘蛛/現代.jpg',
        'name': '猩 紅 蜘 蛛 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'sin',
        'class': 'heroIcon preset women speed humen villain arms',
        'url': './速度反派-原罪.html',
        'bgImg': './img/英雄ICON/速度反派-原罪/全新全異.jpg',
        'name': '原 罪 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'ghost',
        'class': 'heroIcon preset men speed humen villain mechanical',
        'url': './速度反派-幽靈.html',
        'bgImg': './img/英雄ICON/速度反派-幽靈/經典.jpg',
        'name': '幽 靈 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'ghost:as',
        'class': 'heroIcon preset women speed humen villain mechanical',
        'url': './速度反派-幽靈.html?id=skin2',
        'bgImg': './img/英雄ICON/速度反派-幽靈/蟻人與黃蜂女.jpg ',
        'name': '幽靈: 蟻人與黃蜂女 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'kravenHunter',
        'class': 'heroIcon preset men speed humen villain arms six6',
        'url': './速度反派-獵人克萊文.html',
        'bgImg': './img/英雄ICON/速度反派-獵人克萊文/現代.jpg',
        'name': '獵 人 克 萊 文 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'vulture',
        'class': 'heroIcon preset men speed humen villain six6',
        'url': './速度反派-禿鷹.html',
        'bgImg': './img/英雄ICON/速度反派-禿鷹/經典.jpg',
        'name': '禿 鷹 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'korath',
        'class': 'heroIcon preset men speed et villain arms',
        'url': './速度反派-科拉特.html',
        'bgImg': './img/英雄ICON/速度反派-柯拉特/驚奇隊長.jpg',
        'name': '科 拉 特 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'greenGoblin',
        'class': 'heroIcon preset men speed humen villain',
        'url': './速度反派-綠惡魔.html',
        'bgImg': './img/英雄ICON/速度反派-綠惡魔/經典.jpg',
        'name': '綠 惡 魔 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'greenGoblin:ultimate',
        'class': 'heroIcon men speed humen villain',
        'url': './速度反派-綠惡魔.html?id=skin2',
        'bgImg': './img/英雄ICON/速度反派-綠惡魔/究極.jpg ',
        'name': '綠惡魔-究極 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'baronZemo',
        'class': 'heroIcon preset men speed humen villain',
        'url': './速度反派-齊莫男爵.html',
        'bgImg': './img/英雄ICON/速度反派-齊莫男爵/現代.jpg',
        'name': '齊 莫 男 爵 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'electro',
        'class': 'heroIcon preset men speed humen villain six6',
        'url': './速度反派-電光人.html',
        'bgImg': './img/英雄ICON/速度反派-電光人/現代.jpg',
        'name': '電 光 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'blackcat',
        'class': 'heroIcon preset women speed humen villain',
        'url': './速度反派-黑貓.html',
        'bgImg': './img/英雄ICON/速度反派-黑貓/現代.jpg',
        'name': '黑 貓 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'viper',
        'class': 'heroIcon preset women speed humen villain',
        'url': './速度反派-毒蛇.html',
        'bgImg': './img/英雄ICON/速度反派-毒蛇/現代.jpg',
        'name': '毒 蛇 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'mystique',
        'class': 'heroIcon preset women speed xmen villain arms',
        'url': './速度反派-魔形女.html',
        'bgImg': './img/英雄ICON/速度反派-魔形女/現代.jpg',
        'name': '魔 形 女 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'yelena',
        'class': 'heroIcon preset women speed humen villain',
        'url': './速度反派-葉蓮娜.html',
        'bgImg': './img/英雄ICON/速度反派-葉蓮娜/現代.jpg',
        'name': '葉 蓮 娜 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'yelena:bw',
        'class': 'heroIcon women speed humen justice',
        'url': './速度反派-葉蓮娜.html?id=skin2',
        'bgImg': './img/英雄ICON/速度反派-葉蓮娜/漫威黑寡婦.jpg ',
        'name': '葉蓮娜: 漫威黑寡婦 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'yelena:snow',
        'class': 'heroIcon women speed humen justice',
        'url': './速度反派-葉蓮娜.html?id=skin2',
        'bgImg': './img/英雄ICON/速度反派-葉蓮娜/冰雪戰衣.jpg ',
        'name': '葉蓮娜: 漫威黑寡婦(冰雪戰衣)',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'thor',
        'class': 'heroIcon preset men universal et justice leader',
        'url': './宇宙英雄-索爾.html',
        'bgImg': './img/英雄ICON/宇宙英雄-索爾/復仇者聯盟.jpg',
        'name': '索 爾 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'captainMarvel',
        'class': 'heroIcon preset women universal humen justice leader',
        'url': './宇宙英雄-驚奇隊長.html',
        'bgImg': './img/英雄ICON/宇宙英雄-驚奇隊長/現代.jpg',
        'name': '驚 奇 隊 長 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'slapstick',
        'class': 'heroIcon preset men universal humen justice',
        'url': './宇宙英雄-鬧劇.html',
        'bgImg': './img/英雄ICON/宇宙英雄-鬧劇/現代.jpg',
        'name': '鬧 劇 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'clea',
        'class': 'heroIcon preset women universal et justice',
        'url': './宇宙英雄-克莉.html',
        'bgImg': './img/英雄ICON/宇宙英雄-克莉/現代.jpg',
        'name': '克 莉 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'hellstorm',
        'class': 'heroIcon preset men universal humen justice',
        'url': './宇宙英雄-地獄風暴.html',
        'bgImg': './img/英雄ICON/宇宙英雄-地獄風暴/現代.jpg',
        'name': '地 獄 風 暴 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'hyperion',
        'class': 'heroIcon preset men universal et justice leader',
        'url': './宇宙英雄-太陽神.html',
        'bgImg': './img/英雄ICON/宇宙英雄-太陽神/全新全異.jpg',
        'name': '太 陽 神 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'singularity',
        'class': 'heroIcon preset women universal et justice',
        'url': './宇宙英雄-奇點.html',
        'bgImg': './img/英雄ICON/宇宙英雄-奇點/秘密戰爭A-force.jpg',
        'name': '奇 點 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'odin',
        'class': 'heroIcon preset men universal et justice',
        'url': './宇宙英雄-奧丁.html',
        'bgImg': './img/英雄ICON/宇宙英雄-奧丁/現代.jpg',
        'name': '奧 丁 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'doctorVoodoo',
        'class': 'heroIcon preset men universal humen justice',
        'url': './宇宙英雄-巫毒.html',
        'bgImg': './img/英雄ICON/宇宙英雄-巫毒/現代.jpg',
        'name': '巫 毒 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'ghostrider',
        'class': 'heroIcon preset men universal humen justice leader fire',
        'url': './宇宙英雄-惡靈戰警.html',
        'bgImg': './img/英雄ICON/宇宙英雄-惡靈戰警/經典.jpg',
        'name': '惡 靈 戰 警 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'ghostriderRobbie',
        'class': 'heroIcon preset men universal humen justice fire',
        'url': './宇宙英雄-惡靈戰警(羅比).html',
        'bgImg': './img/英雄ICON/宇宙英雄-惡靈戰警羅比/Marvel!.jpg',
        'name': '惡靈戰警(羅比． 雷伊斯)',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'ghostPanther',
        'class': 'heroIcon preset men universal humen justice fire',
        'url': './宇宙英雄-惡靈黑豹.html',
        'bgImg': './img/英雄ICON/宇宙英雄-惡靈黑豹/無限融合.jpg',
        'name': '惡 靈 黑 豹 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'angela',
        'class': 'heroIcon preset women universal et justice',
        'url': './宇宙英雄-戰鬥天使.html',
        'bgImg': './img/英雄ICON/宇宙英雄-戰鬥天使/現代.jpg',
        'name': '戰 鬥 天 使 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'satana',
        'class': 'heroIcon preset women universal humen justice fire',
        'url': './宇宙英雄-撒旦娜.html',
        'bgImg': './img/英雄ICON/宇宙英雄-撒旦娜/現代.jpg',
        'name': '撒 旦 娜 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'novaSam',
        'class': 'heroIcon preset men universal humen justice',
        'url': './宇宙英雄-新星(山姆亞歷山大).html',
        'bgImg': './img/英雄ICON/宇宙英雄-新星/全新全異.jpg',
        'name': '新星(山姆． 亞歷山大)',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'heimdall',
        'class': 'heroIcon preset men universal et justice',
        'url': './宇宙英雄-海姆達姆.html',
        'bgImg': './img/英雄ICON/宇宙英雄-海姆達姆/雷神索爾-諸神黃昏.jpg',
        'name': '海 姆 達 爾 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'thorJane',
        'class': 'heroIcon preset women universal humen justice',
        'url': './宇宙英雄-索爾(珍． 佛斯特).html',
        'bgImg': './img/英雄ICON/宇宙英雄-索爾珍/全新全異.jpg',
        'name': '索爾(珍． 佛斯特)',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'medusa',
        'class': 'heroIcon preset women universal inhumans justice',
        'url': './宇宙英雄-美杜莎.html',
        'bgImg': './img/英雄ICON/宇宙英雄-美杜莎/全新全異.jpg',
        'name': '美 杜 莎 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'blueMarvel',
        'class': 'heroIcon preset men universal humen justice leader',
        'url': './宇宙英雄-藍驚奇.html',
        'bgImg': './img/英雄ICON/宇宙英雄-藍驚奇/終極戰隊.jpg',
        'name': '藍 驚 奇 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'silverSurfer',
        'class': 'heroIcon preset men universal et justice',
        'url': './宇宙英雄-銀色衝浪手.html',
        'bgImg': './img/英雄ICON/宇宙英雄-銀色衝浪手/現代.jpg',
        'name': '銀 色 衝 浪 手 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'ironHammer',
        'class': 'heroIcon preset men universal et justice mechanical',
        'url': './宇宙英雄-鋼鐵之錘.html',
        'bgImg': './img/英雄ICON/宇宙英雄-鋼鐵之槌/無限融合.jpg',
        'name': '鋼 鐵 之 槌 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'quasar',
        'class': 'heroIcon preset women universal humen justice',
        'url': './宇宙英雄-類星體.html',
        'bgImg': './img/英雄ICON/宇宙英雄-類星體/全新全異.jpg',
        'name': '類星體(艾薇德． 金凱德)',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'blackBolt',
        'class': 'heroIcon preset men universal inhumans justice',
        'url': './宇宙英雄-黑霹雷.html',
        'bgImg': './img/英雄ICON/宇宙英雄-黑霹雷/現代.jpg',
        'name': '黑 霹 雷 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'shadowShell',
        'class': 'heroIcon preset women universal humen justice',
        'url': './宇宙英雄-玄武.html',
        'bgImg': './img/英雄ICON/宇宙英雄-玄武/現代.jpg',
        'name': '玄 武 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'novaRichard',
        'class': 'heroIcon preset men universal humen justice leader',
        'url': './宇宙英雄-新星.html',
        'bgImg': './img/英雄ICON/宇宙英雄-新星理查/現代.jpg',
        'name': '新 星 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'betaRayBill',
        'class': 'heroIcon preset men universal et justice leader',
        'url': './宇宙英雄-貝塔.html',
        'bgImg': './img/英雄ICON/宇宙英雄-貝塔/現代.jpg',
        'name': '貝 塔 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'phylaVell',
        'class': 'heroIcon preset women universal et justice leader',
        'url': './宇宙英雄-菲拉威爾.html',
        'bgImg': './img/英雄ICON/宇宙英雄-菲拉威爾/現代.jpg',
        'name': '菲 拉 威 爾 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'thanos',
        'class': 'heroIcon preset men universal et villain',
        'url': './宇宙反派-薩諾斯.html',
        'bgImg': './img/英雄ICON/宇宙反派-薩諾斯/無限.jpg',
        'name': '薩 諾 斯 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'loki',
        'class': 'heroIcon preset men universal et villain',
        'url': './宇宙反派-洛基.html',
        'bgImg': './img/英雄ICON/宇宙反派-洛基/復仇者聯盟.jpg',
        'name': '洛 基 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'loki:lady',
        'class': 'heroIcon women universal et villain',
        'url': './宇宙反派-洛基.html?ID=skin2',
        'bgImg': './img/英雄ICON/宇宙反派-洛基/淑女洛基.jpg ',
        'name': '洛基: 淑女洛基 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'antiman',
        'class': 'heroIcon preset men universal humen villain',
        'url': './宇宙反派-反物質人.html',
        'bgImg': './img/英雄ICON/宇宙反派-反物質人/全新全異.jpg',
        'name': '反 物 質 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'dormammu',
        'class': 'heroIcon preset men universal et villain',
        'url': './宇宙反派-多瑪暮.html',
        'bgImg': './img/英雄ICON/宇宙反派-多瑪暮/經典.jpg',
        'name': '多 瑪 暮 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'ultron',
        'class': 'heroIcon preset men universal biological villain mechanical',
        'url': './宇宙反派-奧創.html',
        'bgImg': './img/英雄ICON/宇宙反派-奧創/現代.jpg',
        'name': '奧 創 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'corvusGlaive',
        'class': 'heroIcon preset men universal et villain',
        'url': './宇宙反派-掠鴉兇刃.html',
        'bgImg': './img/英雄ICON/宇宙反派-掠鴨兇刃/無限.jpg',
        'name': '掠 鴨 兇 刃 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'morganLefav',
        'class': 'heroIcon preset women universal humen villain',
        'url': './宇宙反派-摩根娜.html',
        'bgImg': './img/英雄ICON/宇宙反派-摩根娜/現代.jpg',
        'name': '摩 根 娜 勒 菲 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': '',
        'class': 'heroIcon preset women universal et villain spirit',
        'url': './宇宙反派-昊天極星.html',
        'bgImg': './img/英雄ICON/宇宙反派-昊天極星/無限.jpg',
        'name': '昊 天 極 星 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'superGiant',
        'class': 'heroIcon preset men universal et villain',
        'url': './宇宙反派-星駭寂滅.html',
        'bgImg': './img/英雄ICON/宇宙反派-星駭寂滅/無限.jpg',
        'name': '星 駭 寂 滅 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'proximaMidnight',
        'class': 'heroIcon preset women universal et villain',
        'url': './宇宙反派-闇夜無星.html',
        'bgImg': './img/英雄ICON/宇宙反派-闇夜無星/無限.jpg',
        'name': '闇 夜 無 星 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'DoctorDoom',
        'class': 'heroIcon preset men universal humen villain',
        'url': './宇宙反派-末日博士.html',
        'bgImg': './img/英雄ICON/宇宙反派-末日博士/現代.jpg',
        'name': '末 日 博 士 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'hela',
        'class': 'heroIcon preset women universal et villain',
        'url': './宇宙反派-海拉.html',
        'bgImg': './img/英雄ICON/宇宙反派-海拉/現代.jpg',
        'name': '海 拉 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'ebonyMaw',
        'class': 'heroIcon preset men universal et villain',
        'url': './宇宙反派-烏木邪心.html',
        'bgImg': './img/英雄ICON/宇宙反派-烏木邪心/無限.jpg',
        'name': '烏 木 邪 心 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'victorious',
        'class': 'heroIcon preset women universal humen villain',
        'url': './宇宙反派-維克多利斯.html',
        'bgImg': './img/英雄ICON/宇宙反派-維克多莉斯/現代.jpg',
        'name': '維 克 多 利 斯 ',
        'gender': 'w',
        'display': 'display:',
    },

    {
        'id': 'ronan',
        'class': 'heroIcon preset men universal et villain spirit',
        'url': './宇宙反派-羅南.html',
        'bgImg': './img/英雄ICON/宇宙反派-羅南/星際異攻隊.jpg',
        'name': '羅 南 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'sentinel',
        'class': 'heroIcon preset no universal biological villain mechanical',
        'url': './宇宙反派-哨兵機器人.html',
        'bgImg': './img/英雄ICON/宇宙反派-哨兵機器人/現代.jpg',
        'name': '哨 兵 機 器 人 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'thane',
        'class': 'heroIcon preset men universal inhumans villain',
        'url': './宇宙反派-塞恩.html',
        'bgImg': './img/英雄ICON/宇宙反派-塞恩/現代.jpg ',
        'name': '塞 恩 ',
        'gender': 'm',
        'display': 'display:',
    },

    {
        'id': 'destrover',
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