// JavaScript Document
window.onload = function() {
    var Box = document.createElement("div");
    document.body.appendChild(Box);
    Box.style.width = 480 + "px";
    Box.style.height = 800 + "px";
    Box.style.margin = "50px auto";
    Box.style.overflow = "hidden";
    Box.style.position = "relative";
    Box.style.border = "1px solid #000"
    //Box.style.background="#ccc";
    var UlBox = document.createElement("div");
    var fen = 0;
    var iSpeed = 1
    for (var i = 0; i < 5; i++) {

        var oUl = document.createElement("ul");
		oUl.style.borderBottom= "1px solid #000"
        oUl.style.width = Box.offsetWidth + "px";
        oUl.style.height = Box.offsetHeight / 4 -1+ "px";
        Box.appendChild(oUl) ;
		for (var j = 0; j < 4; j++) {
            var oLi = document.createElement("li");
            oLi.style.width = Box.offsetWidth / 4-1 + "px";
            oLi.style.height = Box.offsetHeight / 4 + "px";
			oLi.style.borderRight= "1px solid #000"
            oLi.style.float = "left";
            oUl.appendChild(oLi)
        }
        Box.getElementsByTagName("ul")[i].style.position = "absolute";
		Box.getElementsByTagName("ul")[i].style.top = Box.offsetHeight / 4 * (i) + "px";
		Box.getElementsByTagName("ul")[i].style.left = 0;
        var blackLi = parseInt(Math.random() * 4) ;
		Box.getElementsByTagName("ul")[i].getElementsByTagName("li")[blackLi].style.backgroundColor = "black";
		Box.getElementsByTagName("ul")[i].getElementsByTagName("li")[blackLi].blackPos = "black"
        if (i == 3) {
            Box.getElementsByTagName("ul")[3].getElementsByTagName("li")[blackLi].style.backgroundColor = "blue";
            var aaa = document.createElement("div") ;
			Box.getElementsByTagName("ul")[3].getElementsByTagName("li")[blackLi].appendChild(aaa);

            Box.getElementsByTagName("ul")[i].getElementsByTagName("li")[blackLi].getElementsByTagName("div")[0].style.cssText = "height:100%;text-align:center; line-height:" + Box.offsetHeight / 4 + "px;" + "font-size:26px;background-color:#000;color:#fff";
            Box.getElementsByTagName("ul")[i].getElementsByTagName("li")[blackLi].getElementsByTagName("div")[0].innerHTML = "开始游戏";
			Box.getElementsByTagName("ul")[i].getElementsByTagName("li")[blackLi].getElementsByTagName("div")[0].onclick = function() {
                this.style.display = "none";
                var aLi = Box.getElementsByTagName("li");
				for (var i = 0; i < aLi.length; i++) {
                    aLi[i].onclick = function() {

                        if (this.blackPos == "black") {
                            fen++
                            var guanka = parseInt(fen / 10) + 2 ;
							this.style.backgroundColor = "#ccc";
                            this.blackPos = "";
							iSpeed = guanka

                        } else {
                            this.style.backgroundColor = "red";
							alert("游戏结束" + "        " + "得分" + fen);
                            window.location = window.location
                        }
                    }
                }

                setInterval(moveUl, 1000/60)

            }

        }
    }
    var ulLength = Box.getElementsByTagName("ul").length;
    Box.getElementsByTagName("ul")[ulLength - 1].style.top = -Box.offsetHeight / 4 + "px"

    function moveUl() {
        for (var i = 0; i < ulLength; i++) {

            Box.getElementsByTagName("ul")[i].style.top = Box.getElementsByTagName("ul")[i].offsetTop + iSpeed + "px"
            if (Box.getElementsByTagName("ul")[i].offsetTop >= Box.offsetHeight) {

                var blackLi = parseInt(Math.random() * 4)

                Box.getElementsByTagName("ul")[i].style.top = -Box.offsetHeight / 4 + "px"
                for (var j = 0; j < 4; j++) {
                    if (Box.getElementsByTagName("ul")[i].getElementsByTagName("li")[j].blackPos == "black") {
                        alert("游戏结束" + "        " + "得分" + fen);
                        window.location = window.location
                    }

                }

                for (var j = 0; j < 4; j++) {

                    Box.getElementsByTagName("ul")[i].getElementsByTagName("li")[j].style.backgroundColor = ""
                }

                Box.getElementsByTagName("ul")[i].getElementsByTagName("li")[blackLi].blackPos = "black";
				Box.getElementsByTagName("ul")[i].getElementsByTagName("li")[blackLi].style.backgroundColor = "black";
            }
        }

    }

}