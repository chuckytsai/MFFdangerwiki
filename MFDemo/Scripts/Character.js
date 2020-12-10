// 英雄介紹
function FillHeroIntroduction(introId) {
    var intro = heroIntro.find(x => x.Id == introId);

    $('#HeroName').text(intro.Name);
    $('#HeroHeight').text(intro.Height);
    $('#HeroWeight').text(intro.Weight);
    $('#HeroRace').text(intro.Race);
    $('#HeroAbility').text(intro.Ability);
    $('#HeroStory').text(intro.Story);
}

// 英雄升級資訊材料文字&圖片
function FillHeroLevelUpInfos(levelUpInfo) {
    var levelUpInfos = GetLevelUpInfos(levelUpInfo.Type, levelUpInfo.MaxLevel);

    for (var idx = 0; idx < levelUpInfos.length; ++idx) {
        var dataContainer = $('.LevelUpInfoCard:nth(' + idx + ') > div > div');

        var descText = levelUpInfos[idx].Desc;
        dataContainer.find('[name="Level_Desc"]').text(descText);

        var materials = levelUpInfos[idx].Materials;
        FillHeroLevelUpInfoMaterials(dataContainer, materials);
    }
}
// 英雄等級輸入為最高等級
function GetLevelUpInfos(type, maxLevel) {
    var typeInfo = heroLevelUpInfos.find(x => x.Type == type).Infos;
    if (typeInfo == null) {
        return;
    }
    return typeInfo.filter(x => x.MaxLevel <= maxLevel);
}

// 升級所需材料文字&圖片
function FillHeroLevelUpInfoMaterials(dataContainer, materials) {
    for (var idx = 0; idx < materials.length; ++idx) {
        var materialContent = GetMaterialIconHtml(materials[idx].Icon) +
            GetMaterialNeedHtml(materials[idx].NameCN, materials[idx].Amount);

        dataContainer.find('[name="Level_Materials"]').append(materialContent);
    }
}
var itemIconTemplate = '<img src="/App_Data/Images/Items/{MaterialIcon}.jpg" class="MaterialIcon">'

function GetMaterialIconHtml(icon) {
    if (icon.length > 0) {
        return itemIconTemplate
            .replace('{MaterialIcon}', icon);
    }
    return itemIconTemplate
        .replace('{MaterialIcon}', '空白');
}

// 升級所需材料顯示名稱及數量
var itemNeedTemplate = '<span class="MaterialNeedText">{NameCN}  <span class="Amount">{Amount}</span></span><br/>'

function GetMaterialNeedHtml(name, amount) {
    return itemNeedTemplate
        .replace('{NameCN}', name)
        .replace('{Amount}', amount);
}

// T3升級資訊
function FillHeroT3Info(t3Type) {
    var t3Info = heroT3Infos.find(x => x.Type == t3Type);

    var materials = t3Info.Materials;
    for (var idx = 0; idx < materials.length; ++idx) {
        var materialContent = GetMaterialIconHtml(materials[idx].Icon) +
            GetMaterialNeedHtml(materials[idx].NameCN, materials[idx].Amount);

        $('.T3Card > div > div > [name="Level_Materials"]').append(materialContent);
    }
}

// 英雄制服下拉式選單
var uniformOptionTemplate = '<span class="dropdown-item" value="{Value}">{Name}</span>';

function FillHeroUniformOptions(uniformListId) {
    var options = heroUniforms.find(x => x.Id == uniformListId).Options;

    for (var idx = 0; idx < options.length; ++idx) {
        var content = uniformOptionTemplate
            .replace('{Value}', options[idx].Value)
            .replace('{Name}', options[idx].Name);
        $('#UniformOptions').append(content);
    }

}

// 各制服的技能說明欄位
function FillHeroUniformInfos(uniformInfoId) {
    var uniformInfo = heroUniformInfos.find(x => x.Id == uniformInfoId);

    FillUniformSummary(uniformInfo.Thumbnail, uniformInfo.Name, uniformInfo.HowToGet);

    for (var skIndex = 0; skIndex < uniformInfo.Skills.length; ++skIndex) {
        var skill = uniformInfo.Skills[skIndex];

        var dataContainer = $('.UniformSkillCard:nth(' + skIndex + ') > div > div');
        FillUniformSkill(dataContainer, skill);

        for (var teGroupIdx = 0; teGroupIdx < skill.TargetEffects.length; ++teGroupIdx) {
            var teGroup = skill.TargetEffects[teGroupIdx];
            FillUniformSkillTargetEffects(dataContainer, teGroup.Target, teGroup.Effects);
        }
    }
}

// 各制服頭像&名稱&取得方式說明
function FillUniformSummary(thumbnail, name, howToGet) {
    var imgSrc = GetUniformThumbnailPath(thumbnail);
    $('#UniformThumbnail').attr('src', imgSrc);

    $('#UniformName').text(name);
    $('#UniformHowToGet').text(howToGet);
}
var uniformThumbnailPathTemplate = '/App_Data/Images/Heros/{UniformThumbnail}.jpg'

// 制服頭像
function GetUniformThumbnailPath(thumbnail) {
    return uniformThumbnailPathTemplate
        .replace('{UniformThumbnail}', thumbnail);
}

// 制服技能說明欄位
function FillUniformSkill(dataContainer, skill) {
    dataContainer.find('[name="Skill_Name"]').text(skill.Name);
    dataContainer.find('[name="Skill_CoolDown"]').text(skill.CoolDown || '無');
    dataContainer.find('[name="Skill_Trigger"]').text(skill.Trigger || '無');
}

// 制服技能內容欄位(對象,技能效果)
function FillUniformSkillTargetEffects(dataContainer, target, effects) {
    var targetEffectGroupContent = GetUniformSkillTargetEffectsContent();
    dataContainer.find('[name="Skill_TargetEffectGroups"]').append(targetEffectGroupContent);

    dataContainer.find('[name="Skill_Target"]').text(target);

    for (var effectIdx = 0; effectIdx < effects.length; ++effectIdx) {
        var effectContent = GetUniformSkillEffectsContent(effects[effectIdx]);
        dataContainer.find('[name="Skill_Effects"]').append(effectContent);
    }
}

// 制服技能內容欄位(對象)
var uniformSkillTargetEffectsTemplate = '<p class="card-text name="TargetEffectGroup"">對象：<span name="Skill_Target"></span><br><ul name="Skill_Effects"></ul></p>';

function GetUniformSkillTargetEffectsContent() {
    return uniformSkillTargetEffectsTemplate;
}
// 制服技能內容欄位(技能效果)
var uniformSkillEffectsTemplate = '<li>{Effect}</li>';

function GetUniformSkillEffectsContent(effect) {
    return uniformSkillEffectsTemplate
        .replace('{Effect}', effect);
}
// 關聯制服
function FillHeroRelatedUniforms(relatedUniformId) {
    if (relatedUniformId.length == 0) {
        return;
    }

    var relatedUniforms = heroRelatedUniforms.find(x => x.Id == relatedUniformId).Related;

    for (var relatedIdx = 0; relatedIdx < relatedUniforms.length; ++relatedIdx) {
        var dataContainer = $('.RelatedUniformCard:nth(' + relatedIdx + ') > div > div');

        dataContainer.find('[name="Related_Name"]').text(relatedUniforms[relatedIdx].Name);
        dataContainer.find('[name="Related_From"]').text(relatedUniforms[relatedIdx].From);

        var iconPath = GetRelatedUniformIconPath(relatedUniforms[relatedIdx].Icon);
        dataContainer.find('[name="Related_Icon"]').attr('src', iconPath);
    }
}
// 關聯制服頭像
var relatedUniformIconPathTemplate = '/App_Data/Images/Heros/{Icon}.jpg'

function GetRelatedUniformIconPath(icon) {
    return relatedUniformIconPathTemplate
        .replace('{Icon}', icon);
}
// 被連鎖到的制服
function FillHeroChainedUniforms(chainedUniformId) {
    if (chainedUniformId.length == 0) {
        return;
    }

    var chainedUniforms = heroChainedUniforms.find(x => x.Id == chainedUniformId).Chained;

    for (var chainedIdx = 0; chainedIdx < chainedUniforms.length; ++chainedIdx) {
        var dataContainer = $('.ChainedUniformCard:nth(' + chainedIdx + ') > div > div');

        dataContainer.find('[name="Chained_Name"]').text(chainedUniforms[chainedIdx].Name);
        dataContainer.find('[name="Chained_From"]').text(chainedUniforms[chainedIdx].From);

        var iconPath = GetChainedUniformIconPath(chainedUniforms[chainedIdx].Icon);
        dataContainer.find('[name="Chained_Icon"]').attr('src', iconPath);

        var effects = chainedUniforms[chainedIdx].Effects;
        for (var effectIdx = 0; effectIdx < effects.length; ++effectIdx) {
            var effectContent = GetChainedUniformEffectsContent(effects[effectIdx]);
            dataContainer.find('[name="Chained_Effects"]').append(effectContent);
        }
    }
}
// 被連鎖到的制服(頭像)
var chainedUniformIconPathTemplate = '/App_Data/Images/Heros/{Icon}.jpg'

function GetChainedUniformIconPath(icon) {
    return chainedUniformIconPathTemplate
        .replace('{Icon}', icon);
}

// 被連鎖到的制服(屬性)
var chainedUniformEffectsTemplate = '<li>{Effect}</li>';

function GetChainedUniformEffectsContent(effect) {
    return chainedUniformEffectsTemplate
        .replace('{Effect}', effect);
}

// 數字加上千分位
function AllAmountAddCommas() {
    $('.Amount').each(function() {
        var amount = $(this).text();
        var amountWithComma = AddCommas(amount);
        $(this).text(amountWithComma);
    });
}

// 選擇其他制服會消除其他制服
function ClearSkill() {
    $('[name="Skill_Name"]').empty();
    $('[name="Skill_CoolDown"]').empty();
    $('[name="Skill_Trigger"]').empty();
    $('[name="Skill_TargetEffectGroups"]').empty();
}

function ClaerRelatedUniform() {
    $('[name="Related_Name"]').empty();
    $('[name="Related_Icon"]').attr('src', '');
}

function ClaerChainedUniform() {
    $('[name="Chained_Name"]').empty();
    $('[name="Chained_Icon"]').attr('src', '');
    $('[name="Chained_Effects"]').empty();
}

function BindUniformOptionClickEvent() {
    $('.dropdown-menu span').click(function() {
        var uniformInfoId = $(this).attr('Value');

        ClearSkill();
        ClaerRelatedUniform();
        ClaerChainedUniform();

        FillHeroUniformInfos(uniformInfoId);
        FillHeroRelatedUniforms(uniformInfoId);
        FillHeroChainedUniforms(uniformInfoId);
    });
}

function SetDefaultUniform(uniform) {
    if (uniform.length > 0) {
        var uniformId = id + uniform;
        $('.dropdown-item[value="' + uniformId + '"]').click();
    }
}