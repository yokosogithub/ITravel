var db = window.openDatabase("Database", "1.0", "ITravel", 200000);
db.transaction(populateDB);


function populateDB(tx) {
	isTableExists(tx, "USERINFO", function(status) {
            if (!status) {
	 			tx.executeSql('CREATE TABLE IF NOT EXISTS USERINFO (id unique, data)');
            } else{ 
            }
        });
}

function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

function successCB() {
    alert("success!");$
}

function isTableExists(tx, tableName, callback) {
    tx.executeSql('SELECT * FROM USERINFO', [], function(tx, resultSet) {
        if (resultSet.rows.length <= 0) {
            callback(false);
        } else {
            callback(true);
        }
    }, function(err) {
        callback(false);
    });
}

function btnRegister(){

	var email = $('#email').val();
	var password = $('#password').val();

	function insertDB(tx){
		tx.executeSql('INSERT INTO USERINFO (id, data) VALUES ("'+email+'","'+password+'")');
	}

    function successCB(){
	    $.mobile.changePage("#info",{transition:"pop",role:"dialog"});
    }

    function queryDB(tx){
		tx.executeSql('SELECT * FROM USERINFO WHERE id = "'+email+'"',[],querySuccess,errorCB);
	}

	function querySuccess(tx,results){
		var len = results.rows.length;
		if(len==1){
			$("#accountfield").append("<h5 style='color:red'>该邮箱已注册，请重新输入!</h5>");
			$("#email").val(null);
			$('#password').val(null);
			setTimeout("$('#accountfield h5').remove();",1500);
		}
		else{
			db.transaction(insertDB,errorCB,successCB);
		}
	}

	$(document).ready(function(){
		if(email && password){
			db.transaction(queryDB,errorCB);
		}
		else{
		    $("#passfield").append("<h5 style='color:red;text-align:center'>有未输入项，请填写完整!</h5>");
		    setTimeout("$('#passfield h5').remove();",1500);
		}
	});
}


function btnLogin(){
	var email = $('#email').val();
	var password = $('#password').val();
	
	function queryDB(tx){
		tx.executeSql('SELECT * FROM USERINFO WHERE id = "'+email+'"',[],querySuccess,errorCB);
	}
    
    function querySuccess(tx,results){
    	var len = results.rows.length;
    	if(len<=0){
    		$("#accountfield").append("<h5 style='color:red'>该帐号不存在</h5>");
    		setTimeout("$('#accountfield h5').remove();",1500);
    	}
    	else{
    		if(results.rows.item(0).data=password){
    			$('#info h4').text("登录成功");
    			$.mobile.changePage("#info",{transition:"pop",role:"dialog"});
    		}
    		else{
    			$("#passfield").append("<h5 style='color:red;text-align:center'>密码有错，请重新输入!</h5>");
		    	setTimeout("$('#passfield h5').remove();",1500);
      			$('#password').val(null);
    		}
    	}
    }

	$(document).ready(function(){
		if(email && password){
			db.transaction(queryDB,errorCB);
		}
		else{
		    $("#passfield").append("<h5 style='color:red;text-align:center'>有未输入项，请填写完整!</h5>");
		    setTimeout("$('#passfield h5').remove();",1500);
		}
	});
}

	