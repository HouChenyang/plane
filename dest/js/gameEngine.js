"use strict";var gameEngine={ele:null,allBullet:{},allEnemy:{},init:function(){return this.ele=document.getElementById("main"),this},start:function(){console.log("开始游戏"),gameEngine.loading(function(){console.log("游戏加载完成"),myPlane.init().move(),myPlane.fire(),gameEngine.listenKeybord(),gameEngine.createEnemy(),gameEngine.listenimgCrash()})},loading:function(e){var n=document.createElement("div");n.className="logo",this.ele.appendChild(n);var l=document.createElement("div");l.className="load",this.ele.appendChild(l);var t=["img/loading1.png","img/loading2.png","img/loading3.png"],o=0,a=this,i=setInterval(function(){if(o>=t.length-1){clearInterval(i),a.ele.removeChild(n),a.ele.removeChild(l);var m=0;setInterval(function(){a.ele.style.backgroundPositionY=a.ele.offsetTop+m+++"px"},30);e()}l.style.background="url("+t[++o]+") no-repeat"},300)},listenKeybord:function(){var e=0,n=0;onkeydown=function(l){37==(l=l||event).keyCode&&(e=-10),38==l.keyCode&&(n=-10),39==l.keyCode&&(e=10),40==l.keyCode&&(n=10)},onkeyup=function(){e=0,n=0},setInterval(function(){var l=myPlane.ele.offsetLeft+e;l<0&&(l=0),l>gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth&&(l=gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth),myPlane.ele.style.left=l+"px",myPlane.ele.style.top=myPlane.ele.offsetTop+n+"px"},30)},createEnemy:function(){setInterval(function(){Math.random()>.5&&new Enemy(Enemy.prototype.enemy_type_large).init().move()},6e3),setInterval(function(){Math.random()>.5&&new Enemy(Enemy.prototype.enemy_type_middle).init().move()},3e3),setInterval(function(){Math.random()>.3&&new Enemy(Enemy.prototype.enemy_type_small).init().move()},1e3)},listenimgCrash:function(){console.log("listeningCrash"),setInterval(function(){for(var e in gameEngine.allEnemy)for(var n in gameEngine.allBullet)console.log(1),isCrash(gameEngine.allEnemy[e].ele,gameEngine.allBullet[n].ele)&&(console.log(12),console.log("发生了碰撞"),gameEngine.allBullet[n].boom(),delete gameEngine.allBullet[n],gameEngine.allEnemy[e].hurt())},30)}};