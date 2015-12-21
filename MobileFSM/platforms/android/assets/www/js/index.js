/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/*var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        // app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();*/




$(function(){
    'use strict'

    //Login page event.
    $(document).on("pageInit", "#page-login", function(e, id, page) {
        $.alert('page-login inited');
        var $content = $(page).find('.content');
        $content.on('click','#id_sign_in',function () {
          
          var userName=document.getElementById("user_name").value;
          var password=document.getElementById("user_password").value;
          
          var user = getCurrentUser(userName,password);

          login(user);
         


        });
        $content.on('click','#id_sign_cancel',function () {
          $.alert('点击取消');
          
        });

    });
    //Offine E-CAF page event.
    $(document).on("pageInit", "#page-offine", function(e, id, page) {
        $.alert('page-offine inited');
        
    });
    //New Offine E-CAF page event.
    $(document).on("pageInit", "#page-new-offine", function(e, id, page) {
        $.alert('page-new-offine inited');
        var $content = $(page).find('.content');

        $content.on('click','#id_generate',function(){
            console.log("Generate...");
            var str = getAllDatas("page-new-offine");
            $.alert(str);
        });
        $content.on('click','#id_reset',function(){
            console.log("reset ...");
            resetAllDatas("page-new-offine");
            $.alert("haved reset all datas.");
        });
    });
   

    
    $.init();//注意：必须在所有page页面初始话之后调用。
    
});
function getCurrentUser(name,password){
     this.name = name;
     this.password = password;
     return this;
}
function login(user){
    var userName = user.name;
    var password = user.password;
    if (userName == "" || userName == null) {
        $.alert("用户名不能为空");
        return false;
    } else if (password == "" || password == null) {
        $.alert("密码不能为空");
        return false;
    } else {
        //do something for login
        $.alert("name:"+user.name+"   password:"+user.password);
        return true;
    }
}

function getAllDatas(pid){
    var list = document.getElementsByTagName("li").getElementByTagName("input");
    var str="";
    for (var i = 0;i<list.length; i--) {
        //判断是否为文本框
        if(list[i].type=="text"){
            str+=list[i].value;
            if (i!=list.length-1) {
                str+=",";
            }
        }
    }
    return str;
}
function resetAllDatas(pid){
    var list = document.getElementsByTagName("li").getElementByTagName("input");
    for (var i = 0;i<list.length; i--) {
        //判断是否为文本框
        if(list[i].type=="text"){
            list[i].value="";
        }
    }
};
