$(document).ready(function() {
    // NAV設定

    $("#NAV").load("layout-navigator.html");


    // 進入網頁後讓選擇英雄條件歸初始值
    clearFilter(0);

    // ==============================所有英雄id+class+url+bgimg+name+gender+dispasy====================

    for (let index = 0; index < heroDatas.length; index++) {
        var tagTemplage =
            '<a  class="{heroClass}" href="{heroUrl}" style="{heroStyleDisplay}; text-decoration: none;' +
            'background: url(./App_Data/Images/Heros/{heroBackgroundImage}.jpg);">' +
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


    // 英雄選擇條件任一下拉選單有異動
    $('select').change(function() {

        // // 取出所有選項的值
        var gender = $('select#gender')[0].value;
        var type = $('select#type')[0].value;
        var race = $('select#race')[0].value;
        var camp = $('select#camp')[0].value;
        var ability = $('select#ability')[0].value;

        var filterCondition = '';

        if (gender.length > 0) {
            filterCondition += '.' + gender;
        }

        if (type.length > 0) {
            filterCondition += '.' + type;
        }

        if (race.length > 0) {
            filterCondition += '.' + race;
        }

        if (camp.length > 0) {
            filterCondition += '.' + camp;
        }

        if (ability.length > 0) {
            filterCondition += '.' + ability;
        }


        $('a.heroIcon').hide();
        $('a.heroIcon').filter(filterCondition).show();

    });
});

function clearFilter(clear) {
    // 清除所有條件的按鈕設定
    if (clear == 0) {
        // 所有select都變成第一個option的第一個
        $('.selectButton').val('');
        $('a.heroIcon').hide();
        $('a.heroIcon.preset').show();
    }
};

var heroDatas = [

    {
        'id': 'CaptainAmeric',
        'class': 'heroIcon preset men combat humen justice leader',
        'url': './Character.html?id=CaptainAmerica&uniform=TheAvengers',
        'bgImg': 'CaptainAmerica/TheAvengers',
        'name': '美 國 隊 長',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'CaptainAmericaSecretWar',
        'class': 'heroIcon women combat humen justice leader',
        'url': './Character.html?id=CaptainAmerica&uniform=SecretWars',
        'bgImg': 'CaptainAmerica/SecretWars',
        'name': '美國隊長: 秘密戰爭2099 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'CaptainAmericHydraSupreme',
        'class': 'heroIcon men blast humen villain leader',
        'url': './Character.html?id=CaptainAmerica&uniform=HydraSupreme',
        'bgImg': 'CaptainAmerica/HydraSupreme',
        'name': '美國隊長: 九頭蛇至尊 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'Blackpanther',
        'class': 'heroIcon preset men combat humen justice leader',
        'url': './Character.html?id=Blackpanther&uniform=Modern',
        'bgImg': 'Blackpanther/Modern',
        'name': '黑 豹 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Hulk',
        'class': 'heroIcon preset men combat humen justice gamma',
        'url': './Character.html?id=Hulk&uniform=TheAvengers',
        'bgImg': 'Hulk/TheAvengers',
        'name': '浩 克 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'HulkSecretWars',
        'class': 'heroIcon men combat humen villain gamma',
        'url': './Character.html?id=Hulk&uniform=SecretWars',
        'bgImg': 'Hulk/SecretWars',
        'name': '浩克: 秘密戰爭-不完美的未來',
        'gender': 'm',
        'display': 'display:none;',
    },

    {
        'id': 'HulkImmortal',
        'class': 'heroIcon men combat humen villain gamma',
        'url': './Character.html?id=Hulk&uniform=Immortal',
        'bgImg': 'Hulk/Immortal',
        'name': '浩克-不朽浩克 ',
        'gender': 'm',
        'display': 'display:none;',
    },

    {
        'id': 'Thing',
        'class': 'heroIcon preset men combat humen justice f4',
        'url': './Character.html?id=Thing&uniform=Modern',
        'bgImg': 'Thing/Modern',
        'name': '石 頭 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Beast',
        'class': 'heroIcon preset men combat xmen justice',
        'url': './Character.html?id=Beast&uniform=Classic',
        'bgImg': 'Beast/Classic',
        'name': '野 獸 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'BeastAgeOfApocalypse',
        'class': 'heroIcon men combat xmen villain',
        'url': './Character.html?id=Beast&uniform=AgeOfApocalypse',
        'bgImg': 'Beast/AgeOfApocalypse',
        'name': '野獸-天啟紀元 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'Colossus',
        'class': 'heroIcon preset men combat xmen justice',
        'url': './Character.html?id=Colossus&uniform=Modern',
        'bgImg': 'Colossus/Modern',
        'name': '鋼 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'ColossusPhoenixFive',
        'class': 'heroIcon men combat xmen villain phoenix',
        'url': './Character.html?id=Colossus&uniform=PhoenixFive',
        'bgImg': 'Colossus/PhoenixFive',
        'name': '鋼人-鳳凰5人組 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'Giantman',
        'class': 'heroIcon preset men combat humen justice',
        'url': './Character.html?id=Giantman&uniform=Modern',
        'bgImg': 'Giantman/Modern',
        'name': '巨 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'GiantmanUltron',
        'class': 'heroIcon men universal humen villain',
        'url': './Character.html?id=Giantman&uniform=Ultron',
        'bgImg': 'Giantman/Ultron',
        'name': '巨人-皮姆奧創 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'Shehulk',
        'class': 'heroIcon preset women combat humen justice gamma',
        'url': './Character.html?id=Shehulk&uniform=AForce',
        'bgImg': 'Shehulk/AForce',
        'name': '女 浩 克 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'ShehulkFant4stic',
        'class': 'heroIcon women combat humen justice gamma f4',
        'url': './Character.html?id=shehulk&uniform=Fant4stic',
        'bgImg': 'Shehulk/Fant4stic',
        'name': '女浩克-驚奇4超人 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'Hulking',
        'class': 'heroIcon preset men combat et justice',
        'url': './Character.html?id=Hulking&uniform=NewAvengers',
        'bgImg': 'Hulking/NewAvengers',
        'name': '小 浩 克 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Wolverine',
        'class': 'heroIcon preset men combat xmen justice leader',
        'url': './Character.html?id=Wolverine&uniform=Classic',
        'bgImg': 'Wolverine/Classic',
        'name': '金 鋼 狼 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'AmericaChavez',
        'class': 'heroIcon preset women combat humen justice',
        'url': './Character.html?id=AmericaChavez&uniform=MarvelTheUltimates',
        'bgImg': 'AmericaChavez/MarvelTheUltimates',
        'name': '阿 美 利 卡 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'AgentVenom',
        'class': 'heroIcon preset men combat humen justice symbiont',
        'url': './Character.html?id=AgentVenom&uniform=AllNewAllDifferent',
        'bgImg': 'AgentVenom/AllNewAllDifferent',
        'name': '猛 毒 特 工 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'MisterFantastic',
        'class': 'heroIcon preset men combat humen justice leader f4',
        'url': './Character.html?id=MisterFantastic&uniform=Modern',
        'bgImg': 'MisterFantastic/Modern',
        'name': '驚 奇 先 生 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Hulkbuster',
        'class': 'heroIcon preset no combat biological justice mechanical',
        'url': './Character.html?id=Hulkbuster&uniform=TheAvengersAgeofUltron',
        'bgImg': 'Hulkbuster/TheAvengersAgeofUltron',
        'name': '反 浩 克 裝 甲 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Warpath',
        'class': 'heroIcon preset men combat xmen justice',
        'url': './Character.html?id=Warpath&uniform=XForce',
        'bgImg': 'Warpath/XForce',
        'name': '戰 跡 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'WhiteTiger',
        'class': 'heroIcon preset women combat humen justice',
        'url': './Character.html?id=WhiteTiger&uniform=NewAvengers',
        'bgImg': 'WhiteTiger/NewAvengers',
        'name': '白 虎 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Namor',
        'class': 'heroIcon preset men combat xmen justice leader',
        'url': './Character.html?id=Namor&uniform=Classic',
        'bgImg': 'Namor/Classic',
        'name': '納 摩 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'NamorPhoenixFive',
        'class': 'heroIcon men combat xmen villain leader phoenix',
        'url': './Character.html?id=Namor&uniform=PhoenixFive',
        'bgImg': 'Namor/PhoenixFive',
        'name': '納摩-鳳凰5人組 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'Shangchi',
        'class': 'heroIcon preset men combat humen justice leader',
        'url': './Character.html?id=Shangchi&uniform=Modern',
        'bgImg': 'Shangchi/Modern',
        'name': '上 氣 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Volstagg',
        'class': 'heroIcon preset men combat humen et justice',
        'url': './Character.html?id=Volstagg&uniform=Modern',
        'bgImg': 'Volstagg/Modern',
        'name': '佛 勒 斯 泰 格 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Blade',
        'class': 'heroIcon preset men combat humen justice arms',
        'url': './Character.html?id=Blade&uniform=Modern',
        'bgImg': 'Blade/Modern',
        'name': '刀 鋒 戰 士 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Punisher',
        'class': 'heroIcon preset men combat humen justice arms leader',
        'url': './Character.html?id=Punisher&uniform=Modern',
        'bgImg': 'Punisher/Modern',
        'name': '制 裁 者 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'PunisherGhostRider',
        'class': 'heroIcon men universal humen villain arms leader',
        'url': './Character.html?id=Punisher&uniform=GhostRider',
        'bgImg': 'Punisher/GhostRider',
        'name': '制裁者-宇宙惡靈戰警 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'SwordMaster',
        'class': 'heroIcon preset men combat humen justice arms leader',
        'url': './Character.html?id=SwordMaster&uniform=Modern',
        'bgImg': 'SwordMaster/Modern',
        'name': '劍 仙 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'LukeCage',
        'class': 'heroIcon preset men combat humen justice arms leader',
        'url': './Character.html?id=LukeCage&uniform=Modern',
        'bgImg': 'LukeCage/Modern',
        'name': '力 量 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Sif',
        'class': 'heroIcon preset women combat et justice',
        'url': './Character.html?id=Sif&uniform=AgentsOfSHIELD',
        'bgImg': 'Sif/AgentsOfSHIELD',
        'name': '希 芙 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Crescent',
        'class': 'heroIcon preset women combat humen justice leader',
        'url': './Character.html?id=Crescent&uniform=Modern',
        'bgImg': 'Crescent/Modern',
        'name': '弦 月 神 女 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Hogun',
        'class': 'heroIcon preset men combat et justice',
        'url': './Character.html?id=Hogun&uniform=Modern',
        'bgImg': 'Hogun/Modern',
        'name': '後 剛 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Drax',
        'class': 'heroIcon preset men combat et justice',
        'url': './Character.html?id=Drax&uniform=GuardiansOfTheGalaxy',
        'bgImg': 'Drax/GuardiansOfTheGalaxy',
        'name': '德 克 斯 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'MoonKight',
        'class': 'heroIcon preset men combat humen justice arms leader',
        'url': './Character.html?id=MoonKight&uniform=Modern',
        'bgImg': 'MoonKight/Modern',
        'name': '月 光 騎 士 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Gorgon',
        'class': 'heroIcon preset men combat inhumans justice',
        'url': './Character.html?id=Gorgon&uniform=WarOfKings',
        'bgImg': 'Gorgon/WarOfKings',
        'name': '戈 爾 工 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Groot',
        'class': 'heroIcon preset men combat et justice',
        'url': './Character.html?id=Groot&uniform=GuardiansOfTheGalaxy',
        'bgImg': 'Groot/GuardiansOfTheGalaxy',
        'name': '古 魯 特 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'GrootSecretWars',
        'class': 'heroIcon men universal et justice',
        'url': './Character.html?id=Groot&uniform=SecretWars',
        'bgImg': 'Groot/SecretWars',
        'name': '古魯特: 秘密戰爭-索爾 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'GrootGuardiansOfTheGalaxy2',
        'class': 'heroIcon men speed et justice',
        'url': './Character.html?id=Groot&uniform=GuardiansOfTheGalaxy2',
        'bgImg': 'Groot/GuardiansOfTheGalaxy2',
        'name': '古魯特: 星際異攻隊2 ',
        'gender': 'm',
        'display': 'display:none',
    },


    {
        'id': 'Goliath',
        'class': 'heroIcon preset men combat humans justice',
        'url': './Character.html?id=Goliath&uniform=Classic',
        'bgImg': 'Goliath/Classic',
        'name': '歌 利 亞 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Deathlok',
        'class': 'heroIcon preset men combat humans justice 機械',
        'url': './Character.html?id=Deathlok&uniform=AgentsOfSHIELD',
        'bgImg': 'Deathlok/AgentsOfSHIELD',
        'name': '死 亡 戰 士 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'DeathlokModern',
        'class': 'heroIcon men blast humans justice 機械',
        'url': './Character.html?id=Deathlok&uniform=Modern',
        'bgImg': 'Deathlok/Modern',
        'name': '死亡戰士-現代 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'HulkCho',
        'class': 'heroIcon preset men combat humans justice 伽碼射線',
        'url': './Character.html?id=HulkCho&uniform=AllNew',
        'bgImg': 'HulkCho/AllNew',
        'name': '浩 克(阿爾迪斯． 趙)',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'JessicaJones',
        'class': 'heroIcon preset women combat humans justice',
        'url': './Character.html?id=JessicaJones&uniform=Modern',
        'bgImg': 'JessicaJones/Modern',
        'name': '潔 西 卡 瓊 斯 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Warwolf',
        'class': 'heroIcon preset men combat humans justice',
        'url': './Character.html?id=Warwolf&uniform=SHIELD',
        'bgImg': 'Warwolf/SHIELD',
        'name': '狼 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Valkyrie',
        'class': 'heroIcon preset women combat et justice',
        'url': './Character.html?id=Valkyrie&uniform=Ragnarok',
        'bgImg': 'Valkyrie/Ragnarok',
        'name': '瓦 爾 基 麗 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Ironfist',
        'class': 'heroIcon preset men combat humans justice',
        'url': './Character.html?id=Ironfist&uniform=Classic',
        'bgImg': 'Ironfist/Classic',
        'name': '鐵 拳 俠 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'KamalaKhan',
        'class': 'heroIcon preset women combat inhumans justice',
        'url': './Character.html?id=KamalaKhan&uniform=AllNewAllDifferent',
        'bgImg': 'KamalaKhan/AllNewAllDifferent',
        'name': '驚 奇 女 士 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'KamalaKhanKarachi',
        'class': 'heroIcon women speed inhumans justice',
        'url': './Character.html?id=KamalaKhan&uniform=Karachi',
        'bgImg': 'KamalaKhan/Karachi',
        'name': '驚奇女士: 喀拉蚩服裝 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'Gorillaman',
        'class': 'heroIcon preset men combat humans justice arms',
        'url': './Character.html?id=Gorillaman&uniform=Modern',
        'bgImg': 'Gorillaman/Modern',
        'name': '猩 猩 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'WarTiger',
        'class': 'heroIcon preset men combat humans justice',
        'url': './Character.html?id=WarTiger&uniform=Modern',
        'bgImg': 'WarTiger/Modern',
        'name': '戰 虎 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Gladiator',
        'class': 'heroIcon preset men combat et justice leader',
        'url': './Character.html?id=Gladiator&uniform=Modern',
        'bgImg': 'Gladiator/Modern',
        'name': '角 鬥 士 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'RedShehulk',
        'class': 'heroIcon preset women combat humen justice gamma fire',
        'url': './Character.html?id=RedShehulk&uniform=Modern',
        'bgImg': 'RedShehulk/Modern',
        'name': '女 紅 浩 克 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Ares',
        'class': 'heroIcon preset men combat et justice arms theDarkAvengers',
        'url': './Character.html?id=Ares&uniform=Modern',
        'bgImg': 'Ares/Modern',
        'name': '阿 瑞 斯 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Nebula',
        'class': 'heroIcon preset women combat et villain',
        'url': './Character.html?id=Nebula&uniform=GuardiansOfTheGalaxy',
        'bgImg': 'Nebula/GuardiansOfTheGalaxy',
        'name': '涅 布 拉 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'NebulaTheAvengersEndGame',
        'class': 'heroIcon women combat et justice',
        'url': './Character.html?id=Nebula&uniform=TheAvengersEndGame',
        'bgImg': 'Nebula/TheAvengersEndGame',
        'name': '涅布拉: 復仇者聯盟-終局之戰 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'NebulaTeamUniform',
        'class': 'heroIcon women combat et justice',
        'url': './Character.html?id=Nebula&uniform=TeamUniform',
        'bgImg': 'Nebula/TeamUniform',
        'name': '涅布拉-復仇者隊服 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'RedHulk',
        'class': 'heroIcon preset men combat humen villain gamma fire',
        'url': './Character.html?id=RedHulk&uniform=Modern',
        'bgImg': 'RedHulk/Modern',
        'name': '紅 浩 克 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'RedHulkSymbiont',
        'class': 'heroIcon men universal humen justice gamma fire',
        'url': './Character.html?id=RedHulk&uniform=Symbiont',
        'bgImg': 'RedHulk/Symbiont',
        'name': '紅浩克-復仇共生體 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'Titania',
        'class': 'heroIcon preset women combat humen villain',
        'url': './Character.html?id=Titania&uniform=Modern',
        'bgImg': 'Titania/Modern',
        'name': '泰 坦 妮 亞 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Apocalypse',
        'class': 'heroIcon preset men combat xmen villain',
        'url': './Character.html?id=Apocalypse&uniform=AgeOfApocalypse',
        'bgImg': 'Apocalypse/AgeOfApocalypse',
        'name': '天 啟 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'DoctorOctopus',
        'class': 'heroIcon preset men combat humen villain mechanical six6',
        'url': './Character.html?id=DoctorOctopus&uniform=Classic',
        'bgImg': 'DoctorOctopus/Classic',
        'name': '八 爪 博 士 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'DoctorOctopusSuper',
        'class': 'heroIcon men combat humen justice mechanical six6 spider',
        'url': './Character.html?id=DoctorOctopus&uniform=Super',
        'bgImg': 'DoctorOctopus/Super',
        'name': '八爪博士-究極蜘蛛人 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'DoctorOctopusHydra',
        'class': 'heroIcon men speed humen villain mechanical six6',
        'url': './Character.html?id=DoctorOctopus&uniform=Hydra',
        'bgImg': 'DoctorOctopus/Hydra',
        'name': '八爪博士-究極八爪 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'Kingpin',
        'class': 'heroIcon preset men combat humen villain',
        'url': './Character.html?id=Kingpin&uniform=Modern',
        'bgImg': 'Kingpin/Modern',
        'name': '金 霸 王 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'KingpinSecretWars',
        'class': 'heroIcon men blast humen villain',
        'url': './Character.html?id=Kingpin&uniform=SecretWars',
        'bgImg': 'Kingpin/SecretWars',
        'name': '金霸王: 秘密戰爭-裝甲戰爭 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'Venom',
        'class': 'heroIcon preset men combat humen villain symbiont',
        'url': './Character.html?id=Venom&uniform=Classic',
        'bgImg': 'Venom/Classic',
        'name': '猛 毒 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'VenomAntiVenom',
        'class': 'heroIcon men combat humen justice symbiont',
        'url': './Character.html?id=Venom&uniform=AntiVenom',
        'bgImg': 'Venom/AntiVenom',
        'name': '猛毒-反猛毒 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'VenomWarOfTheRealms',
        'class': 'heroIcon men combat humen justice symbiont',
        'url': './Character.html?id=Venom&uniform=WarOfTheRealms',
        'bgImg': 'Venom/WarOfTheRealms',
        'name': '猛毒-十界之戰',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'Sandman',
        'class': 'heroIcon preset men combat humen villain six6',
        'url': './Character.html?id=Sandman&uniform=Classic',
        'bgImg': 'Sandman/Classic',
        'name': '沙 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Lizard',
        'class': 'heroIcon preset men combat humen villain',
        'url': './Character.html?id=Lizard&uniform=Classic',
        'bgImg': 'Lizard/Classic',
        'name': '蜥 蜴 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Carnage',
        'class': 'heroIcon preset men combat humen villain symbiont',
        'url': './Character.html?id=Carnage&uniform=AllNewAllDifferent',
        'bgImg': 'Carnage/AllNewAllDifferent',
        'name': '屠 殺 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Bullseye',
        'class': 'heroIcon preset men combat humen villain arms',
        'url': './Character.html?id=Bullseye&uniform=Modern',
        'bgImg': 'Bullseye/Modern',
        'name': '靶 眼 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'BullseyeTheDarkAvengers',
        'class': 'heroIcon preset men speed humen villain arms theDarkAvengers',
        'url': './Character.html?id=Bullseye&uniform=TheDarkAvengers',
        'bgImg': 'Bullseye/TheDarkAvengers',
        'name': '靶 眼 : 黑暗復仇者',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'Sabretooth',
        'class': 'heroIcon preset men combat xmen villain',
        'url': './Character.html?id=Sabretooth&uniform=Fraternity',
        'bgImg': 'Sabretooth/Fraternity',
        'name': '劍 齒 虎 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'CrossBones',
        'class': 'heroIcon preset men combat humen villain',
        'url': './Character.html?id=CrossBones&uniform=CaptainAmericaCivilWar',
        'bgImg': 'CrossBones/CaptainAmericaCivilWar',
        'name': '十 字 骨 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Skurge',
        'class': 'heroIcon preset men combat et villain',
        'url': './Character.html?id=Skurge&uniform=Ragnarok',
        'bgImg': 'Skurge/Ragnarok',
        'name': '史 泰 奇 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Absorbingman',
        'class': 'heroIcon preset men combat humen villain',
        'url': './Character.html?id=Absorbingman&uniform=Modern',
        'bgImg': 'Absorbingman/Modern',
        'name': '吸 收 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Ulik',
        'class': 'heroIcon preset men combat et villain',
        'url': './Character.html?id=Ulik&uniform=Modern',
        'bgImg': 'Ulik/Modern',
        'name': '烏 里 克 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Moltenman',
        'class': 'heroIcon preset men combat humen villain fire',
        'url': './Character.html?id=Moltenman&uniform=FarFromHome',
        'bgImg': 'Moltenman/FarFromHome',
        'name': '熔 岩 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Rhino',
        'class': 'heroIcon preset men combat humen villain',
        'url': './Character.html?id=Rhino&uniform=Classic',
        'bgImg': 'Rhino/Classic',
        'name': '犀 牛 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Minnerva',
        'class': 'heroIcon preset women combat et villain',
        'url': './Character.html?id=Minnerva&uniform=Modern',
        'bgImg': 'Minnerva/Modern',
        'name': '米 勒 娃 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Juggernaut',
        'class': 'heroIcon preset men combat xmen villain',
        'url': './Character.html?id=Juggernaut&uniform=Fraternity',
        'bgImg': 'Juggernaut/Fraternity',
        'name': '紅 坦 克 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Killmonger',
        'class': 'heroIcon preset men combat humen villain',
        'url': './Character.html?id=Killmonger&uniform=Classic',
        'bgImg': 'Killmonger/Classic',
        'name': '奇 爾 蒙 格 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'RedGuardian',
        'class': 'heroIcon preset men combat humen villain',
        'url': './Character.html?id=RedGuardian&uniform=Modern',
        'bgImg': 'RedGuardian/Modern',
        'name': '紅 色 守 衛 者 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'RedGuardianBlackWidow',
        'class': 'heroIcon men combat humen justice',
        'url': './Character.html?id=RedGuardian&uniform=BlackWidow',
        'bgImg': 'RedGuardian/BlackWidow',
        'name': '紅色守衛者-漫威黑寡婦 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'TaskMaster',
        'class': 'heroIcon preset men combat humen villain arms',
        'url': './Character.html?id=TaskMaster&uniform=Modern',
        'bgImg': 'TaskMaster/Modern',
        'name': '模 仿 大 師 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Abomination',
        'class': 'heroIcon preset men combat humen villain gamma',
        'url': './Character.html?id=Abomination&uniform=Modern',
        'bgImg': 'Abomination/Modern',
        'name': '惡 型 怪 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Morbius',
        'class': 'heroIcon preset men combat humen villain',
        'url': './Character.html?id=Morbius&uniform=Modern',
        'bgImg': 'Morbius/Modern',
        'name': '魔 比 斯 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Shriek',
        'class': 'heroIcon preset women combat humen villain symbiont',
        'url': './Character.html?id=Shriek&uniform=Modern',
        'bgImg': 'Shriek/Modern',
        'name': '尖 叫',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Daken',
        'class': 'heroIcon preset men combat xmen villain arms',
        'url': './Character.html?id=Daken&uniform=Modern',
        'bgImg': 'Daken/Modern',
        'name': '戴 肯 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Ironman',
        'class': 'heroIcon preset men blast humen justice mechanical',
        'url': './Character.html?id=Ironman&uniform=Classic',
        'bgImg': 'Ironman/Classic',
        'name': '鋼 鐵 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'WarMachine',
        'class': 'heroIcon preset men blast humen justice mechanical leader',
        'url': './Character.html?id=WarMachine&uniform=Modern',
        'bgImg': 'WarMachine/Modern',
        'name': '戰 爭 機 器 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'DoctorStrange',
        'class': 'heroIcon preset men blast humen justice',
        'url': './Character.html?id=DoctorStrange&uniform=AllNewAllDifferent',
        'bgImg': 'DoctorStrange/AllNewAllDifferent',
        'name': '奇 異 博 士 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'NegasonicTeenageWarhead',
        'class': 'heroIcon preset women blast xmen justice',
        'url': './Character.html?id=NegasonicTeenageWarhead&uniform=Modern',
        'bgImg': 'NegasonicTeenageWarhead/Modern',
        'name': '青 少 女 彈 頭 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Cable',
        'class': 'heroIcon preset men blast xmen justice arms',
        'url': './Character.html?id=Cable&uniform=Modern',
        'bgImg': 'Cable/Modern',
        'name': '機 堡 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Cyclops',
        'class': 'heroIcon preset men blast xmen justice',
        'url': './Character.html?id=Cyclops&uniform=Classic',
        'bgImg': 'Cyclops/Classic',
        'name': '獨 眼 龍 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'CyclopsAgeOfApocalypse',
        'class': 'heroIcon men blast xmen villain',
        'url': './Character.html?id=Cyclops&uniform=AgeOfApocalypse',
        'bgImg': 'Cyclops/AgeOfApocalypse',
        'name': '獨眼龍-天啟紀元 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'CyclopsPhoenixFive',
        'class': 'heroIcon men blast xmen villain phoenix',
        'url': './Character.html?id=Cyclops&uniform=PhoenixFive',
        'bgImg': 'Cyclops/PhoenixFive',
        'name': '獨眼龍-鳳凰5人組 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'JeanGrey',
        'class': 'heroIcon preset women blast xmen justice phoenix spirit',
        'url': './Character.html?id=JeanGrey&uniform=Phoenix',
        'bgImg': 'JeanGrey/Phoenix',
        'name': '琴 葛 雷 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'JeanGrerMarvel',
        'class': 'heroIcon women universal xmen justice phoenix spirit',
        'url': './Character.html?id=JeanGrey&uniform=Marvel',
        'bgImg': 'JeanGrey/Marvel',
        'name': '琴葛雷-驚奇少女 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'SharonRogers',
        'class': 'heroIcon preset women blast humen justice leader',
        'url': './Character.html?id=SharonRogers&uniform=75year',
        'bgImg': 'SharonRogers/75year',
        'name': '雪 倫．羅 傑 斯 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'AncientOne',
        'class': 'heroIcon preset men blast humen justice leader',
        'url': './Character.html?id=AncientOne&uniform=Modern',
        'bgImg': 'AncientOne/Modern',
        'name': '上 古 尊 者 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'AncientOneDoctorStrange',
        'class': 'heroIcon women blast humen justice leader',
        'url': './Character.html?id=AncientOne&uniform=DoctorStrange',
        'bgImg': 'AncientOne/DoctorStrange',
        'name': '上古尊者-奇異博士 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'Iceman',
        'class': 'heroIcon preset men blast xmen justice',
        'url': './Character.html?id=Iceman&uniform=Modern',
        'bgImg': 'Iceman/Modern',
        'name': '冰 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'WeaponHex',
        'class': 'heroIcon preset women blast xmen justice',
        'url': './Character.html?id=WeaponHex&uniform=Fusion',
        'bgImg': 'WeaponHex/Fusion',
        'name': '咒 術 武 器 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Infernd',
        'class': 'heroIcon preset men blast inhumen justice fire',
        'url': './Character.html?id=Infernd&uniform=AllNewAllDifferent',
        'bgImg': 'Infernd/AllNewAllDifferent',
        'name': '地 獄 火 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Wiccan',
        'class': 'heroIcon preset men blast humen justice',
        'url': './Character.html?id=Wiccan&uniform=NewAvengers',
        'bgImg': 'Wiccan/NewAvengers',
        'name': '巫 術 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Vision',
        'class': 'heroIcon preset men blast biological justice',
        'url': './Character.html?id=Vision&uniform=Modern',
        'bgImg': 'Vision/Modern',
        'name': '幻 視 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'VisionTheAvengersAgeofUltron',
        'class': 'heroIcon men universal biological justice',
        'url': './Character.html?id=Vision&uniform=TheAvengersAgeofUltron',
        'bgImg': 'Vision/TheAvengersAgeofUltron',
        'name': '幻視: 復仇者聯盟-奧創紀元 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'Rescue',
        'class': 'heroIcon preset women blast humen justice mechanical leader',
        'url': './Character.html?id=Rescue&uniform=TheAvengersEndGame',
        'bgImg': 'Rescue/TheAvengersEndGame',
        'name': '救 援 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'StarLord',
        'class': 'heroIcon preset men blast humen justice arms',
        'url': './Character.html?id=StarLord&uniform=GuardiansOfTheGalaxy',
        'bgImg': 'StarLord/GuardiansOfTheGalaxy',
        'name': '星 爵 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Storm',
        'class': 'heroIcon preset women blast xmen justice',
        'url': './Character.html?id=Storm&uniform=Modern',
        'bgImg': 'Storm/Modern',
        'name': '暴 風 女 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'MoonGirl',
        'class': 'heroIcon preset women blast inhumans justice arms leader',
        'url': './Character.html?id=MoonGirl&uniform=MarvelNow',
        'bgImg': 'MoonGirl/MarvelNow',
        'name': '月 亮 女 孩 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'LincolnCampbell',
        'class': 'heroIcon preset men blast inhumans justice',
        'url': './Character.html?id=LincolnCampbell&uniform=AgentsOfSHIELD',
        'bgImg': 'LincolnCampbell/AgentsOfSHIELD',
        'name': '林 肯．坎 貝 爾 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'SisterGrimm',
        'class': 'heroIcon preset women blast humans justice',
        'url': './Character.html?id=SisterGrimm&uniform=AForce',
        'bgImg': 'SisterGrimm/AForce',
        'name': '格 林 姊 妹 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Songbird',
        'class': 'heroIcon preset women blast humans justice',
        'url': './Character.html?id=Songbird&uniform=NewAvengers',
        'bgImg': 'Songbird/NewAvengers',
        'name': '歌 姬 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'KidOmega',
        'class': 'heroIcon preset men blast xmen justice phoenix',
        'url': './Character.html?id=KidOmega&uniform=Modern',
        'bgImg': 'KidOmega/Modern',
        'name': '奧 米 伽 小 子 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Crystal',
        'class': 'heroIcon preset women blast inhumans justice',
        'url': './Character.html?id=Crystal&uniform=AllNewAllDifferent',
        'bgImg': 'Crystal/AllNewAllDifferent',
        'name': '水 晶 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'CrystalFant4stic',
        'class': 'heroIcon women blast inhumans justice f4',
        'url': './Character.html?id=Crystal&uniform=Fant4stic',
        'bgImg': 'Crystal/Fant4stic',
        'name': '水晶: 驚奇4超人 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'RocketRaccoon',
        'class': 'heroIcon preset men blast et justice arms',
        'url': './Character.html?id=RocketRaccoon&uniform=GuardiansOfTheGalaxy',
        'bgImg': 'RocketRaccoon/GuardiansOfTheGalaxy',
        'name': '火 箭 浣 熊 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'RachelSummers',
        'class': 'heroIcon preset women blast xmen justice phoenix',
        'url': './Character.html?id=RachelSummers&uniform=Modern',
        'bgImg': 'RachelSummers/Modern',
        'name': '瑞 秋．桑 瑪 斯 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Bishop',
        'class': 'heroIcon preset men blast xmen justice',
        'url': './Character.html?id=Bishop&uniform=Disband',
        'bgImg': 'Bishop/Disband',
        'name': '畢 曉 普 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Jubilee',
        'class': 'heroIcon preset women blast xmen justice',
        'url': './Character.html?id=Jubilee&uniform=Classic',
        'bgImg': 'Jubilee/Classic',
        'name': '白 光 花 火 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Magik',
        'class': 'heroIcon preset women blast xmen justice',
        'url': './Character.html?id=Magik&uniform=Classic',
        'bgImg': 'Magik/Classic',
        'name': '秘 客 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'MagikPhoenixFive',
        'class': 'heroIcon women blast xmen villain phoenix',
        'url': './Character.html?id=Magik&uniform=PhoenixFive',
        'bgImg': 'Magik/PhoenixFive',
        'name': '秘客: 鳳凰5人組 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'ScarletWitch',
        'class': 'heroIcon preset women blast xmen justiec',
        'url': './Character.html?id=ScarletWitch&uniform=Classic',
        'bgImg': 'ScarletWitch/Classic',
        'name': '緋 紅 女 巫 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'EmmaFrost',
        'class': 'heroIcon preset women blast xmen justice spirit',
        'url': './Character.html?id=EmmaFrost&uniform=Modern',
        'bgImg': 'EmmaFrost/Modern',
        'name': '艾 瑪．佛 斯 特 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'EmmaFrostPhoenixFive',
        'class': 'heroIcon women blast xmen villain spirit phoenix',
        'url': './Character.html?id=EmmaFrost&uniform=PhoenixFive',
        'bgImg': 'EmmaFrost/PhoenixFive',
        'name': '艾瑪佛斯特-鳳凰5人組 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'PhilCoulson',
        'class': 'heroIcon preset men blast humans justice',
        'url': './Character.html?id=PhilCoulson&uniform=AgentsOfSHIELD',
        'bgImg': 'PhilCoulson/AgentsOfSHIELD',
        'name': '菲 爾．考 森 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Mantis',
        'class': 'heroIcon preset women blast et justice',
        'url': './Character.html?id=Mantis&uniform=GuardiansOfTheGalaxy2',
        'bgImg': 'Mantis/GuardiansOfTheGalaxy2',
        'name': '螳 螂 女 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'AdamWarlock',
        'class': 'heroIcon preset women blast biological justice',
        'url': './Character.html?id=AdamWarlock&uniform=Modern',
        'bgImg': 'AdamWarlock/Modern',
        'name': '術 士 亞 當 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Gambit',
        'class': 'heroIcon preset men blast xmen justice',
        'url': './Character.html?id=Gambit&uniform=Modern',
        'bgImg': 'Gambit/Modern',
        'name': '金 牌 手 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'IronHeart',
        'class': 'heroIcon preset women blast humen justice mechanical arms',
        'url': './Character.html?id=IronHeart&uniform=MarvelNow',
        'bgImg': 'IronHeart/MarvelNow',
        'name': '鋼 鐵 心 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'InvisobleWoman',
        'class': 'heroIcon preset women blast humans justice f4',
        'url': './Character.html?id=InvisobleWoman&uniform=Modern',
        'bgImg': 'InvisobleWoman/Modern',
        'name': '隱 形 女 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'HumanTorch',
        'class': 'heroIcon preset men blast humans justice fire f4',
        'url': './Character.html?id=HumanTorch&uniform=Modern',
        'bgImg': 'HumanTorch/Modern',
        'name': '霹 靂 火 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Psylocke',
        'class': 'heroIcon preset women blast xmen justice',
        'url': './Character.html?id=Psylocke&uniform=XForce',
        'bgImg': 'Psylocke/XForce',
        'name': '靈 蝶 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Wasp',
        'class': 'heroIcon preset women blast humans justice',
        'url': './Character.html?id=Wasp&uniform=Modern',
        'bgImg': 'Wasp/Modern',
        'name': '黃 蜂 女 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'WaspNadia',
        'class': 'heroIcon preset women blast humans justice',
        'url': './Character.html?id=WaspNadia&uniform=Modern',
        'bgImg': 'WaspNadia/Modern',
        'name': '黃 蜂 女(納迪婭．范．達因)',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'DaisyJohnson',
        'class': 'heroIcon preset women blast inhumans justice',
        'url': './Character.html?id=DaisyJohnson&uniform=AgentsOfSHIELD',
        'bgImg': 'DaisyJohnson/AgentsOfSHIELD',
        'name': '戴 希．強 森 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'BlueDargon',
        'class': 'heroIcon preset women blast humans justice leader',
        'url': './Character.html?id=BlueDargon&uniform=Modern',
        'bgImg': 'BlueDargon/Modern',
        'name': '青 龍 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'ProfessorX',
        'class': 'heroIcon preset men blast xmen justice leader spirit',
        'url': './Character.html?id=ProfessorX&uniform=Modern',
        'bgImg': 'ProfessorX/Modern',
        'name': 'X 教 授 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Dazzler',
        'class': 'heroIcon preset women blast xmen justice',
        'url': './Character.html?id=Dazzler&uniform=Modern',
        'bgImg': 'Dazzler/Modern',
        'name': '炫 音 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Spiderwoman',
        'class': 'heroIcon preset women blast women justice leader spider',
        'url': './Character.html?id=Spiderwoman&uniform=Modern',
        'bgImg': 'Spiderwoman/Modern',
        'name': '蜘 蛛 女 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Magneto',
        'class': 'heroIcon preset men blast xmen villain spirit',
        'url': './Character.html?id=Magneto&uniform=Classic',
        'bgImg': 'Magneto/Classic',
        'name': '萬 磁 王 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Kaecilius',
        'class': 'heroIcon preset men blast humen villain',
        'url': './Character.html?id=Kaecilius&uniform=DoctorStrange',
        'bgImg': 'Kaecilius/DoctorStrange',
        'name': '卡 西 流 斯 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'UlyssesKlaue',
        'class': 'heroIcon preset men blast humen villain arms',
        'url': './Character.html?id=UlyssesKlaue&uniform=BlackPanther',
        'bgImg': 'UlyssesKlaue/BlackPanther',
        'name': '尤 里 西 斯． 克 勞 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Hydroman',
        'class': 'heroIcon preset men blast humen villain',
        'url': './Character.html?id=Hydroman&uniform=FarFromHome',
        'bgImg': 'Hydroman/FarFromHome',
        'name': '水 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Mysterio',
        'class': 'heroIcon preset men blast humen villain six6',
        'url': './Character.html?id=Mysterio&uniform=Classic',
        'bgImg': 'Mysterio/Classic',
        'name': '神 秘 法 師 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Redskull',
        'class': 'heroIcon preset men blast humen villain',
        'url': './Character.html?id=Redskull&uniform=CaptainAmericaTheFirstAvenger',
        'bgImg': 'Redskull/CaptainAmericaTheFirstAvenger',
        'name': '紅 骷 髏 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'RedskullSecretWars',
        'class': 'heroIcon men speed humen villain',
        'url': './Character.html?id=Redskull&uniform=SecretWars',
        'bgImg': 'Redskull/SecretWars',
        'name': '紅骷髏: 秘密戰爭-紅骷髏 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'Stryfe',
        'class': 'heroIcon preset men blast xmen villain',
        'url': './Character.html?id=Stryfe&uniform=Modern',
        'bgImg': 'Stryfe/Modern',
        'name': '紛 爭 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'BaronMordo',
        'class': 'heroIcon preset men blast humen villain',
        'url': './Character.html?id=BaronMordo&uniform=Classic',
        'bgImg': 'BaronMordo/Classic',
        'name': '莫 度 男 爵 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'BaronMordoDoctorStrange',
        'class': 'heroIcon men speed humen justice',
        'url': './Character.html?id=BaronMordo&uniform=DoctorStrange',
        'bgImg': 'BaronMordo/DoctorStrange',
        'name': '莫度男爵-奇異博士 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Lash',
        'class': 'heroIcon preset men blast inhumans villain',
        'url': './Character.html?id=Lash&uniform=AgentsOfSHIELD',
        'bgImg': 'Lash/AgentsOfSHIELD',
        'name': '萊 許 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Whiplash',
        'class': 'heroIcon preset men blast humen villain',
        'url': './Character.html?id=Whiplash&uniform=Ironman2',
        'bgImg': 'Whiplash/Ironman2',
        'name': '鞭 狂 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Maximus',
        'class': 'heroIcon preset men blast inhumans villain spirit',
        'url': './Character.html?id=Maximus&uniform=WarOfKings',
        'bgImg': 'Maximus/WarOfKings',
        'name': '馬 克 西 穆 斯 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'EnchanTress',
        'class': 'heroIcon preset women blast et villain',
        'url': './Character.html?id=EnchanTress&uniform=Modern',
        'bgImg': 'EnchanTress/Modern',
        'name': '魅 惑 魔 女 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Modok',
        'class': 'heroIcon preset men blast humen villain',
        'url': './Character.html?id=Modok&uniform=Classic',
        'bgImg': 'Modok/Classic',
        'name': '魔 多 客 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Malekith',
        'class': 'heroIcon preset men blast et villain',
        'url': './Character.html?id=Malekith&uniform=DarkWord',
        'bgImg': 'Malekith/DarkWord',
        'name': '魔 雷 基 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'YellowJacket',
        'class': 'heroIcon preset men blast humen villain mechanical',
        'url': './Character.html?id=YellowJacket&uniform=Antman',
        'bgImg': 'YellowJacket/Antman',
        'name': '黃 衫 俠 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'MisterSinister',
        'class': 'heroIcon preset men blast xmen villain',
        'url': './Character.html?id=MisterSinister&uniform=Modern',
        'bgImg': 'MisterSinister/Modern',
        'name': '驚 惡 先 生 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'MoonStone',
        'class': 'heroIcon preset women blast humen villain theDarkAvengers',
        'url': './Character.html?id=MoonStone&uniform=Modern',
        'bgImg': 'MoonStone/Modern',
        'name': '月 光 石 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'BlackWidow',
        'class': 'heroIcon preset women speed humen justice',
        'url': './Character.html?id=BlackWidow&uniform=TheAvengers',
        'bgImg': 'BlackWidow/TheAvengers',
        'name': '黑 寡 婦 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Hawekeye',
        'class': 'heroIcon preset men speed humen justice arms',
        'url': './Character.html?id=Hawekeye&uniform=TheAvengers',
        'bgImg': 'Hawekeye/TheAvengers',
        'name': '鷹 眼 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Spiderman',
        'class': 'heroIcon preset men speed humen justice spider leader',
        'url': './Character.html?id=Spiderman&uniform=Classic',
        'bgImg': 'Spiderman/Classic',
        'name': '蜘 蛛 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Falcon',
        'class': 'heroIcon preset men speed humen justice leader',
        'url': './Character.html?id=Falcon&uniform=CaptainAmericaTheWinterSoldier',
        'bgImg': 'Falcon/CaptainAmericaTheWinterSoldier',
        'name': '獵 鷹 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'WinterSoldier',
        'class': 'heroIcon preset men speed humen justice arms',
        'url': './Character.html?id=WinterSoldier&uniform=CaptainAmericaTheWinterSoldier',
        'bgImg': 'WinterSoldier/CaptainAmericaTheWinterSoldier',
        'name': '酷 寒 戰 士 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Quicksilver',
        'class': 'heroIcon preset men speed xmen justice',
        'url': './Character.html?id=Quicksilver&uniform=Classic',
        'bgImg': 'Quicksilver/Classic',
        'name': '快 銀 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'NickFury',
        'class': 'heroIcon preset men speed humen justice arms leader',
        'url': './Character.html?id=NickFury&uniform=Modern',
        'bgImg': 'NickFury/Modern',
        'name': '尼 克 福 瑞 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Deadpool',
        'class': 'heroIcon preset men speed xmen justice arms',
        'url': './Character.html?id=Deadpool&uniform=Modern',
        'bgImg': 'Deadpool/Modern',
        'name': '死 恃 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'DeadpoolGirl',
        'class': 'heroIcon women speed xmen justice arms',
        'url': './Character.html?id=Deadpool&uniform=Girl',
        'bgImg': 'Deadpool/Girl',
        'name': '女 死 恃 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'DeadpoolParty',
        'class': 'heroIcon women speed xmen justice arms',
        'url': './Character.html?id=Deadpool&uniform=Party',
        'bgImg': 'Deadpool/Party',
        'name': '死 恃:節日派對 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'Domind',
        'class': 'heroIcon preset women speed xmen justice arms',
        'url': './Character.html?id=Domind&uniform=XForce',
        'bgImg': 'Domind/XForce',
        'name': '多 米 諾 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Gwenpool',
        'class': 'heroIcon preset women speed humen justice',
        'url': './Character.html?id=Gwenpool&uniform=AllNewAllDifferent',
        'bgImg': 'Gwenpool/AllNewAllDifferent',
        'name': '關 死 恃 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'LunaSnow',
        'class': 'heroIcon preset women speed humen justice leader',
        'url': './Character.html?id=LunaSnow&uniform=Modern',
        'bgImg': 'LunaSnow/Modern',
        'name': '冰 月 花 雪 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Antman',
        'class': 'heroIcon preset men speed humen justice',
        'url': './Character.html?id=Antman&uniform=Modern',
        'bgImg': 'Antman/Modern',
        'name': '蟻 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Agent13',
        'class': 'heroIcon preset women speed humen justice',
        'url': './Character.html?id=Agent13&uniform=Modern',
        'bgImg': 'Agent13/Modern',
        'name': '13 特 工 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'X23',
        'class': 'heroIcon preset women speed xmen justice',
        'url': './Character.html?id=X23&uniform=Classic',
        'bgImg': 'X23/Classic',
        'name': 'X 23 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Mockingbird',
        'class': 'heroIcon preset women speed humen justice',
        'url': './Character.html?id=Mockingbird&uniform=HeroAge',
        'bgImg': 'Mockingbird/HeroAge',
        'name': '仿 聲 鳥 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'KittyPryde',
        'class': 'heroIcon preset women speed xmen justice arms',
        'url': './Character.html?id=KittyPryde&uniform=Modern',
        'bgImg': 'KittyPryde/Modern',
        'name': '凱 蒂． 普 萊 德 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Yondu',
        'class': 'heroIcon preset men speed et justice arms',
        'url': './Character.html?id=Yondu&uniform=GuardiansOfTheGalaxy',
        'bgImg': 'Yondu/GuardiansOfTheGalaxy',
        'name': '勇 度 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Karnak',
        'class': 'heroIcon preset men speed inhumans justice',
        'url': './Character.html?id=Karnak&uniform=WarOfKings',
        'bgImg': 'Karnak/WarOfKings',
        'name': '卡 爾 奈 克 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Hellcat',
        'class': 'heroIcon preset women speed humen justice',
        'url': './Character.html?id=Hellcat&uniform=AllNewAllDifferent',
        'bgImg': 'Hellcat/AllNewAllDifferent',
        'name': '地 獄 貓 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Nightcrawler',
        'class': 'heroIcon preset men speed xmen justice leader',
        'url': './Character.html?id=Nightcrawler&uniform=Modern',
        'bgImg': 'Nightcrawler/Modern',
        'name': '夜 行 者 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'DareDevil',
        'class': 'heroIcon preset men speed humen justice leader',
        'url': './Character.html?id=DareDevil&uniform=Modern',
        'bgImg': 'DareDevil/Modern',
        'name': '夜 魔 俠 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Angel',
        'class': 'heroIcon preset men speed xmen justice',
        'url': './Character.html?id=Angel&uniform=Modern',
        'bgImg': 'Angel/Modern',
        'name': '天 使 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'SpiderGwen',
        'class': 'heroIcon preset women speed humen justice spider leader',
        'url': './Character.html?id=SpiderGwen&uniform=AllNewAllDifferent',
        'bgImg': 'SpiderGwen/AllNewAllDifferent',
        'name': '女 蜘 蛛 人．關 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'SpiderGwenSymbiont',
        'class': 'heroIcon preset women speed humen villain spider symbiont',
        'url': './Character.html?id=SpiderGwen&uniform=symbiont',
        'bgImg': 'SpiderGwen/symbiont',
        'name': '女 蜘 蛛 人．關: 猛毒關',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'Rogue',
        'class': 'heroIcon preset women speed xmen justice',
        'url': './Character.html?id=Rogue&uniform=Classic',
        'bgImg': 'Rogue/Classic',
        'name': '小 淘 氣 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Elektra',
        'class': 'heroIcon preset women speed humen justice arms',
        'url': './Character.html?id=Elektra&uniform=Classic',
        'bgImg': 'Elektra/Classic',
        'name': '幻 影 殺 手 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'KidKaiju',
        'class': 'heroIcon preset men speed inhumen justice',
        'url': './Character.html?id=KidKaiju&uniform=Monster',
        'bgImg': 'KidKaiju/Monster',
        'name': '怪 獸 小 子 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'SquirrelGirl',
        'class': 'heroIcon preset women speed humen justice',
        'url': './Character.html?id=SquirrelGirl&uniform=NewAvengers',
        'bgImg': 'SquirrelGirl/NewAvengers',
        'name': '松 鼠 女 孩 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Aero',
        'class': 'heroIcon preset women speed humen justice leader',
        'url': './Character.html?id=Aero&uniform=Modern',
        'bgImg': 'Aero/Modern',
        'name': '氣 旋 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Wave',
        'class': 'heroIcon preset women speed humen justice',
        'url': './Character.html?id=Wave&uniform=Modern',
        'bgImg': 'Wave/Modern',
        'name': '浪 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Wong',
        'class': 'heroIcon preset men speed humen justice',
        'url': './Character.html?id=Wong&uniform=AllNewAllDifferent',
        'bgImg': 'Wong/AllNewAllDifferent',
        'name': '王 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Fantomex',
        'class': 'heroIcon preset men speed xmen justice arms',
        'url': './Character.html?id=Fantomex&uniform=XForece',
        'bgImg': 'Fantomex/XForece',
        'name': '白 幽 靈 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'WhiteFox',
        'class': 'heroIcon preset women speed humen justice leader',
        'url': './Character.html?id=WhiteFox&uniform=Modern',
        'bgImg': 'WhiteFox/Modern',
        'name': '白 狐 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Fandral',
        'class': 'heroIcon preset men speed et justice',
        'url': './Character.html?id=Fandral&uniform=Modern',
        'bgImg': 'Fandral/Modern',
        'name': '范 達 爾 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Shuri',
        'class': 'heroIcon preset women speed humen justice leader',
        'url': './Character.html?id=Shuri&uniform=MarvelLegacy',
        'bgImg': 'Shuri/MarvelLegacy',
        'name': '舒 莉 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'ElsaBloodstone',
        'class': 'heroIcon preset women speed humen justice arms',
        'url': './Character.html?id=ElsaBloodstone&uniform=Modern',
        'bgImg': 'ElsaBloodstone/Modern',
        'name': '艾 爾 莎． 血 石 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Gamora',
        'class': 'heroIcon preset women speed et justice arms',
        'url': './Character.html?id=Gamora&uniform=GuardiansOfTheGalaxy',
        'bgImg': 'Gamora/GuardiansOfTheGalaxy',
        'name': '葛 摩 拉 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Silk',
        'class': 'heroIcon preset women speed humen justice spider',
        'url': './Character.html?id=Silk&uniform=AllNewAllDifferent',
        'bgImg': 'Silk/AllNewAllDifferent',
        'name': '蛛 絲 女 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'SpidermanMiles',
        'class': 'heroIcon preset men speed humen justice spider leader',
        'url': './Character.html?id=SpidermanMiles&uniform=AllNewAllDifferent',
        'bgImg': 'SpidermanMiles/AllNewAllDifferent',
        'name': '蜘 蛛 人(邁爾斯． 摩拉斯)',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'SpidermanMilesAbsoluteCarnage',
        'class': 'heroIcon preset men combat humen villain spider symbiont',
        'url': './Character.html?id=SpidermanMiles&uniform=AbsoluteCarnage',
        'bgImg': 'SpidermanMiles/AbsoluteCarnage',
        'name': '蜘蛛人(邁爾斯．摩拉斯):絕對屠殺',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'Spider2099',
        'class': 'heroIcon preset men speed humen justice spider leader',
        'url': './Character.html?id=Spider2099&uniform=Modern',
        'bgImg': 'Spider2099/Modern',
        'name': '蜘 蛛 人2099 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'ArachKnight',
        'class': 'heroIcon preset men speed humen justice spider leader',
        'url': './Character.html?id=ArachKnight&uniform=Fusion',
        'bgImg': 'ArachKnight/Fusion',
        'name': '蜘 蛛 騎 士 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'MistyKnght',
        'class': 'heroIcon preset women speed humen justice arms',
        'url': './Character.html?id=MistyKnght&uniform=AllNewAllDifferent',
        'bgImg': 'MistyKnght/AllNewAllDifferent',
        'name': '迷 霧 騎 士 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'HawkeyeKate',
        'class': 'heroIcon preset women speed humen justice',
        'url': './Character.html?id=HawkeyeKate&uniform=MarvelNow',
        'bgImg': 'HawkeyeKate/MarvelNow',
        'name': '鷹 眼(凱特． 畢夏普)',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'SunBird',
        'class': 'heroIcon preset men speed humen justice',
        'url': './Character.html?id=SunBird&uniform=Modern',
        'bgImg': 'SunBird/Modern',
        'name': '鳳 皇 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'DarkHawk',
        'class': 'heroIcon preset men speed humen justice leader',
        'url': './Character.html?id=DarkHawk&uniform=Modern',
        'bgImg': 'DarkHawk/Modern',
        'name': '黑 鷹 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'ScarletSpider',
        'class': 'heroIcon preset men speed humen justice spider leader',
        'url': './Character.html?id=ScarletSpider&uniform=Modern',
        'bgImg': 'ScarletSpider/Modern',
        'name': '猩 紅 蜘 蛛 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Sin',
        'class': 'heroIcon preset women speed humen villain arms',
        'url': './Character.html?id=Sin&uniform=AllNewAllDifferent',
        'bgImg': 'Sin/AllNewAllDifferent',
        'name': '原 罪 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Ghost',
        'class': 'heroIcon preset men speed humen villain mechanical',
        'url': './Character.html?id=Ghost&uniform=Classic',
        'bgImg': 'Ghost/Classic',
        'name': '幽 靈 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'GhostAntmanAndTheWasp',
        'class': 'heroIcon preset women speed humen villain mechanical',
        'url': './Character.html?id=Ghost&uniform=AntmanAndTheWasp',
        'bgImg': 'Ghost/AntmanAndTheWasp',
        'name': '幽靈: 蟻人與黃蜂女 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'KravenHunter',
        'class': 'heroIcon preset men speed humen villain arms six6',
        'url': './Character.html?id=KravenHunter&uniform=Modern',
        'bgImg': 'KravenHunter/Modern',
        'name': '獵 人 克 萊 文 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Vulture',
        'class': 'heroIcon preset men speed humen villain six6',
        'url': './Character.html?id=Vulture&uniform=Classic',
        'bgImg': 'Vulture/Classic',
        'name': '禿 鷹 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Korath',
        'class': 'heroIcon preset men speed et villain arms',
        'url': './Character.html?id=Korath&uniform=CaptionMarvel',
        'bgImg': 'Korath/CaptionMarvel',
        'name': '科 拉 特 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'GreenGoblin',
        'class': 'heroIcon preset men speed humen villain',
        'url': './Character.html?id=GreenGoblin&uniform=Classic',
        'bgImg': 'GreenGoblin/Classic',
        'name': '綠 惡 魔 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'GreenGoblinTheDarkAvengers',
        'class': 'heroIcon preset men blast humen villain theDarkAvengers',
        'url': './Character.html?id=GreenGoblin&uniform=TheDarkAvengers',
        'bgImg': 'GreenGoblin/TheDarkAvengers',
        'name': '綠 惡 魔: 黑暗復仇者 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'GreenGoblinSuper',
        'class': 'heroIcon men speed humen villain',
        'url': './Character.html?id=GreenGoblin&uniform=Super',
        'bgImg': 'GreenGoblin/Super',
        'name': '綠惡魔-究極 ',
        'gender': 'm',
        'display': 'display:none',
    },

    {
        'id': 'BaronZemo',
        'class': 'heroIcon preset men speed humen villain',
        'url': './Character.html?id=BaronZemo&uniform=Modern',
        'bgImg': 'BaronZemo/Modern',
        'name': '齊 莫 男 爵 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Electro',
        'class': 'heroIcon preset men speed humen villain six6',
        'url': './Character.html?id=Electro&uniform=Modern',
        'bgImg': 'Electro/Modern',
        'name': '電 光 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Blackcat',
        'class': 'heroIcon preset women speed humen villain',
        'url': './Character.html?id=Blackcat&uniform=Modern',
        'bgImg': 'Blackcat/Modern',
        'name': '黑 貓 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Viper',
        'class': 'heroIcon preset women speed humen villain',
        'url': './Character.html?id=Viper&uniform=Modern',
        'bgImg': 'Viper/Modern',
        'name': '毒 蛇 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Mystique',
        'class': 'heroIcon preset women speed xmen villain arms',
        'url': './Character.html?id=Mystique&uniform=Modern',
        'bgImg': 'Mystique/Modern',
        'name': '魔 形 女 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Yelena',
        'class': 'heroIcon preset women speed humen villain',
        'url': './Character.html?id=Yelena&uniform=Modern',
        'bgImg': 'Yelena/Modern',
        'name': '葉 蓮 娜 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'YelenaBlackWidow',
        'class': 'heroIcon women speed humen justice',
        'url': './Character.html?id=Yelena&uniform=BlackWidow',
        'bgImg': 'Yelena/BlackWidow',
        'name': '葉蓮娜: 漫威黑寡婦 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'YelenaIce',
        'class': 'heroIcon women speed humen justice',
        'url': './Character.html?id=Yelena&uniform=Ice',
        'bgImg': 'Yelena/Ice',
        'name': '葉蓮娜: 漫威黑寡婦(冰雪戰衣)',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'Scorpion',
        'class': 'heroIcon women speed humen villain',
        'url': './Character.html?id=Scorpion&uniform=Modern',
        'bgImg': 'Scorpion/Modern',
        'name': '蠍 子 人',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Thor',
        'class': 'heroIcon preset men universal et justice leader',
        'url': './Character.html?id=Thor&uniform=TheAvengers',
        'bgImg': 'Thor/TheAvengers',
        'name': '索 爾 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'CaptainMarvel',
        'class': 'heroIcon preset women universal humen justice leader',
        'url': './Character.html?id=CaptainMarvel&uniform=Modern',
        'bgImg': 'CaptainMarvel/Modern',
        'name': '驚 奇 隊 長 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Slapstick',
        'class': 'heroIcon preset men universal humen justice',
        'url': './Character.html?id=Slapstick&uniform=Modern',
        'bgImg': 'Slapstick/Modern',
        'name': '鬧 劇 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Clea',
        'class': 'heroIcon preset women universal et justice',
        'url': './Character.html?id=Clea&uniform=Modern',
        'bgImg': 'Clea/Modern',
        'name': '克 莉 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'HellStorm',
        'class': 'heroIcon preset men universal humen justice',
        'url': './Character.html?id=HellStorm&uniform=Modern',
        'bgImg': 'HellStorm/Modern',
        'name': '地 獄 風 暴 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Hyperion',
        'class': 'heroIcon preset men universal et justice leader',
        'url': './Character.html?id=Hyperion&uniform=AllNewAllDifferent',
        'bgImg': 'Hyperion/AllNewAllDifferent',
        'name': '太 陽 神 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Singularity',
        'class': 'heroIcon preset women universal et justice',
        'url': './Character.html?id=Singularity&uniform=Aforce',
        'bgImg': 'Singularity/Aforce',
        'name': '奇 點 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Odin',
        'class': 'heroIcon preset men universal et justice',
        'url': './Character.html?id=Odin&uniform=Modern',
        'bgImg': 'Odin/Modern',
        'name': '奧 丁 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'DoctorVoodoo',
        'class': 'heroIcon preset men universal humen justice',
        'url': './Character.html?id=DoctorVoodoo&uniform=Modern',
        'bgImg': 'DoctorVoodoo/Modern',
        'name': '巫 毒 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'GhostRider',
        'class': 'heroIcon preset men universal humen justice leader fire',
        'url': './Character.html?id=GhostRider&uniform=Classic',
        'bgImg': 'GhostRider/Classic',
        'name': '惡 靈 戰 警 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'GhostRiderRobbie',
        'class': 'heroIcon preset men universal humen justice fire',
        'url': './Character.html?id=GhostRiderRobbie&uniform=MarvelNow',
        'bgImg': 'GhostRiderRobbie/MarvelNow',
        'name': '惡靈戰警(羅比． 雷伊斯)',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'GhostPanther',
        'class': 'heroIcon preset men universal humen justice fire',
        'url': './Character.html?id=GhostPanther&uniform=Fusion',
        'bgImg': 'GhostPanther/Fusion',
        'name': '惡 靈 黑 豹 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Angela',
        'class': 'heroIcon preset women universal et justice',
        'url': './Character.html?id=Angela&uniform=Modern',
        'bgImg': 'Angela/Modern',
        'name': '戰 鬥 天 使 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Satana',
        'class': 'heroIcon preset women universal humen justice fire',
        'url': './Character.html?id=Satana&uniform=Modern',
        'bgImg': 'Satana/Modern',
        'name': '撒 旦 娜 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'NovaSam',
        'class': 'heroIcon preset men universal humen justice',
        'url': './Character.html?id=NovaSam&uniform=AllNewAllDifferent',
        'bgImg': 'NovaSam/AllNewAllDifferent',
        'name': '新星(山姆． 亞歷山大)',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Heimdall',
        'class': 'heroIcon preset men universal et justice',
        'url': './Character.html?id=Heimdall&uniform=Ragnarok',
        'bgImg': 'Heimdall/Ragnarok',
        'name': '海 姆 達 爾 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'ThorJane',
        'class': 'heroIcon preset women universal humen justice',
        'url': './Character.html?id=ThorJane&uniform=AllNewAllDifferent',
        'bgImg': 'ThorJane/AllNewAllDifferent',
        'name': '索爾(珍． 佛斯特)',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Medusa',
        'class': 'heroIcon preset women universal inhumans justice',
        'url': './Character.html?id=Medusa&uniform=AllNewAllDifferent',
        'bgImg': 'Medusa/AllNewAllDifferent',
        'name': '美 杜 莎 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'BlueMarvel',
        'class': 'heroIcon preset men universal humen justice leader',
        'url': './Character.html?id=BlueMarvel&uniform=TheUltimates',
        'bgImg': 'BlueMarvel/TheUltimates',
        'name': '藍 驚 奇 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'SilverSurfer',
        'class': 'heroIcon preset men universal et justice',
        'url': './Character.html?id=SilverSurfer&uniform=Modern',
        'bgImg': 'SilverSurfer/Modern',
        'name': '銀 色 衝 浪 手 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'IronHammer',
        'class': 'heroIcon preset men universal et justice mechanical',
        'url': './Character.html?id=IronHammer&uniform=Fusion',
        'bgImg': 'IronHammer/Fusion',
        'name': '鋼 鐵 之 槌 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Quasar',
        'class': 'heroIcon preset women universal humen justice',
        'url': './Character.html?id=Quasar&uniform=AllNewAllDifferent',
        'bgImg': 'Quasar/AllNewAllDifferent',
        'name': '類星體(艾薇德． 金凱德)',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'BlackBolt',
        'class': 'heroIcon preset men universal inhumans justice',
        'url': './Character.html?id=BlackBolt&uniform=Modern',
        'bgImg': 'BlackBolt/Modern',
        'name': '黑 霹 雷 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'ShadowShell',
        'class': 'heroIcon preset women universal humen justice',
        'url': './Character.html?id=ShadowShell&uniform=Modern',
        'bgImg': 'ShadowShell/Modern',
        'name': '玄 武 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'NovaRichard',
        'class': 'heroIcon preset men universal humen justice leader',
        'url': './Character.html?id=NovaRichard&uniform=Modern',
        'bgImg': 'NovaRichard/Modern',
        'name': '新 星 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'BetaRayBill',
        'class': 'heroIcon preset men universal et justice leader',
        'url': './Character.html?id=BetaRayBill&uniform=Modern',
        'bgImg': 'BetaRayBill/Modern',
        'name': '貝 塔 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'PhylaVell',
        'class': 'heroIcon preset women universal et justice leader',
        'url': './Character.html?id=PhylaVell&uniform=Modern',
        'bgImg': 'PhylaVell/Modern',
        'name': '菲 拉 威 爾 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Sentry',
        'class': 'heroIcon preset men universal et justice theDarkAvengers',
        'url': './Character.html?id=Sentry&uniform=Modern',
        'bgImg': 'Sentry/Modern',
        'name': '哨 兵 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Thanos',
        'class': 'heroIcon preset men universal et villain',
        'url': './Character.html?id=Thanos&uniform=Unlimited',
        'bgImg': 'Thanos/Unlimited',
        'name': '薩 諾 斯 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Loki',
        'class': 'heroIcon preset men universal et villain',
        'url': './Character.html?id=Loki&uniform=TheAvengers',
        'bgImg': 'Loki/TheAvengers',
        'name': '洛 基 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'LokiLady',
        'class': 'heroIcon women universal et villain',
        'url': './Character.html?id=Loki&uniform=Lady',
        'bgImg': 'Loki/Lady',
        'name': '洛基: 淑女洛基 ',
        'gender': 'w',
        'display': 'display:none',
    },

    {
        'id': 'Antiman',
        'class': 'heroIcon preset men universal humen villain',
        'url': './Character.html?id=Antiman&uniform=AllNewAllDifferent',
        'bgImg': 'Antiman/AllNewAllDifferent',
        'name': '反 物 質 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Dormammu',
        'class': 'heroIcon preset men universal et villain',
        'url': './Character.html?id=Dormammu&uniform=Classic',
        'bgImg': 'Dormammu/Classic',
        'name': '多 瑪 暮 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Ultron',
        'class': 'heroIcon preset men universal biological villain mechanical',
        'url': './Character.html?id=Ultron&uniform=Modern',
        'bgImg': 'Ultron/Modern',
        'name': '奧 創 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'CorvusGlaive',
        'class': 'heroIcon preset men universal et villain',
        'url': './Character.html?id=CorvusGlaive&uniform=Unlimited',
        'bgImg': 'CorvusGlaive/Unlimited',
        'name': '掠 鴨 兇 刃 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'MorganLefav',
        'class': 'heroIcon preset women universal humen villain',
        'url': './Character.html?id=MorganLefav&uniform=Modern',
        'bgImg': 'MorganLefav/Modern',
        'name': '摩 根 娜 勒 菲 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'SuperGiant',
        'class': 'heroIcon preset women universal et villain spirit',
        'url': './Character.html?id=SuperGiant&uniform=Unlimited',
        'bgImg': 'SuperGiant/Unlimited',
        'name': '昊 天 極 星 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'BlackDwarf',
        'class': 'heroIcon preset men universal et villain',
        'url': './Character.html?id=BlackDwarf&uniform=Unlimited',
        'bgImg': 'BlackDwarf/Unlimited',
        'name': '星 駭 寂 滅 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'ProximaMidnight',
        'class': 'heroIcon preset women universal et villain',
        'url': './Character.html?id=ProximaMidnight&uniform=Unlimited',
        'bgImg': 'ProximaMidnight/Unlimited',
        'name': '闇 夜 無 星 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'DoctorDoom',
        'class': 'heroIcon preset men universal humen villain',
        'url': './Character.html?id=DoctorDoom&uniform=Modern',
        'bgImg': 'DoctorDoom/Modern',
        'name': '末 日 博 士 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Hela',
        'class': 'heroIcon preset women universal et villain',
        'url': './Character.html?id=Hela&uniform=Modern',
        'bgImg': 'Hela/Modern',
        'name': '海 拉 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'EbonyMaw',
        'class': 'heroIcon preset men universal et villain',
        'url': './Character.html?id=EbonyMaw&uniform=Unlimited',
        'bgImg': 'EbonyMaw/Unlimited',
        'name': '烏 木 邪 心 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Victorious',
        'class': 'heroIcon preset women universal humen villain',
        'url': './Character.html?id=Victorious&uniform=Modern',
        'bgImg': 'Victorious/Modern',
        'name': '維 克 多 利 斯 ',
        'gender': 'w',
        'display': '',
    },

    {
        'id': 'Ronan',
        'class': 'heroIcon preset men universal et villain spirit',
        'url': './Character.html?id=Ronan&uniform=GuardiansOfTheGalaxy',
        'bgImg': 'Ronan/GuardiansOfTheGalaxy',
        'name': '羅 南 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Sentinel',
        'class': 'heroIcon preset no universal biological villain mechanical',
        'url': './Character.html?id=Sentinel&uniform=Modern',
        'bgImg': 'Sentinel/Modern',
        'name': '哨 兵 機 器 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Thane',
        'class': 'heroIcon preset men universal inhumans villain',
        'url': './Character.html?id=Thane&uniform=Modern',
        'bgImg': 'Thane/Modern',
        'name': '塞 恩 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Moleculeman',
        'class': 'heroIcon preset men universal humen villain',
        'url': './Character.html?id=Moleculeman&uniform=Modern',
        'bgImg': 'Moleculeman/Modern',
        'name': '分 子 人 ',
        'gender': 'm',
        'display': '',
    },

    {
        'id': 'Destrover',
        'class': 'heroIcon preset no universal biological neutral',
        'url': './Character.html?id=Destrover&uniform=Classic',
        'bgImg': 'Destrover/Classic',
        'name': '毀 滅 者 ',
        'gender': 'm',
        'display': '',
    },
];