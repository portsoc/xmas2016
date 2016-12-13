(function() {
    "use strict";

    var
    path = "s/",
    addSnowToPage = function () {

    	"use strict";
    	var
    		loop = 500,
    		flakes = 6,
    		maxscale = 7,
    		html = "<div id='sn'>",
    		offset = 2*screen.height,
    		anim,
    		scale,
    		flake,
    		xpos,
    		ypos,
    		speed,
    		delay;

    	while (--loop>0) {
    		flake = 1 + Math.round(Math.random() * (flakes-1) );
    		xpos = Math.random() * screen.width * 2;
    		ypos = Math.random() * offset - offset -100;
    		scale = Math.random() * maxscale;
    		speed = Math.round( (maxscale*50)-(scale*50) );
    		delay = Math.round( Math.random() * maxscale );
    		anim = Math.round( Math.random() ) + 1;

    		html += "<img src='"+path+"img/sf"+flake+".svg' class=f"+anim+" style='width: "+scale+"ex; position: absolute; top:"+ypos+"px; left:"+xpos+"px; animation-delay: "+delay+"s; animation-duration: "+speed+"s; opacity: 1;'>";
    	}
    	document.body.innerHTML += html + "</div>";
        sn.classList.toggle("hidden");
    },


    toggleSnowfall = function(e) {
        if (e && e.code == "KeyS") {
            sn.classList.toggle("hidden");
        }
    },

    prepareSnowfall = function() {
        loadStyle();
    	addSnowToPage();
    	document.addEventListener("keyup", toggleSnowfall);
        toggleSnowfall();
    },

    loadStyle = function(){
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = path + "s.css";
        document.head.appendChild(link);
    };

    window.addEventListener("load", prepareSnowfall);

})()
