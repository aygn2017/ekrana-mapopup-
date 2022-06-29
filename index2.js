function SettingsPopup() {
    var desktopWidth = "500px";
    var desktopHeight = "fit-content";
    var mobileWidth = "666px";
    var mobileHeight = "fit-content";
    FirePopup(desktopWidth, desktopHeight, mobileWidth, mobileHeight);
  }
  
  var campName="Exit-Intent-Survey";
  ga("create", "UA-28971462-1", {name: "RMC", cookieDomain: "auto"});
  
  function FirePopup(width, height, mWidth, mHeight) {
    if (!document.querySelector(".vl-popup-container")) {
        ga('RMC.send', 'event', 'RMC', campName, "Impression", {nonInteraction: true});
        var style = document.createElement("style");
        style.innerHTML = `
        .vl-popup-container{
            z-index: 10000;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
        }
        .vl-popup-header {
          background: white;
          color: #6BD93A;
          text-align: center;
          line-height: 25px;
          font-size: 15px;
          border-radius: 15px 15px 0px 0px;
          padding: 20px 0px;
          font-family: 'Roboto', sans-serif;
          height: 540px;
      }
        .pop-header{
          margin-top:8%;
          margin-bottom:21%;
          font-size:200%;
          z-index:-1;
        }
  
        .vl-options{
            width: 100%;
            border: 0px solid #375A5A;
            padding: 1px;
            text-align: left;
            color: black;
            font-size: 15px;
            cursor: pointer;
        }
  
        .vl-selected{
            background: #375A5A;
            color:white;
        }
        .vl-popup-overlay{
            z-index: 10000;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.8;
            position: fixed;
            top: 0;
            left: 0;
        }
        .vl-popup{
            position: absolute;
            z-index: 100001;
            width:${width};
            height:${height};
            background: white;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            border-radius: 15px 15px 0px 0px;
        }
  
        .vl-popup > a > img {
            width:${width};
            height:${height};
        }
        .vl-popup-content{
            height: 406px;
            background: white;
            margin: 10px 35px;
            border-radius: 30px;
            text-align: center;
            display: flex;
            flex-direction: column;
           
            align-items: center;
            font-weight: 600;
        }
        .vl-back{
            position: absolute;
            left: 30px;
            bottom: 329px;
            padding: 5px;
            outline: none;
            border: none;
            width: 50px;
            cursor: pointer;
        }
        .vl-popup-button {
          background: #31b618;
          font-size: 15px;
          height: 40px;
          width: 145px;
          font-weight: 600;
          color: white;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 25px;
          margin-right: 13px;
         
      }
        .vl-input-type-ayrilma{
            width: 100%;
            border-radius: 5px;
            max-height: 200px;
            height: 100px;
            display:none;
        }
        .vl-why{
            display:none;
        }
       
        .vl-popup-close{
            position: absolute;
            right: 5;
            top: 5;
            cursor: pointer;
            z-index: 100002;
            width:25px;
            height:25px;
            top:-8px;
            right:-21px;      
        }
        .vl-other-section{
            width:100%;
        }
        @media only screen and (max-width: 768px) {
            .vl-popup-header{
                font-size:12px;
            }
            .vl-options{
                font-size:13px;
            }
            .vl-popup-header h3{
                font-size:14px;
            }
            .vl-popup {
                width:${mWidth};
                height:${mHeight};
            }
            .vl-popup > a > img {
                width:${mWidth};
                height:${mHeight};
            }
            .vl-popup-close{
                font-size: 15px;
                line-height: 15px;
            }
            #Sorular{
                width:200px;
            }
            .vl-input-type-ayrilma{
            }
            .vl-why{
                margin:unset;
            }
            .vl-popup-button{
                width:200px;
            }
  
            input[type='text'], input[type='email'], input[type='password'], textarea {
                width: 37%;
                display: block;
            }
         
         
          h1, h2, h3, h4, h5, h6 {
            font-weight: 400;
            font-style: normal;
            line-height: 1.2;
            color: green;
            font-size: 24px;
            margin-top:7px;
            margin-left:-106px;
        }  
        .vl-popup {
            position: absolute;
            z-index: 100001;
            width: 500px;
            height: 560px;
            background: white;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            border-radius: 15px 15px 0px 0px;
        }
        
        }
    }    
    `;
        document.head.append(style);
  
        var div = document.createElement("div");
        div.setAttribute("class", "vl-popup-container");
        div.innerHTML = `
        <div class="vl-popup-overlay"></div>
        <div class="vl-popup">
            <div class="vl-popup-header">
  
            <div class="pop-header">
            <h1>EMLAKJET</h1>
            <h1>OKUT</h1>
            <h1>KAZANA</h1>
            <h1>HOŞGELDİNİZ</h1>
            </div>
            <img src="
            https://imgvisilabsnet.azureedge.net/banner/uploaded_images/305_1365_20220629234933801.png" style="height:18px;margin-left:-432px;margin-bottom:-3px;width:20px;"> <p style="margin-bottom:-45px;height:44px;margin:-25px; color:#000000">Güvenliginiz için cep telefonunuza onay kodu gönderilecektir.</p><br/>
            <div class="pop-input">
            <input type="text" name="ad" id="ad" required placeholder="Ad Soyad">
  
            <input type="text" name="tel" id="telefon" required placeholder="Cep Telefonu">
            <input type="text" name="email" id="eposta" required placeholder="E-Posta Adresi*">
  
            <button class="vl-back" style='display:none;'><i class="fas fa-undo"></i></button>
            <button class="vl-popup-button">GÖNDER</button>
     
            </div>
            </div>
            <div class="vl-popup-content">
                <div class="vl-options"><input type="checkbox" id="üye1" name="üye1" value="üye1">
                <label for="üye1"> Üyelik Sözleşmesini ve gizlilk politikasını okudum,onaylıyorum.*</label><br></label></div><br/>
                <div class="vl-options"><input type="checkbox" id="üye2" name="üye2" value="üye2">
                <label for="üye2"> Kişisel verilerin işlenmesiyle ilgili Aydınlatma Metnini Okuyup anladıgını beyan ve kabul ederim.*</label></div>
                <div class="vl-options"><input type="checkbox" id="üye3" name="üye3" value="üye3">
                <label for="üye3"> Verilerimin Açık Rıza Metni'nde belirtilen şekilde işlenmesine  onay veriyorum.</label><br/><br></div>
                <div class="vl-options"><input type="checkbox" id="üye4" name="üye4" value="üye4">
                <label for="üye4">Tüm duyuru ve kampanyalardan ticari e-ileti yoluyla haberdar olmak istiyorum.</label></div>
                <div class="vl-other-section">
               
            </div>
             
        </div>
        <img class="vl-popup-close" src="https://img.visilabs.net/banner/uploaded_images/323_1326_20210127153709279.png">
  
        </div>
    `;
        document.body.append(div);
  
        document.querySelector(".vl-popup-overlay").addEventListener("click", closePopup);
        document.querySelector(".vl-popup-close").addEventListener("click", closePopup);
  
        function closePopup() {
            document.querySelector(".vl-popup-container").remove();
        }
        //<%VLSendImpressionFunc%>;
  
        $(".vl-back").on("click", function() {
            $(".vl-options").css("display", "block");
            document.querySelector(".vl-input-type-ayrilma").style.display="none";
            document.querySelector(".vl-why").style.display="none";
            $(".vl-input-type-ayrilma").val('');
            $(".vl-back").css("display", "none");
        });
  
        $(".vl-options").on("click",function(){
            var answer = $(this).text();
            console.log(answer);
  
            $(".vl-options").removeClass("vl-selected");
            $(this).toggleClass("vl-selected");
            if(answer == "Diğer"){
                $(".vl-options").css("display", "none");
                $(".vl-back").css("display", "block");
                document.querySelector(".vl-input-type-ayrilma").style.display="block";
                document.querySelector(".vl-why").style.display="block";
            }
            else{
                $(".vl-options").css("display", "block");
                $(".vl-back").css("display", "none");
                document.querySelector(".vl-input-type-ayrilma").style.display="none";
                document.querySelector(".vl-why").style.display="none";
            }
        });
  
        document.querySelector(".vl-popup-button").addEventListener("click",function(){
            var answer = $(".vl-options.vl-selected").text();
            document.getElementsByClassName("vl-popup-header")[0].remove();
  
            if($(document).find('.vl-selected').length != 1 ) {
                alert("Lütfen ayrılma nedeninizi maksimum 1 adet olucak şekilde belirtiniz.");
                return true;
             } else if(answer == "Diğer" && document.querySelector(".vl-input-type-ayrilma").value == '') {
                alert("Lütfen ayrılma nedeninizi belirtebilir misiniz?");
                return true;
            }else {
                if(answer == "Diğer"){
                    answer = "Diğer-"+document.querySelector(".vl-input-type-ayrilma").value;
                }
                sendAnswer(answer);
            }
        });
        function sendAnswer(ans){
            var vl = new Visilabs();
            vl.AddParameter("OM.survey_ans", ans);
            vl.Collect();
           // <%VLSendClickFunc%>;
            ga('RMC.send', 'event', 'RMC', campName, "Click", {nonInteraction: true});
            document.querySelector(".vl-popup-content").innerHTML=`
            <span style="font-size:20px;">Kaydınız başarıyla <b style="font-weight:800;">alındı.</b></span><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <img src="https://imgvisilabsnet.azureedge.net/banner/uploaded_images/271_909_20220629225210695.png"style="height:25px;top:-230px;right:-10px;position:relative;">
            <span style="font-size:16px; margin-top:-120px;">Kampanya sonuçlarını öğrenmek için Emlakjet <b style="font-weight:800;">Instagram hesabını takip etmeyi unutmayın.</b></span><br/>
            <input type="button" onclick="location.href='https://www.instagram.com/emlakjet/';" value="İnstagrama Git" style="background: #31b618;font-size: 15px;height: 40px;width: 145px;font-weight: 600;color: white;
            border-radius: 10px;cursor: pointer;margin-top: 25px;margin-right: 13px;"/>
            `;
        }
    }
  }                  
  var exitCheck = false;
  if(window.innerWidth>600){
   
    document.addEventListener("mouseleave", function (e) {
        if (e.clientY < 0 && exitCheck == false) {
            exitCheck=true;
            SettingsPopup();
        }
   
    }, false);
  }
  else{
    var lastScrollTop = 0;
    var checkScrollSpeed = (function (settings) {
        settings = settings || {};
        var lastPos, newPos, timer, delta,
            delay = settings.delay || 50;
        function clear() {
            lastPos = null;
            delta = 0;
        }
        clear();
        return function () {
            newPos = window.scrollY;
            if (lastPos != null) {
                delta = newPos - lastPos;
            }
            lastPos = newPos;
            clearTimeout(timer);
            timer = setTimeout(clear, delay);
            return delta;
        };
    })();
    window.addEventListener("scroll", function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
        } else {
            if (checkScrollSpeed() <= -80) {
                if (!exitCheck) {
                    exitCheck = true;
                    SettingsPopup();
                }
            }
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);
  }
  SettingsPopup()