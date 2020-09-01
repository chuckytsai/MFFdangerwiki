// 滑鼠移動到選單目錄按鈕出現清單效果
function over() {
    skinRell.style.display = 'block';
}

function out() {
    skinRell.style.display = 'none';
}

function overs() {
    skinRells.style.display = 'block';
}

function outs() {
    skinRells.style.display = 'none';
}

// ===========點及清單中選擇制服顯示效果===========
function change(index) {
    let skin1 = document.getElementById("skin1");
    let skin2 = document.getElementById("skin2");
    let skin3 = document.getElementById("skin3");
    let skin4 = document.getElementById("skin4");
    let skin5 = document.getElementById("skin5");
    let skin6 = document.getElementById("skin6");
    let skin7 = document.getElementById("skin7");
    let skin8 = document.getElementById("skin8");
    let skin9 = document.getElementById("skin9");
    let skin10 = document.getElementById("skin10");
    let skin11 = document.getElementById("skin11");
    let skin1s = document.getElementById("skin1s");
    let skin2s = document.getElementById("skin2s");
    let skin3s = document.getElementById("skin3s");
    let skin4s = document.getElementById("skin4s");
    let skin5s = document.getElementById("skin5s");
    let skin6s = document.getElementById("skin6s");
    let skin7s = document.getElementById("skin7s");
    let skin8s = document.getElementById("skin8s");
    let skin9s = document.getElementById("skin9s");
    let skin10s = document.getElementById("skin10s")
    let skin11s = document.getElementById("skin11s");

    if (index == 0) {
        skin1.style.display = "block";
        skin2.style.display = "none";
        skin3.style.display = "none";
        skin4.style.display = "none";
        skin5.style.display = "none";
        skin6.style.display = "none";
        skin7.style.display = "none";
        skin8.style.display = "none";
        skin9.style.display = "none";
        skin10.style.display = "none";
        skin11.style.display = "none";
        skinRell.style.display = 'none';
    } else if (index == 1) {
        skin1.style.display = "none";
        skin2.style.display = "block";
        skin3.style.display = "none";
        skin4.style.display = "none";
        skin5.style.display = "none";
        skin6.style.display = "none";
        skin7.style.display = "none";
        skin8.style.display = "none";
        skin9.style.display = "none";
        skin10.style.display = "none";
        skin11.style.display = "none";
        skinRell.style.display = 'none';
    } else if (index == 2) {
        skin1.style.display = "none";
        skin2.style.display = "none";
        skin3.style.display = "block";
        skin4.style.display = "none";
        skin5.style.display = "none";
        skin6.style.display = "none";
        skin7.style.display = "none";
        skin8.style.display = "none";
        skin9.style.display = "none";
        skin10.style.display = "none";
        skin11.style.display = "none";
        skinRell.style.display = 'none';
    } else if (index == 3) {
        skin1.style.display = "none";
        skin2.style.display = "none";
        skin3.style.display = "none";
        skin4.style.display = "block";
        skin5.style.display = "none";
        skin6.style.display = "none";
        skin7.style.display = "none";
        skin8.style.display = "none";
        skin9.style.display = "none";
        skin10.style.display = "none";
        skin11.style.display = "none";
        skinRell.style.display = 'none';
    } else if (index == 4) {
        skin1.style.display = "none";
        skin2.style.display = "none";
        skin3.style.display = "none";
        skin4.style.display = "none";
        skin5.style.display = "block";
        skin6.style.display = "none";
        skin7.style.display = "none";
        skin8.style.display = "none";
        skin9.style.display = "none";
        skin10.style.display = "none";
        skin11.style.display = "none";
        skinRell.style.display = 'none';
    } else if (index == 5) {
        skin1.style.display = "none";
        skin2.style.display = "none";
        skin3.style.display = "none";
        skin4.style.display = "none";
        skin5.style.display = "none";
        skin6.style.display = "block";
        skin7.style.display = "none";
        skin8.style.display = "none";
        skin9.style.display = "none";
        skin10.style.display = "none";
        skin11.style.display = "none";
        skinRell.style.display = 'none';
    } else if (index == 6) {
        skin1.style.display = "none";
        skin2.style.display = "none";
        skin3.style.display = "none";
        skin4.style.display = "none";
        skin5.style.display = "none";
        skin6.style.display = "none";
        skin7.style.display = "block";
        skin8.style.display = "none";
        skin9.style.display = "none";
        skin11.style.display = "none";
        skin10.style.display = "none";
    } else if (index == 7) {
        skin1.style.display = "none";
        skin2.style.display = "none";
        skin3.style.display = "none";
        skin4.style.display = "none";
        skin5.style.display = "none";
        skin6.style.display = "none";
        skin7.style.display = "none";
        skin8.style.display = "block";
        skin9.style.display = "none";
        skin10.style.display = "none";
        skin11.style.display = "none";
        skinRell.style.display = 'none';
    } else if (index == 8) {
        skin1.style.display = "none";
        skin2.style.display = "none";
        skin3.style.display = "none";
        skin4.style.display = "none";
        skin5.style.display = "none";
        skin6.style.display = "none";
        skin7.style.display = "none";
        skin8.style.display = "none";
        skin9.style.display = "block";
        skin10.style.display = "none";
        skin11.style.display = "none";
        skinRell.style.display = 'none';
    } else if (index == 9) {
        skin1.style.display = "none";
        skin2.style.display = "none";
        skin3.style.display = "none";
        skin4.style.display = "none";
        skin5.style.display = "none";
        skin6.style.display = "none";
        skin7.style.display = "none";
        skin8.style.display = "none";
        skin9.style.display = "none";
        skin10.style.display = "block";
        skin11.style.display = "none";
        skinRell.style.display = 'none';
    } else if (index == 10) {
        skin1.style.display = "none";
        skin2.style.display = "none";
        skin3.style.display = "none";
        skin4.style.display = "none";
        skin5.style.display = "none";
        skin6.style.display = "none";
        skin7.style.display = "none";
        skin8.style.display = "none";
        skin9.style.display = "none";
        skin10.style.display = "none";
        skin11.style.display = "block";
        skinRell.style.display = 'none';
    }

    if (index == 11) {
        skin1s.style.display = "block";
        skin2s.style.display = "none";
        skin3s.style.display = "none";
        skin4s.style.display = "none";
        skin5s.style.display = "none";
        skin6s.style.display = "none";
        skin7s.style.display = "none";
        skin8s.style.display = "none";
        skin9s.style.display = "none";
        skin10s.style.display = "none";
        skin11s.style.display = "none";
        skinRells.style.display = 'none';
    } else if (index == 12) {
        skin1s.style.display = "none";
        skin2s.style.display = "block";
        skin3s.style.display = "none";
        skin4s.style.display = "none";
        skin5s.style.display = "none";
        skin6s.style.display = "none";
        skin7s.style.display = "none";
        skin8s.style.display = "none";
        skin9s.style.display = "none";
        skin10s.style.display = "none";
        skin11s.style.display = "none";
        skinRells.style.display = 'none';
    } else if (index == 13) {
        skin1s.style.display = "none";
        skin2s.style.display = "none";
        skin3s.style.display = "block";
        skin4s.style.display = "none";
        skin5s.style.display = "none";
        skin6s.style.display = "none";
        skin7s.style.display = "none";
        skin8s.style.display = "none";
        skin9s.style.display = "none";
        skin10s.style.display = "none";
        skin11s.style.display = "none";
        skinRells.style.display = 'none';
    } else if (index == 14) {
        skin1s.style.display = "none";
        skin2s.style.display = "none";
        skin3s.style.display = "none";
        skin4s.style.display = "block";
        skin5s.style.display = "none";
        skin6s.style.display = "none";
        skin7s.style.display = "none";
        skin8s.style.display = "none";
        skin9s.style.display = "none";
        skin10s.style.display = "none";
        skin11s.style.display = "none";
        skinRells.style.display = 'none';
    } else if (index == 15) {
        skin1s.style.display = "none";
        skin2s.style.display = "none";
        skin3s.style.display = "none";
        skin4s.style.display = "none";
        skin5s.style.display = "block";
        skin6s.style.display = "none";
        skin7s.style.display = "none";
        skin8s.style.display = "none";
        skin9s.style.display = "none";
        skin10s.style.display = "none";
        skin11s.style.display = "none";
        skinRells.style.display = 'none';
    } else if (index == 16) {
        skin1s.style.display = "none";
        skin2s.style.display = "none";
        skin3s.style.display = "none";
        skin4s.style.display = "none";
        skin5s.style.display = "none";
        skin6s.style.display = "block";
        skin7s.style.display = "none";
        skin8s.style.display = "none";
        skin9s.style.display = "none";
        s10s.style.display = "none";
        skin11s.style.display = "none";
        skinRells.style.display = 'none';
    } else if (index == 17) {
        skin1s.style.display = "none";
        skin2s.style.display = "none";
        skin3s.style.display = "none";
        skin4s.style.display = "none";
        skin5s.style.display = "none";
        skin6s.style.display = "none";
        skin7s.style.display = "block";
        skin8s.style.display = "none";
        skin9s.style.display = "none";
        skin10s.style.display = "none";
        skin11s.style.display = "none";
        skinRells.style.display = 'none';
    } else if (index == 18) {
        skin1s.style.display = "none";
        skin2s.style.display = "none";
        skin3s.style.display = "none";
        skin4s.style.display = "none";
        skin5s.style.display = "none";
        skin6s.style.display = "none";
        skin7s.style.display = "none";
        skin8s.style.display = "block";
        skin9s.style.display = "none";
        skin10s.style.display = "none";
        skin11s.style.display = "none";
        skinRells.style.display = 'none';
    } else if (index == 19) {
        skin1s.style.display = "none";
        skin2s.style.display = "none";
        skin3s.style.display = "none";
        skin4s.style.display = "none";
        skin5s.style.display = "none";
        skin6s.style.display = "none";
        skin7s.style.display = "none";
        skin8s.style.display = "none";
        skin9s.style.display = "block";
        skin10s.style.display = "none";
        skin11s.style.display = "none";
        skinRells.style.display = 'none';
    } else if (index == 20) {
        skin1s.style.display = "none";
        skin2s.style.display = "none";
        skin3s.style.display = "none";
        skin4s.style.display = "none";
        skin5s.style.display = "none";
        skin6s.style.display = "none";
        skin7s.style.display = "none";
        skin8s.style.display = "none";
        skin9s.style.display = "none";
        skin10s.style.display = "block";
        skin11s.style.display = "none";
        skinRells.style.display = 'none';
    } else if (index == 21) {
        skin1s.style.display = "none";
        skin2s.style.display = "none";
        skin3s.style.display = "none";
        skin4s.style.display = "none";
        skin5s.style.display = "none";
        skin6s.style.display = "none";
        skin7s.style.display = "none";
        skin8s.style.display = "none";
        skin9s.style.display = "none";
        skin10s.style.display = "none";
        skin11s.style.display = "block";
        skinRells.style.display = 'none';
    } else {
        skin1s.style.display = "none";
        skin2s.style.display = "none";
        skin3s.style.display = "none";
        skin4s.style.display = "none";
        skin5s.style.display = "none";
        skin6s.style.display = "none";
        skin7s.style.display = "none";
        skin8s.style.display = "none";
        skin9s.style.display = "none";
        skin10s.style.display = "none";
        skin11s.style.display = "none";
        skinRells.style.display = 'none';
    }

}

// ==========制服屬性選取頁面執行js===========


function getSkin(url) {
    {
        var url = location.href;
        //去尋找網址列中是否有資料傳遞(QueryString)
        if (url.indexOf('?') != -1) {
            var id = "";
            //在此直接將各自的參數資料切割放進ary中
            var ary = url.split('?')[1].split('&');
            //此時ary的內容為：
            //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'

            //下迴圈去搜尋每個資料參數
            for (i = 0; i <= ary.length - 1; i++) {
                //如果資料名稱為id的話那就把他取出來
                if (ary[i].split('=')[0] == 'id')
                    id = ary[i].split('=')[1];
            }

        }
    }
}