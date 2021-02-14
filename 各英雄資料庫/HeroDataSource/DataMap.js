function GetDataMap(id, uniform) {
    var dataMapId = id + uniform;
    return heroDataMap.find(x => x.Id === dataMapId);
}

var heroDataMap = [
    // 美國隊長
    {
        'Id': 'CaptainAmericaTheAvengers',
        'IntroId': 'CaptainAmerica',
        'UniformListId': 'CaptainAmericaSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Combat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },
    // 美國隊長(秘密戰爭2099)
    {
        'Id': 'CaptainAmericaSecretWars',
        'IntroId': 'CaptainAmerica',
        'UniformListId': 'CaptainAmericaSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Combat',
        'RelatedUniformId': 'CaptainAmericaSecretWars',
        'ChainedUniformId': 'CaptainAmericaSecretWars'
    },
    // 美國隊長(九頭蛇至尊)
    {
        'Id': 'CaptainAmericaHydraSupreme',
        'IntroId': 'CaptainAmerica',
        'UniformListId': 'CaptainAmericaSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Combat',
        'RelatedUniformId': 'CaptainAmericaHydraSupreme',
        'ChainedUniformId': 'CaptainAmericaHydraSupreme'
    },

    // 黑豹
    {
        'Id': 'BlackpantherModern',
        'IntroId': 'Blackpanther',
        'UniformListId': 'BlackpantherSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Combat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 浩克
    {
        'Id': 'HulkTheAvengers',
        'IntroId': 'Hulk',
        'UniformListId': 'HulkSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Combat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 浩克(秘密戰爭-不完美的未來)
    {
        'Id': 'HulkSecretWars',
        'IntroId': 'Hulk',
        'UniformListId': 'HulkSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Combat',
        'RelatedUniformId': 'HulkSecretWars',
        'ChainedUniformId': 'HulkSecretWars'
    },

    // 浩克(不朽浩克)
    {
        'Id': 'HulkImmortal',
        'IntroId': 'Hulk',
        'UniformListId': 'HulkSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Combat',
        'RelatedUniformId': 'HulkImmortal',
        'ChainedUniformId': 'HulkImmortal'
    },

    // 石頭人
    {
        'Id': 'ThingModern',
        'IntroId': 'Thing',
        'UniformListId': 'ThingSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },


    // 野獸
    {
        'Id': 'BeastClassic',
        'IntroId': 'Beast',
        'UniformListId': 'BeastSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 野獸(天啟紀元)
    {
        'Id': 'BeastAgeOfApocalypse',
        'IntroId': 'Beast',
        'UniformListId': 'BeastSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'BeastAgeOfApocalypse',
        'ChainedUniformId': 'BeastAgeOfApocalypse'
    },

    // 鋼人
    {
        'Id': 'ColossusModern',
        'IntroId': 'Colossus',
        'UniformListId': 'ColossusSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 鋼人(鳳凰5人組)
    {
        'Id': 'ColossusPhoenixFive',
        'IntroId': 'Colossus',
        'UniformListId': 'ColossusSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'ColossusPhoenixFive',
        'ChainedUniformId': 'ColossusPhoenixFive'
    },

    // 巨人
    {
        'Id': 'GiantmanModern',
        'IntroId': 'Giantman',
        'UniformListId': 'GiantmanSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 巨人(皮姆奧創)
    {
        'Id': 'GiantmanModern',
        'IntroId': 'Giantman',
        'UniformListId': 'GiantmanSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 女浩克
    {
        'Id': 'ShehulkAForce',
        'IntroId': 'Shehulk',
        'UniformListId': 'ShehulkSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 小浩克
    {
        'Id': 'HulkingNewAvengers',
        'IntroId': 'Hulking',
        'UniformListId': 'HulkingSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 金鋼狼
    {
        'Id': 'WolverineClassic',
        'IntroId': 'Wolverine',
        'UniformListId': 'WolverineSeries',
        'LevelUpInfo': {
            'Type': 'XMenRise',
            'MaxLevel': 70
        },
        'T3Type': 'CombatErip',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 阿美利卡
    {
        'Id': 'AmericaChavezMarvelTheUltimates',
        'IntroId': 'AmericaChavez',
        'UniformListId': 'AmericaChavezSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },


    // 猛毒特工
    {
        'Id': 'AgentVenomAllNewAllDifferent',
        'IntroId': 'AgentVenom',
        'UniformListId': 'AgentVenomSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 驚奇先生
    {
        'Id': 'MisterFantasticModern',
        'IntroId': 'MisterFantastic',
        'UniformListId': 'MisterFantasticSeries',
        'LevelUpInfo': {
            'Type': 'FristFamily',
            'MaxLevel': 70
        },
        'T3Type': 'CombatErip',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 反浩克裝甲
    {
        'Id': 'HulkbusterTheAvengersAgeofUltron',
        'IntroId': 'Hulkbuster',
        'UniformListId': 'HulkbusterSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 戰跡
    {
        'Id': 'WarpathXForce',
        'IntroId': 'Warpath',
        'UniformListId': 'WarpathSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 白虎
    {
        'Id': 'WhiteTigerNewAvengers',
        'IntroId': 'WhiteTiger',
        'UniformListId': 'WhiteTigerSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 納摩
    {
        'Id': 'NamorClassic',
        'IntroId': 'Namor',
        'UniformListId': 'NamorSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Combat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 納摩(鳳凰5人組)
    {
        'Id': 'NamorPhoenixFive',
        'IntroId': 'Namor',
        'UniformListId': 'NamorSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Combat',
        'RelatedUniformId': 'NamorPhoenixFive',
        'ChainedUniformId': 'NamorPhoenixFive'
    },

    // 上氣
    {
        'Id': 'ShangchiModern',
        'IntroId': 'Shangchi',
        'UniformListId': 'ShangchiSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 佛格斯泰格
    {
        'Id': 'VolstaggModern',
        'IntroId': 'Volstagg',
        'UniformListId': 'VolstaggSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 刀鋒戰士
    {
        'Id': 'BladeModern',
        'IntroId': 'Blade',
        'UniformListId': 'BladeSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 制裁者
    {
        'Id': 'PunisherModern',
        'IntroId': 'Punisher',
        'UniformListId': 'PunisherSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 制裁者(宇宙惡靈戰警)
    {
        'Id': 'PunisherGhostRider',
        'IntroId': 'Punisher',
        'UniformListId': 'PunisherSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'PunisherGhostRider',
        'ChainedUniformId': 'PunisherGhostRider'
    },

    // 劍仙
    {
        'Id': 'SwordMasterModern',
        'IntroId': 'SwordMaster',
        'UniformListId': 'SwordMasterSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 力量人
    {
        'Id': 'LukeCageModern',
        'IntroId': 'LukeCage',
        'UniformListId': 'LukeCageSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 希芙
    {
        'Id': 'SifAgentsOfSHIELD',
        'IntroId': 'Sif',
        'UniformListId': 'SifSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 弦月神女
    {
        'Id': 'CrescentModern',
        'IntroId': 'Crescent',
        'UniformListId': 'CrescentSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Combat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 後剛
    {
        'Id': 'HogunModern',
        'IntroId': 'Hogun',
        'UniformListId': 'HogunSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 德克斯
    {
        'Id': 'DraxGuardiansOfTheGalaxy',
        'IntroId': 'Drax',
        'UniformListId': 'DraxSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 月光騎士
    {
        'Id': 'MoonKightModern',
        'IntroId': 'MoonKight',
        'UniformListId': 'MoonKightSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 戈爾工
    {
        'Id': 'GorgonWarOfKings',
        'IntroId': 'Gorgon',
        'UniformListId': 'GorgonSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 古魯特
    {
        'Id': 'GrootGuardiansOfTheGalaxy',
        'IntroId': 'Groot',
        'UniformListId': 'GrootSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 古魯特(秘密戰爭-索爾)
    {
        'Id': 'GrootSecretWars',
        'IntroId': 'Groot',
        'UniformListId': 'GrootSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'GrootSecretWars',
        'ChainedUniformId': 'GrootSecretWars'
    },

    // 古魯特(星際異攻隊2)
    {
        'Id': 'GrootGuardiansOfTheGalaxy2',
        'IntroId': 'Groot',
        'UniformListId': 'GrootSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'GrootGuardiansOfTheGalaxy2',
        'ChainedUniformId': 'GrootGuardiansOfTheGalaxy2'
    },

    // 古魯特(雪花祭典)
    {
        'Id': 'GrootParty',
        'IntroId': 'Groot',
        'UniformListId': 'GrootSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'GrootParty',
        'ChainedUniformId': 'GrootParty'
    },

    // 歌利亞
    {
        'Id': 'GoliathClassic',
        'IntroId': 'Goliath',
        'UniformListId': 'GoliathSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 死亡戰士
    {
        'Id': 'DeathlokAgentsOfSHIELD',
        'IntroId': 'Deathlok',
        'UniformListId': 'DeathlokSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 浩克(阿爾迪斯)
    {
        'Id': 'HulkChoAllNew',
        'IntroId': 'HulkCho',
        'UniformListId': 'HulkChoSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 潔西卡瓊斯
    {
        'Id': 'JessicaJonesModern',
        'IntroId': 'JessicaJones',
        'UniformListId': 'JessicaJonesSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 狼人
    {
        'Id': 'WarwolfSHIELD',
        'IntroId': 'Warwolf',
        'UniformListId': 'WarwolfSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 瓦爾基麗
    {
        'Id': 'ValkyrieRagnarok',
        'IntroId': 'Valkyrie',
        'UniformListId': 'ValkyrieSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 鐵拳俠
    {
        'Id': 'IronfistClassic',
        'IntroId': 'Ironfist',
        'UniformListId': 'IronfistSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 驚奇女士
    {
        'Id': 'KamalaKhanAllNewAllDifferent',
        'IntroId': 'KamalaKhan',
        'UniformListId': 'KamalaKhanSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 驚奇女士(喀拉蚩服裝)
    {
        'Id': 'KamalaKhanKarachi',
        'IntroId': 'KamalaKhan',
        'UniformListId': 'KamalaKhanSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'KamalaKhanKarachi',
        'ChainedUniformId': 'KamalaKhanKarachi'
    },

    // 猩猩人
    {
        'Id': 'GorillamanModern',
        'IntroId': 'Gorillaman',
        'UniformListId': 'GorillamanSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 戰虎
    {
        'Id': 'WarTigerModern',
        'IntroId': 'WarTiger',
        'UniformListId': 'WarTigerSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 角鬥士
    {
        'Id': 'GladiatorModern',
        'IntroId': 'Gladiator',
        'UniformListId': 'GladiatorSeries',
        'LevelUpInfo': {
            'Type': 'Great',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 女紅浩克
    {
        'Id': 'RedShehulkModern',
        'IntroId': 'RedShehulk',
        'UniformListId': 'RedShehulkSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 阿瑞斯
    {
        'Id': 'AresModern',
        'IntroId': 'Ares',
        'UniformListId': 'AresSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 涅布拉
    {
        'Id': 'NebulaGuardiansOfTheGalaxy',
        'IntroId': 'Nebula',
        'UniformListId': 'NebulaSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 涅布拉(復仇者聯盟-終局之戰)
    {
        'Id': 'NebulaTheAvengersEndGame',
        'IntroId': 'Nebula',
        'UniformListId': 'NebulaSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'NebulaTheAvengersEndGame',
        'ChainedUniformId': 'NebulaTheAvengersEndGame'
    },

    // 涅布拉(復仇者隊服)
    {
        'Id': 'NebulaTeamUniform',
        'IntroId': 'Nebula',
        'UniformListId': 'NebulaSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'NebulaTeamUniform',
        'ChainedUniformId': 'NebulaTeamUniform'
    },

    // 紅浩克
    {
        'Id': 'RedHulkModern',
        'IntroId': 'RedHulk',
        'UniformListId': 'RedHulkSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 紅浩克(復仇共生體)
    {
        'Id': 'RedHulkSymbiont',
        'IntroId': 'RedHulk',
        'UniformListId': 'RedHulkSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'RedHulkSymbiont',
        'ChainedUniformId': 'RedHulkSymbiont'
    },

    // 泰坦妮亞
    {
        'Id': 'TitaniaModern',
        'IntroId': 'Titania',
        'UniformListId': 'TitaniaSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 天啟
    {
        'Id': 'ApocalypseAgeOfApocalypse',
        'IntroId': 'Apocalypse',
        'UniformListId': 'ApocalypseSeries',
        'LevelUpInfo': {
            'Type': 'XmenGreat',
            'MaxLevel': 70
        },
        'T3Type': 'CombatGreat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 八爪博士
    {
        'Id': 'DoctorOctopusClassic',
        'IntroId': 'DoctorOctopus',
        'UniformListId': 'DoctorOctopusSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 八爪博士(究極蜘蛛人)
    {
        'Id': 'DoctorOctopusSuper',
        'IntroId': 'DoctorOctopus',
        'UniformListId': 'DoctorOctopusSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': 'DoctorOctopusSuper',
        'ChainedUniformId': 'DoctorOctopusSuper'
    },

    // 八爪博士()
    {
        'Id': 'DoctorOctopusHydra',
        'IntroId': 'DoctorOctopus',
        'UniformListId': 'DoctorOctopusSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': 'DoctorOctopusHydra',
        'ChainedUniformId': 'DoctorOctopusHydra'
    },

    // 金霸王
    {
        'Id': 'KingpinModern',
        'IntroId': 'Kingpin',
        'UniformListId': 'KingpinSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 金霸王(秘密戰爭-裝甲戰爭)
    {
        'Id': 'KingpinSecretWars',
        'IntroId': 'Kingpin',
        'UniformListId': 'KingpinSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'KingpinSecretWars',
        'ChainedUniformId': 'KingpinSecretWars'
    },

    // 猛毒
    {
        'Id': 'VenomClassic',
        'IntroId': 'Venom',
        'UniformListId': 'VenomSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Combat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 猛毒(猛毒-反猛毒)
    {
        'Id': 'VenomAntiVenom',
        'IntroId': 'Venom',
        'UniformListId': 'VenomSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Combat',
        'RelatedUniformId': 'VenomAntiVenom',
        'ChainedUniformId': 'VenomAntiVenom'
    },

    // 猛毒(十界之戰)
    {
        'Id': 'VenomWarOfTheRealms',
        'IntroId': 'Venom',
        'UniformListId': 'VenomSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Combat',
        'RelatedUniformId': 'VenomWarOfTheRealms',
        'ChainedUniformId': 'VenomWarOfTheRealms'
    },

    // 沙人
    {
        'Id': 'SandmanClassic',
        'IntroId': 'Sandman',
        'UniformListId': 'SandmanSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 蜥蜴人
    {
        'Id': 'LizardClassic',
        'IntroId': 'Lizard',
        'UniformListId': 'LizardSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 屠殺
    {
        'Id': 'CarnageAllNewAllDifferent',
        'IntroId': 'Carnage',
        'UniformListId': 'CarnageSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Combat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 靶眼
    {
        'Id': 'BullseyeModern',
        'IntroId': 'Bullseye',
        'UniformListId': 'BullseyeSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 靶眼(黑暗復仇者)
    {
        'Id': 'BullseyeTheDarkAvengers',
        'IntroId': 'Bullseye',
        'UniformListId': 'BullseyeSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': 'BullseyeTheDarkAvengers',
        'ChainedUniformId': 'BullseyeTheDarkAvengers'
    },

    // 十字骨
    {
        'Id': 'CrossBonesCaptainAmericaCivilWar',
        'IntroId': 'CrossBones',
        'UniformListId': 'CrossBonesSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 劍齒虎
    {
        'Id': 'SabretoothFraternity',
        'IntroId': 'Sabretooth',
        'UniformListId': 'SabretoothSeries',
        'LevelUpInfo': {
            'Type': 'XmenStore',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 史泰奇
    {
        'Id': 'SkurgeRagnarok',
        'IntroId': 'Skurge',
        'UniformListId': 'SkurgeSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 吸收人
    {
        'Id': 'AbsorbingmanModern',
        'IntroId': 'Absorbingman',
        'UniformListId': 'AbsorbingmanSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 烏里克
    {
        'Id': 'UlikModern',
        'IntroId': 'Ulik',
        'UniformListId': 'UlikSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 熔岩人
    {
        'Id': 'MoltenmanFarFromHome',
        'IntroId': 'Moltenman',
        'UniformListId': 'MoltenmanSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 犀牛人
    {
        'Id': 'RhinoClassic',
        'IntroId': 'Rhino',
        'UniformListId': 'RhinoSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 米勒娃
    {
        'Id': 'MinnervaModern',
        'IntroId': 'Minnerva',
        'UniformListId': 'MinnervaSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 紅坦克
    {
        'Id': 'JuggernautFraternity',
        'IntroId': 'Juggernaut',
        'UniformListId': 'JuggernautSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 奇爾蒙格
    {
        'Id': 'KillmongerClassic',
        'IntroId': 'Killmonger',
        'UniformListId': 'KillmongerSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 紅色守衛者
    {
        'Id': 'RedGuardianModern',
        'IntroId': 'RedGuardian',
        'UniformListId': 'RedGuardianSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 紅色守衛者(漫威黑寡婦)
    {
        'Id': 'RedGuardianBlockWidow',
        'IntroId': 'RedGuardian',
        'UniformListId': 'RedGuardianSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': 'RedGuardianBlockWidow',
        'ChainedUniformId': 'RedGuardianBlockWidow'
    },

    // 模仿大師
    {
        'Id': 'TaskMasterModern',
        'IntroId': 'TaskMaster',
        'UniformListId': 'TaskMasterSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 戴肯
    {
        'Id': 'DakenModern',
        'IntroId': 'Daken',
        'UniformListId': 'DakenSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 惡型怪
    {
        'Id': 'AbominationModern',
        'IntroId': 'Abomination',
        'UniformListId': 'AbominationSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 尖叫
    {
        'Id': 'ShriekModern',
        'IntroId': 'Shriek',
        'UniformListId': 'ShriekSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 魔比斯
    {
        'Id': 'MorbiusModern',
        'IntroId': 'Morbius',
        'UniformListId': 'MorbiusSeries',
        'LevelUpInfo': {
            'Type': 'CombatNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 鋼鐵人
    {
        'Id': 'IronmanClassic',
        'IntroId': 'Ironman',
        'UniformListId': 'IronmanSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Blast',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 戰爭機器
    {
        'Id': 'WarMachineModern',
        'IntroId': 'WarMachine',
        'UniformListId': 'WarMachineSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 奇異博士
    {
        'Id': 'DoctorStrangeAllNewAllDifferent',
        'IntroId': 'DoctorStrange',
        'UniformListId': 'DoctorStrangeSeries',
        'LevelUpInfo': {
            'Type': 'SupremeMaster',
            'MaxLevel': 70
        },
        'T3Type': 'BlastErip',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 青少年彈頭
    {
        'Id': 'NegasonicTeenageWarheadModern',
        'IntroId': 'NegasonicTeenageWarhead',
        'UniformListId': 'NegasonicTeenageWarheadSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 機堡
    {
        'Id': 'CableModern',
        'IntroId': 'Cable',
        'UniformListId': 'CableSeries',
        'LevelUpInfo': {
            'Type': 'XmenGreat',
            'MaxLevel': 70
        },
        'T3Type': 'BlastErip',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 獨眼龍
    {
        'Id': 'CyclopsClassic',
        'IntroId': 'Cyclops',
        'UniformListId': 'CyclopsSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Blast',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 獨眼龍(天啟紀元)
    {
        'Id': 'CyclopsAgeOfApocalypse',
        'IntroId': 'Cyclops',
        'UniformListId': 'CyclopsSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Blast',
        'RelatedUniformId': 'CyclopsAgeOfApocalypse',
        'ChainedUniformId': 'CyclopsAgeOfApocalypse'
    },

    // 獨眼龍(鳳凰5人組)
    {
        'Id': 'CyclopsClassic',
        'IntroId': 'Cyclops',
        'UniformListId': 'CyclopsSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Blast',
        'RelatedUniformId': 'CyclopsPhoenixFive',
        'ChainedUniformId': 'CyclopsPhoenixFive'
    },

    // 琴葛雷
    {
        'Id': 'JeanGreyPhoenix',
        'IntroId': 'JeanGrey',
        'UniformListId': 'JeanGreySeries',
        'LevelUpInfo': {
            'Type': 'XmenGreat',
            'MaxLevel': 70
        },
        'T3Type': 'BlastGreat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 琴葛雷(驚奇少女)
    {
        'Id': 'JeanGrerMarvelGirl',
        'IntroId': 'JeanGrey',
        'UniformListId': 'JeanGreySeries',
        'LevelUpInfo': {
            'Type': 'XmenGreat',
            'MaxLevel': 70
        },
        'T3Type': 'BlastGreat',
        'RelatedUniformId': 'JeanGrerMarvelGirl',
        'ChainedUniformId': 'JeanGrerMarvelGirl'
    },

    // 雪倫羅傑斯
    {
        'Id': 'SharonRogers75year',
        'IntroId': 'SharonRogers',
        'UniformListId': 'SharonRogersSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Blast',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 上古尊者
    {
        'Id': 'AncientOneModern',
        'IntroId': 'AncientOne',
        'UniformListId': 'AncientOneSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 上古尊者(奇異博士)
    {
        'Id': 'AncientOneDoctorStrange',
        'IntroId': 'AncientOne',
        'UniformListId': 'AncientOneSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'AncientOneDoctorStrange',
        'ChainedUniformId': 'AncientOneDoctorStrange'
    },

    // 冰人
    {
        'Id': 'IcemanModern',
        'IntroId': 'Iceman',
        'UniformListId': 'IcemanSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 咒術武器
    {
        'Id': 'WeaponHexFusion',
        'IntroId': 'WeaponHex',
        'UniformListId': 'WeaponHexSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 地獄火
    {
        'Id': 'InferndAllNewAllDifferent',
        'IntroId': 'Infernd',
        'UniformListId': 'InferndSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 巫術
    {
        'Id': 'WiccanNewAvengers',
        'IntroId': 'Wiccan',
        'UniformListId': 'WiccanSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 幻視
    {
        'Id': 'VisionModern',
        'IntroId': 'Vision',
        'UniformListId': 'VisionSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 幻視(復仇者聯盟-奧創紀元)
    {
        'Id': 'VisionTheAvengersAgeofUltron',
        'IntroId': 'Vision',
        'UniformListId': 'VisionSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'VisionTheAvengersAgeofUltron',
        'ChainedUniformId': 'VisionTheAvengersAgeofUltron'
    },

    // 救援
    {
        'Id': 'RescueTheAvengersEndGame',
        'IntroId': 'Rescue',
        'UniformListId': 'RescueSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 星爵
    {
        'Id': 'StarLordGuardiansOfTheGalaxy',
        'IntroId': 'StarLord',
        'UniformListId': 'StarLordSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 60
        },
        'T3Type': 'GalaxyCommand',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 暴風女
    {
        'Id': 'StormModern',
        'IntroId': 'Storm',
        'UniformListId': 'StormSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Blast',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 月亮女孩
    {
        'Id': 'MoonGirlMarvelNow',
        'IntroId': 'MoonGirl',
        'UniformListId': 'MoonGirlSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 林肯坎貝爾
    {
        'Id': 'LincolnCampbellAgentsOfSHIELD',
        'IntroId': 'LincolnCampbell',
        'UniformListId': 'LincolnCampbellSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 格林姊妹
    {
        'Id': 'SisterGrimmAForce',
        'IntroId': 'SisterGrimm',
        'UniformListId': 'SisterGrimmSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 歌姬
    {
        'Id': 'SongbirdNewAvengers',
        'IntroId': 'Songbird',
        'UniformListId': 'SongbirdSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 奧米伽小子
    {
        'Id': 'KidOmegaModern',
        'IntroId': 'KidOmega',
        'UniformListId': 'KidOmegaSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 水晶
    {
        'Id': 'CrystalAllNewAllDifferent',
        'IntroId': 'Crystal',
        'UniformListId': 'CrystalSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 水晶(驚奇4超人)
    {
        'Id': 'CrystalFant4stic',
        'IntroId': 'Crystal',
        'UniformListId': 'CrystalSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'CrystalFant4stic',
        'ChainedUniformId': 'CrystalFant4stic'
    },

    // 火箭浣熊
    {
        'Id': 'RocketRaccoonGuardiansOfTheGalaxy',
        'IntroId': 'RocketRaccoon',
        'UniformListId': 'RocketRaccoonSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 瑞秋桑瑪斯
    {
        'Id': 'RachelSummersModern',
        'IntroId': 'RachelSummers',
        'UniformListId': 'RachelSummersSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 畢曉普
    {
        'Id': 'BishopDisband',
        'IntroId': 'Bishop',
        'UniformListId': 'BishopSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 白光花火
    {
        'Id': 'JubileeClassic',
        'IntroId': 'Jubilee',
        'UniformListId': 'JubileeSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 秘客
    {
        'Id': 'MagikClassic',
        'IntroId': 'Magik',
        'UniformListId': 'MagikSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 秘客(鳳凰5人組)
    {
        'Id': 'MagikPhoenixFive',
        'IntroId': 'Magik',
        'UniformListId': 'MagikSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'MagikPhoenixFive',
        'ChainedUniformId': 'MagikPhoenixFive'
    },

    // 緋紅女巫
    {
        'Id': 'ScarletWitchClassic',
        'IntroId': 'ScarletWitch',
        'UniformListId': 'ScarletWitchSeries',
        'LevelUpInfo': {
            'Type': 'Great',
            'MaxLevel': 70
        },
        'T3Type': 'BlastGreat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 艾瑪佛斯特
    {
        'Id': 'EmmaFrostModern',
        'IntroId': 'EmmaFrost',
        'UniformListId': 'EmmaFrostSeries',
        'LevelUpInfo': {
            'Type': 'XmenStore',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 艾瑪佛斯特(鳳凰5人組)
    {
        'Id': 'EmmaFrostPhoenixFive',
        'IntroId': 'EmmaFrost',
        'UniformListId': 'EmmaFrostSeries',
        'LevelUpInfo': {
            'Type': 'XmenStore',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'EmmaFrostPhoenixFive',
        'ChainedUniformId': 'EmmaFrostPhoenixFive'
    },

    // 菲爾考森
    {
        'Id': 'PhilCoulsonAgentsOfSHIELD',
        'IntroId': 'PhilCoulson',
        'UniformListId': 'PhilCoulsonSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 螳螂女
    {
        'Id': 'MantisGuardiansOfTheGalaxy2',
        'IntroId': 'Mantis',
        'UniformListId': 'MantisSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 術士亞當
    {
        'Id': 'AdamWarlockModern',
        'IntroId': 'AdamWarlock',
        'UniformListId': 'AdamWarlockSeries',
        'LevelUpInfo': {
            'Type': 'T2Store',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 金牌手
    {
        'Id': 'GambitModern',
        'IntroId': 'Gambit',
        'UniformListId': 'GambitSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 鋼鐵心
    {
        'Id': 'IronHeartMarvelNow',
        'IntroId': 'IronHeart',
        'UniformListId': 'IronHeartSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 隱形女
    {
        'Id': 'InvisobleWomanModern',
        'IntroId': 'InvisobleWoman',
        'UniformListId': 'InvisobleWomanSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 霹靂火
    {
        'Id': 'HumanTorchModern',
        'IntroId': 'HumanTorch',
        'UniformListId': 'HumanTorchSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 靈蝶
    {
        'Id': 'PsylockeXForce',
        'IntroId': 'Psylocke',
        'UniformListId': 'PsylockeSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 黃蜂女
    {
        'Id': 'WaspModern',
        'IntroId': 'Wasp',
        'UniformListId': 'WaspSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 黃蜂女納迪亞
    {
        'Id': 'WaspNadiaModern',
        'IntroId': 'WaspNadia',
        'UniformListId': 'WaspNadiaSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 戴希強森
    {
        'Id': 'DaisyJohnsonAgentsOfSHIELD',
        'IntroId': 'DaisyJohnson',
        'UniformListId': 'DaisyJohnsonSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 青龍
    {
        'Id': 'BlueDargonModern',
        'IntroId': 'BlueDargon',
        'UniformListId': 'BlueDargonSeries',
        'LevelUpInfo': {
            'Type': 'BlastStore',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // X教授
    {
        'Id': 'ProfessorXModern',
        'IntroId': 'ProfessorX',
        'UniformListId': 'ProfessorXSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Blast',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 炫音
    {
        'Id': 'DazzlerModern',
        'IntroId': 'Dazzler',
        'UniformListId': 'DazzlerSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 蜘蛛女
    {
        'Id': 'SpiderwomanModern',
        'IntroId': 'Spiderwoman',
        'UniformListId': 'SpiderwomanSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 萬磁王
    {
        'Id': 'MagnetoClassic',
        'IntroId': 'Magneto',
        'UniformListId': 'MagnetoSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Blast',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 卡西流斯
    {
        'Id': 'KaeciliusDoctorStrange',
        'IntroId': 'Kaecilius',
        'UniformListId': 'KaeciliusSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 尤里西斯克勞
    {
        'Id': 'UlyssesKlaueBlackPanther',
        'IntroId': 'UlyssesKlaue',
        'UniformListId': 'UlyssesKlaueSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 水人
    {
        'Id': 'HydromanFarFromHome',
        'IntroId': 'Hydroman',
        'UniformListId': 'HydromanSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 神秘法師
    {
        'Id': 'MysterioClassic',
        'IntroId': 'Mysterio',
        'UniformListId': 'MysterioSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 紅骷髏
    {
        'Id': 'RedskullCaptainAmericaTheFirstAvenger',
        'IntroId': 'Redskull',
        'UniformListId': 'RedskullSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 紅骷髏(秘密戰爭-紅骷髏)
    {
        'Id': 'RedskullSecretWars',
        'IntroId': 'Redskull',
        'UniformListId': 'RedskullSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': 'RedskullSecretWars',
        'ChainedUniformId': 'RedskullSecretWars'
    },

    // 紛爭
    {
        'Id': 'StryfeModern',
        'IntroId': 'Stryfe',
        'UniformListId': 'StryfeSeries',
        'LevelUpInfo': {
            'Type': 'XmenGreat',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 莫度男爵
    {
        'Id': 'BaronMordoClassic',
        'IntroId': 'BaronMordo',
        'UniformListId': 'BaronMordoSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 莫度男爵(奇異博士)
    {
        'Id': 'BaronMordoDoctorStrange',
        'IntroId': 'BaronMordo',
        'UniformListId': 'BaronMordoSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': 'BaronMordoDoctorStrange',
        'ChainedUniformId': 'BaronMordoDoctorStrange'
    },

    // 萊許
    {
        'Id': 'LashAgentsOfSHIELD',
        'IntroId': 'Lash',
        'UniformListId': 'LashSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 鞭狂
    {
        'Id': 'WhiplashIronman2',
        'IntroId': 'Whiplash',
        'UniformListId': 'WhiplashSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 馬克西穆斯
    {
        'Id': 'MaximusWarOfKings',
        'IntroId': 'Maximus',
        'UniformListId': 'MaximusSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 魅惑魔女
    {
        'Id': 'EnchanTressModern',
        'IntroId': 'EnchanTress',
        'UniformListId': 'EnchanTressSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 魔多客
    {
        'Id': 'ModokClassic',
        'IntroId': 'Modok',
        'UniformListId': 'ModokSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 魔雷基
    {
        'Id': 'MalekithDarkWord',
        'IntroId': 'Malekith',
        'UniformListId': 'MalekithSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 黃衫俠
    {
        'Id': 'YellowJacketAntman',
        'IntroId': 'YellowJacket',
        'UniformListId': 'YellowJacketSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 驚惡先生
    {
        'Id': 'MisterSinisterModern',
        'IntroId': 'MisterSinister',
        'UniformListId': 'MisterSinisterSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 月光石
    {
        'Id': 'MoonStoneModern',
        'IntroId': 'MoonStone',
        'UniformListId': 'MoonStoneSeries',
        'LevelUpInfo': {
            'Type': 'BlastNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 黑寡婦
    {
        'Id': 'BlackWidowTheAvengers',
        'IntroId': 'BlackWidow',
        'UniformListId': 'BlackWidowSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Speed',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 鷹眼
    {
        'Id': 'HawekeyeTheAvengers',
        'IntroId': 'Hawekeye',
        'UniformListId': 'HawekeyeSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 蜘蛛人
    {
        'Id': 'SpidermanClassic',
        'IntroId': 'Spiderman',
        'UniformListId': 'SpidermanSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Speed',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 獵鷹
    {
        'Id': 'FalconCaptainAmericaTheWinterSoldier',
        'IntroId': 'Falcon',
        'UniformListId': 'FalconSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 酷寒戰士
    {
        'Id': 'WinterSoldierCaptainAmericaTheWinterSoldier',
        'IntroId': 'WinterSoldier',
        'UniformListId': 'WinterSoldierSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Speed',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 快銀
    {
        'Id': 'QuicksilverClassic',
        'IntroId': 'Quicksilver',
        'UniformListId': 'QuicksilverSeries',
        'LevelUpInfo': {
            'Type': 'Great',
            'MaxLevel': 70
        },
        'T3Type': 'SpeedErip',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 尼克福瑞
    {
        'Id': 'NickFuryModern',
        'IntroId': 'NickFury',
        'UniformListId': 'NickFurySeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 死恃
    {
        'Id': 'DeadpoolModern',
        'IntroId': 'Deadpool',
        'UniformListId': 'DeadpoolSeries',
        'LevelUpInfo': {
            'Type': 'XForce',
            'MaxLevel': 70
        },
        'T3Type': 'SpeedErip',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 死恃(女 死 恃)
    {
        'Id': 'DeadpoolGirl',
        'IntroId': 'Deadpool',
        'UniformListId': 'DeadpoolSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'SpeedErip',
        'RelatedUniformId': 'DeadpoolGirl',
        'ChainedUniformId': 'DeadpoolGirl'
    },

    // 死恃(節日派對)
    {
        'Id': 'DeadpoolModern',
        'IntroId': 'Deadpool',
        'UniformListId': 'DeadpoolSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'SpeedErip',
        'RelatedUniformId': 'DeadpoolParty',
        'ChainedUniformId': 'DeadpoolParty'
    },

    // 多米諾
    {
        'Id': 'DomindXForce',
        'IntroId': 'Domind',
        'UniformListId': 'DomindSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 關死恃
    {
        'Id': 'GwenpoolAllNewAllDifferent',
        'IntroId': 'Gwenpool',
        'UniformListId': 'GwenpoolSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 冰月花雪
    {
        'Id': 'LunaSnowModern',
        'IntroId': 'LunaSnow',
        'UniformListId': 'LunaSnowSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Speed',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 蟻人
    {
        'Id': 'AntmanModern',
        'IntroId': 'Antman',
        'UniformListId': 'AntmanSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Speed',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 13號特工
    {
        'Id': 'Agent13Modern',
        'IntroId': 'Agent13',
        'UniformListId': 'Agent13Series',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // x23
    {
        'Id': 'X23Classic',
        'IntroId': 'X23',
        'UniformListId': 'X23Series',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 仿聲鳥
    {
        'Id': 'MockingbirdHeroAge',
        'IntroId': 'Mockingbird',
        'UniformListId': 'MockingbirdSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 凱蒂普萊特
    {
        'Id': 'KittyPrydeModern',
        'IntroId': 'KittyPryde',
        'UniformListId': 'KittyPrydeSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 勇度
    {
        'Id': 'YonduGuardiansOfTheGalaxy',
        'IntroId': 'Yondu',
        'UniformListId': 'YonduSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 卡爾奈克
    {
        'Id': 'KarnakWarOfKings',
        'IntroId': 'Karnak',
        'UniformListId': 'KarnakSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 地獄貓
    {
        'Id': 'HellCatAllNewAllDifferent',
        'IntroId': 'HellCat',
        'UniformListId': 'HellCatSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 夜行者
    {
        'Id': 'NightcrawlerModern',
        'IntroId': 'Nightcrawler',
        'UniformListId': 'NightcrawlerSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 夜魔俠
    {
        'Id': 'DareDevilModern',
        'IntroId': 'DareDevil',
        'UniformListId': 'DareDevilSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 天使
    {
        'Id': 'AngelModern',
        'IntroId': 'Angel',
        'UniformListId': 'AngelSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 女蜘蛛人關
    {
        'Id': 'SpiderGwenAllNewAllDifferent',
        'IntroId': 'SpiderGwen',
        'UniformListId': 'SpiderGwenSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 女蜘蛛人關(猛毒)
    {
        'Id': 'SpiderGwenSymbiont',
        'IntroId': 'SpiderGwen',
        'UniformListId': 'SpiderGwenSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': 'SpiderGwenSymbiont',
        'ChainedUniformId': 'SpiderGwenSymbiont'
    },

    // 小淘氣
    {
        'Id': 'RogueClassic',
        'IntroId': 'Rogue',
        'UniformListId': 'RogueSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 幻影殺手
    {
        'Id': 'ElektraClassic',
        'IntroId': 'Elektra',
        'UniformListId': 'ElektraSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 怪獸小子
    {
        'Id': 'KidKaijuMonster',
        'IntroId': 'KidKaiju',
        'UniformListId': 'KidKaijuSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 松鼠女孩
    {
        'Id': 'SquirrelGirlNewAvengers',
        'IntroId': 'SquirrelGirl',
        'UniformListId': 'SquirrelGirlSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 氣旋
    {
        'Id': 'AeroModern',
        'IntroId': 'Aero',
        'UniformListId': 'AeroSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 浪
    {
        'Id': 'WaveModern',
        'IntroId': 'Wave',
        'UniformListId': 'WaveSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 王
    {
        'Id': 'WongAllNewAllDifferent',
        'IntroId': 'Wong',
        'UniformListId': 'WongSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 白幽靈
    {
        'Id': 'FantomexXForece',
        'IntroId': 'Fantomex',
        'UniformListId': 'FantomexSeries',
        'LevelUpInfo': {
            'Type': 'XmenNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 白狐
    {
        'Id': 'WhiteFoxModern',
        'IntroId': 'WhiteFox',
        'UniformListId': 'WhiteFoxSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 范達爾
    {
        'Id': 'FandralModern',
        'IntroId': 'Fandral',
        'UniformListId': 'FandralSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 舒莉
    {
        'Id': 'ShuriMarvelLegacy',
        'IntroId': 'Shuri',
        'UniformListId': 'ShuriSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 艾爾莎血石
    {
        'Id': 'ElsaBloodstoneModern',
        'IntroId': 'ElsaBloodstone',
        'UniformListId': 'ElsaBloodstoneSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 葛摩拉
    {
        'Id': 'GamoraGuardiansOfTheGalaxy',
        'IntroId': 'Gamora',
        'UniformListId': 'GamoraSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 蛛絲女
    {
        'Id': 'SilkAllNewAllDifferent',
        'IntroId': 'Silk',
        'UniformListId': 'SilkSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 蜘蛛人(邁爾斯)
    {
        'Id': 'SpidermanMilesAllNewAllDifferent',
        'IntroId': 'SpidermanMiles',
        'UniformListId': 'SpidermanMilesSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 蜘蛛人(邁爾斯)(絕對屠殺)
    {
        'Id': 'SpidermanMilesAbsoluteCarnage',
        'IntroId': 'SpidermanMiles',
        'UniformListId': 'SpidermanMilesSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'SpidermanMilesAbsoluteCarnage',
        'ChainedUniformId': 'SpidermanMilesAbsoluteCarnage'
    },

    // 蜘蛛人2099
    {
        'Id': 'Spider2099Modern',
        'IntroId': 'Spider2099',
        'UniformListId': 'Spider2099Series',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 蜘蛛騎士
    {
        'Id': 'ArachKnightFusion',
        'IntroId': 'ArachKnight',
        'UniformListId': 'ArachKnightSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 迷霧騎士
    {
        'Id': 'MistyKnghtAllNewAllDifferent',
        'IntroId': 'MistyKnght',
        'UniformListId': 'MistyKnghtSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 鷹眼(凱特)
    {
        'Id': 'HawkeyeKateMarvelNow',
        'IntroId': 'HawkeyeKate',
        'UniformListId': 'HawkeyeKateSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 鳳皇
    {
        'Id': 'SunBirdModern',
        'IntroId': 'SunBird',
        'UniformListId': 'SunBirdSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 黑鷹
    {
        'Id': 'DarkHawkModern',
        'IntroId': 'DarkHawk',
        'UniformListId': 'DarkHawkSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 猩紅蜘蛛
    {
        'Id': 'ScarletSpiderModern',
        'IntroId': 'ScarletSpider',
        'UniformListId': 'ScarletSpiderSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 原罪
    {
        'Id': 'SinAllNewAllDifferent',
        'IntroId': 'Sin',
        'UniformListId': 'SinSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 幽靈
    {
        'Id': 'GhostClassic',
        'IntroId': 'Ghost',
        'UniformListId': 'GhostSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 幽靈(蟻人與黃蜂女)
    {
        'Id': 'GhostAntmanAndTheWasp',
        'IntroId': 'Ghost',
        'UniformListId': 'GhostSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'GhostAntmanAndTheWasp',
        'ChainedUniformId': 'GhostAntmanAndTheWasp'
    },

    // 獵人克萊文
    {
        'Id': 'KravenHunterModern',
        'IntroId': 'KravenHunter',
        'UniformListId': 'KravenHunterSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 禿鷹
    {
        'Id': 'VultureClassic',
        'IntroId': 'Vulture',
        'UniformListId': 'VultureSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 科拉特
    {
        'Id': 'KorathCaptionMarvel',
        'IntroId': 'Korath',
        'UniformListId': 'KorathSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 綠惡魔
    {
        'Id': 'GreenGoblinClassic',
        'IntroId': 'GreenGoblin',
        'UniformListId': 'GreenGoblinSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 綠惡魔(究極)
    {
        'Id': 'GreenGoblinSuper',
        'IntroId': 'GreenGoblin',
        'UniformListId': 'GreenGoblinSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'GreenGoblinSuper',
        'ChainedUniformId': 'GreenGoblinSuper'
    },

    // 綠惡魔(黑暗復仇者)
    {
        'Id': 'GreenGoblinTheDarkAvengers',
        'IntroId': 'GreenGoblin',
        'UniformListId': 'GreenGoblinSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'GreenGoblinTheDarkAvengers',
        'ChainedUniformId': 'GreenGoblinTheDarkAvengers'
    },

    // 齊莫男爵
    {
        'Id': 'BaronZemoModern',
        'IntroId': 'BaronZemo',
        'UniformListId': 'BaronZemoSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 電光人
    {
        'Id': 'ElectroModern',
        'IntroId': 'Electro',
        'UniformListId': 'ElectroSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 黑貓
    {
        'Id': 'BlackcatModern',
        'IntroId': 'Blackcat',
        'UniformListId': 'BlackcatSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 毒蛇
    {
        'Id': 'ViperModern',
        'IntroId': 'Viper',
        'UniformListId': 'ViperSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 魔形女
    {
        'Id': 'MystiqueModern',
        'IntroId': 'Mystique',
        'UniformListId': 'MystiqueSeries',
        'LevelUpInfo': {
            'Type': 'XmenStore',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 葉蓮娜
    {
        'Id': 'YelenaModern',
        'IntroId': 'Yelena',
        'UniformListId': 'YelenaSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 葉蓮娜(漫威黑寡婦)
    {
        'Id': 'YelenaBlackWidow',
        'IntroId': 'Yelena',
        'UniformListId': 'YelenaSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'YelenaBlackWidow',
        'ChainedUniformId': 'YelenaBlackWidow'
    },

    // 葉蓮娜(漫威黑寡婦(冰雪戰衣))
    {
        'Id': 'YelenaIce',
        'IntroId': 'Yelena',
        'UniformListId': 'YelenaSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': 'YelenaIce',
        'ChainedUniformId': 'YelenaIce'
    },

    // 蠍子人
    {
        'Id': 'ScorpionModern',
        'IntroId': 'Scorpion',
        'UniformListId': 'ScorpionSeries',
        'LevelUpInfo': {
            'Type': 'SpeedNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 索爾
    {
        'Id': 'ThorTheAvengers',
        'IntroId': 'Thor',
        'UniformListId': 'ThorSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Universe',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 驚奇隊長
    {
        'Id': 'CaptainMarvelModern',
        'IntroId': 'CaptainMarvel',
        'UniformListId': 'CaptainMarvelSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Universe',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 鬧劇
    {
        'Id': 'SlapstickModern',
        'IntroId': 'Slapstick',
        'UniformListId': 'SlapstickSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 克莉
    {
        'Id': 'CleaModern',
        'IntroId': 'Clea',
        'UniformListId': 'CleaSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 地獄風暴
    {
        'Id': 'HellStormModern',
        'IntroId': 'HellStorm',
        'UniformListId': 'HellStormSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 太陽神
    {
        'Id': 'HyperionAllNewAllDifferent',
        'IntroId': 'Hyperion',
        'UniformListId': 'HyperionSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 奇點
    {
        'Id': 'SingularityAforce',
        'IntroId': 'Singularity',
        'UniformListId': 'SingularitySeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 奧丁
    {
        'Id': 'OdinModern',
        'IntroId': 'Odin',
        'UniformListId': 'OdinSeries',
        'LevelUpInfo': {
            'Type': 'Great',
            'MaxLevel': 70
        },
        'T3Type': 'UniverseGreat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 巫毒
    {
        'Id': 'DoctorVoodooModern',
        'IntroId': 'DoctorVoodoo',
        'UniformListId': 'DoctorVoodooSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 惡靈戰警
    {
        'Id': 'GhostRiderClassic',
        'IntroId': 'GhostRider',
        'UniformListId': 'GhostRiderSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Universe',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 惡靈戰警(羅比)
    {
        'Id': 'GhostRiderRobbieMarvelNow',
        'IntroId': 'GhostRiderRobbie',
        'UniformListId': 'GhostRiderRobbieSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 惡靈黑豹
    {
        'Id': 'GhostPantherFusion',
        'IntroId': 'GhostPanther',
        'UniformListId': 'GhostPantherSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 戰鬥天使
    {
        'Id': 'AngelaModern',
        'IntroId': 'Angela',
        'UniformListId': 'AngelaSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 撒旦娜
    {
        'Id': 'SatanaModern',
        'IntroId': 'Satana',
        'UniformListId': 'SatanaSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 新星(山姆)
    {
        'Id': 'NovaSamAllNewAllDifferent',
        'IntroId': 'NovaSam',
        'UniformListId': 'NovaSamSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 海姆達爾
    {
        'Id': 'HeimdallRagnarok',
        'IntroId': 'Heimdall',
        'UniformListId': 'HeimdallSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 索爾(珍．佛斯特)
    {
        'Id': 'ThorJaneAllNewAllDifferent',
        'IntroId': 'ThorJane',
        'UniformListId': 'ThorJaneSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 美杜莎
    {
        'Id': 'MedusaAllNewAllDifferent',
        'IntroId': 'Medusa',
        'UniformListId': 'MedusaSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 藍驚奇
    {
        'Id': 'BlueMarvelTheUltimates',
        'IntroId': 'BlueMarvel',
        'UniformListId': 'BlueMarvelSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 銀色衝浪手
    {
        'Id': 'SilverSurferModern',
        'IntroId': 'SilverSurfer',
        'UniformListId': 'SilverSurferSeries',
        'LevelUpInfo': {
            'Type': 'Great',
            'MaxLevel': 70
        },
        'T3Type': 'UniverseGreat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 鋼鐵之錘
    {
        'Id': 'IronHammerFusion',
        'IntroId': 'IronHammer',
        'UniformListId': 'IronHammerSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 類星體
    {
        'Id': 'QuasarAllNewAllDifferent',
        'IntroId': 'Quasar',
        'UniformListId': 'QuasarSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 黑霹雷
    {
        'Id': 'BlackBoltModern',
        'IntroId': 'BlackBolt',
        'UniformListId': 'BlackBoltSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Universe',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 玄武
    {
        'Id': 'ShadowShellModern',
        'IntroId': 'ShadowShell',
        'UniformListId': 'ShadowShellSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Awake',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 新星
    {
        'Id': 'NovaRichardModern',
        'IntroId': 'NovaRichard',
        'UniformListId': 'NovaRichardSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 貝塔
    {
        'Id': 'BetaRayBillModern',
        'IntroId': 'BetaRayBill',
        'UniformListId': 'BetaRayBillSeries',
        'LevelUpInfo': {
            'Type': 'GalaxyCommand',
            'MaxLevel': 70
        },
        'T3Type': 'AwakeErip',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 菲拉威爾
    {
        'Id': 'PhylaVellModern',
        'IntroId': 'PhylaVell',
        'UniformListId': 'PhylaVellSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 哨兵
    {
        'Id': 'SentryModern',
        'IntroId': 'Sentry',
        'UniformListId': 'SentrySeries',
        'LevelUpInfo': {
            'Type': 'Great',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 薩諾斯
    {
        'Id': 'ThanosUnlimited',
        'IntroId': 'Thanos',
        'UniformListId': 'ThanosSeries',
        'LevelUpInfo': {
            'Type': 'Great',
            'MaxLevel': 70
        },
        'T3Type': 'UniverseGreat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 洛基
    {
        'Id': 'LokiTheAvengers',
        'IntroId': 'Loki',
        'UniformListId': 'LokiSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Universe',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 洛基(淑女洛基)
    {
        'Id': 'LokiLady',
        'IntroId': 'Loki',
        'UniformListId': 'LokiSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'Universe',
        'RelatedUniformId': 'LokiLady',
        'ChainedUniformId': 'LokiLady'
    },

    // 反物質人
    {
        'Id': 'AntimanAllNewAllDifferent',
        'IntroId': 'Antiman',
        'UniformListId': 'AntimanSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 多瑪暮
    {
        'Id': 'DormammuClassic',
        'IntroId': 'Dormammu',
        'UniformListId': 'DormammuSeries',
        'LevelUpInfo': {
            'Type': 'Great',
            'MaxLevel': 70
        },
        'T3Type': 'UniverseGreat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 奧創
    {
        'Id': 'UltronModern',
        'IntroId': 'Ultron',
        'UniformListId': 'UltronSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 掠鴉兇刃
    {
        'Id': 'CorvusGlaiveUnlimited',
        'IntroId': 'CorvusGlaive',
        'UniformListId': 'CorvusGlaiveSeries',
        'LevelUpInfo': {
            'Type': 'T2',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 摩根娜
    {
        'Id': 'MorganLefavModern',
        'IntroId': 'MorganLefav',
        'UniformListId': 'MorganLefavSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 昊天極星
    {
        'Id': 'SuperGiantUnlimited',
        'IntroId': 'SuperGiant',
        'UniformListId': 'SuperGiantSeries',
        'LevelUpInfo': {
            'Type': 'T2',
            'MaxLevel': 60
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 星駭寂滅
    {
        'Id': 'BlackDwarfUnlimited',
        'IntroId': 'BlackDwarf',
        'UniformListId': 'BlackDwarfSeries',
        'LevelUpInfo': {
            'Type': 'T2',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 闇夜無星
    {
        'Id': 'ProximaMidnightUnlimited',
        'IntroId': 'ProximaMidnight',
        'UniformListId': 'ProximaMidnightSeries',
        'LevelUpInfo': {
            'Type': 'T2',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 末日博士
    {
        'Id': 'DoctorDoomModern',
        'IntroId': 'DoctorDoom',
        'UniformListId': 'DoctorDoomSeries',
        'LevelUpInfo': {
            'Type': 'Great',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 海拉
    {
        'Id': 'HelaModern',
        'IntroId': 'Hela',
        'UniformListId': 'HelaSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 烏木邪心
    {
        'Id': 'EbonyMawUnlimited',
        'IntroId': 'EbonyMaw',
        'UniformListId': 'EbonyMawSeries',
        'LevelUpInfo': {
            'Type': 'T2',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 維克多利斯
    {
        'Id': 'VictoriousModern',
        'IntroId': 'Victorious',
        'UniformListId': 'VictoriousSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 羅南
    {
        'Id': 'RonanGuardiansOfTheGalaxy',
        'IntroId': 'Ronan',
        'UniformListId': 'RonanSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 哨兵機器人
    {
        'Id': 'SentinelModern',
        'IntroId': 'Sentinel',
        'UniformListId': 'SentinelSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 塞恩
    {
        'Id': 'ThaneModern',
        'IntroId': 'Thane',
        'UniformListId': 'ThaneSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 分子人
    {
        'Id': 'MoleculemanModern',
        'IntroId': 'Moleculeman',
        'UniformListId': 'MoleculemanSeries',
        'LevelUpInfo': {
            'Type': 'Great',
            'MaxLevel': 70
        },
        'T3Type': 'UniverseGreat',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 努爾
    {
        'Id': 'KnullModern',
        'IntroId': 'Knull',
        'UniformListId': 'KnullSeries',
        'LevelUpInfo': {
            'Type': 'T3',
            'MaxLevel': 70
        },
        'T3Type': 'GreatT3',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

    // 毀滅者
    {
        'Id': 'DestroverClassic',
        'IntroId': 'Destrover',
        'UniformListId': 'DestroverSeries',
        'LevelUpInfo': {
            'Type': 'UniversalNormal',
            'MaxLevel': 70
        },
        'T3Type': 'No',
        'RelatedUniformId': '',
        'ChainedUniformId': ''
    },

];