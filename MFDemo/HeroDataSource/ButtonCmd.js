// 英雄升級資料 & 制服技能資料 顯示
function change(index) {
    let heroUpData = document.getElementById("heroUpData");
    let heroSkinSkills = document.getElementById("heroSkinSkills");
    let LevelUpTitleText = document.getElementById("LevelUpTitleText");
    let SkinSkillsTitleText = document.getElementById("SkinSkillsTitleText");

    if (index == 0) {
        heroUpData.style.display = "block";
        heroSkinSkills.style.display = "none";
        LevelUpTitleText.style.color = 'blue';
        SkinSkillsTitleText.style.color = "black";
    } else if (index == 1) {
        heroUpData.style.display = "none";
        heroSkinSkills.style.display = "block";
        LevelUpTitleText.style.color = 'black';
        SkinSkillsTitleText.style.color = "blue";
    }
}