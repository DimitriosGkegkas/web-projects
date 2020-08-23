
      $("#un").val("etsi");
      var htmlOn=true;
      var cssOn=true;
      var jqOn=true;
      var outputOn=true;
      var openTabs=4;
        $("#htmlPage").click(function(){
          if(htmlOn){
            htmlOn=false;
            openTabs-=1;
            $("#htmlPI").css("display","none");
            $("#htmlPage").css("background-color","CornflowerBlue");
            if(openTabs==4) $(".screens").css("width","24%");
            else if(openTabs==3)$(".screens").css("width","33%");
            else if(openTabs==2)$(".screens").css("width","49%");
            else if(openTabs==1)$(".screens").css("width","99%");

          }
          else{
            htmlOn=true;
            openTabs+=1;
            $("#htmlPI").css("display","block");
            $("#htmlPage").css("background-color","white");
            if(openTabs==4) $(".screens").css("width","24%");
            else if(openTabs==3)$(".screens").css("width","33%");
            else if(openTabs==2)$(".screens").css("width","49%");
            else if(openTabs==1)$(".screens").css("width","99%");

          }
        })


        $("#CSSPage").click(function(){
          if(cssOn){
            cssOn=false;
            openTabs-=1;
            $("#cssPI").css("display","none");
            $("#CSSPage").css("background-color","CornflowerBlue");
            if(openTabs==4) $(".screens").css("width","24%");
            else if(openTabs==3)$(".screens").css("width","33%");
            else if(openTabs==2)$(".screens").css("width","49%");
            else if(openTabs==1)$(".screens").css("width","99%");

          }
          else{
            cssOn=true;
            openTabs+=1;
            $("#cssPI").css("display","block");
            $("#CSSPage").css("background-color","#EAF0FF");
            if(openTabs==4) $(".screens").css("width","24%");
            else if(openTabs==3)$(".screens").css("width","33%");
            else if(openTabs==2)$(".screens").css("width","49%");
            else if(openTabs==1)$(".screens").css("width","99%");

          }
        })
        $("#jsPage").click(function(){
          if(jqOn){
            jqOn=false;
            openTabs-=1;
            $("#jsPI").css("display","none");
            $("#jsPage").css("background-color","CornflowerBlue");
            if(openTabs==4) $(".screens").css("width","24%");
            else if(openTabs==3)$(".screens").css("width","33%");
            else if(openTabs==2)$(".screens").css("width","49%");
            else if(openTabs==1)$(".screens").css("width","99%");

          }
          else{
            jqOn=true;
            openTabs+=1;
            $("#jsPI").css("display","block");
            $("#jsPage").css("background-color","#EAF0FF");
            if(openTabs==4) $(".screens").css("width","24%");
            else if(openTabs==3)$(".screens").css("width","33%");
            else if(openTabs==2)$(".screens").css("width","49%");
            else if(openTabs==1)$(".screens").css("width","99%");

          }
        })
        $("#outPage").click(function(){
          if(outputOn){
            outputOn=false;
            openTabs-=1;
            $("#outputPI").css("display","none");
            $("#outPage").css("background-color","CornflowerBlue");
            if(openTabs==4) $(".screens").css("width","24%");
            else if(openTabs==3)$(".screens").css("width","33%");
            else if(openTabs==2)$(".screens").css("width","49%");
            else if(openTabs==1)$(".screens").css("width","99%");

          }
          else{
            outputOn=true;
            openTabs+=1;
            $("#outputPI").css("display","block");
            $("#outPage").css("background-color","#EAF0FF");
            if(openTabs==4) $(".screens").css("width","24%");
            else if(openTabs==3)$(".screens").css("width","33%");
            else if(openTabs==2)$(".screens").css("width","49%");
            else if(openTabs==1)$(".screens").css("width","99%");
          }
        })

        $(".myInput").on('input', function() {
          $("#output").val("pipa");
          var message="";
          message+=$("#inputHtml").val();
          message+="<style>" + $("#inputCss").val() +"</style>";
          message+="<script>" + $("#inputJS").val() + "</" + "script>";
          $("#output").html(message);

        }).trigger('input');

