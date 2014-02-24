function selectChange(){
	if($('#select #selectmenu1').val()=="四川"){
	  $('#select #selectmenu2 option').remove();
      $('#select #selectmenu2').append("<option value='峨眉山'>峨眉山</option><option value='乐山大佛'>乐山大佛</option>"+
        "<option value='九寨沟'>九寨沟</option><option value='都江堰'>都江堰</option>"+
        "<option value='四姑娘山'>四姑娘山</option><option value='泸沽湖'>泸沽湖</option>"+
        "<option value='西岭雪山'>西岭雪山</option><option value='黄龙'>黄龙</option>");
      $('#select #selectmenu2').change();
    }
    
	else if($('#select #selectmenu1').val()=="北京"){
      $('#select #selectmenu2 option').remove();
      $('#select #selectmenu2').append("<option value='故宫'>故宫</option><option value='长城'>长城</option>"+
      	"<option value='天安门广场'>天安门广场</option><option value='八达岭长城'>八达岭长城</option>"+
      	"<option value='鸟巢'>鸟巢</option><option value='香山公园'>香山公园</option>"+
      	"<option value='颐和园'>颐和园</option><option value='圆明园'>圆明园</option>"+
      	"<option value='天坛'>天坛</option><option value='北海公园'>北海公园</option>");
      $('#select #selectmenu2').change();
    }
} 