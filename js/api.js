/**
 * @author changxm
 * @date 2014-06
 **/
var Api_dealer;
if( Api_dealer == undefined ){
    Api_dealer = function(){};
}
if( Api_dealer.act == undefined ){
    Api_dealer.act = function(){};
}
Api_dealer.uri = {
    hosts : '//datacenter.dongfeng-citroen.com.cn/',
    base_url : '//datacenter.dongfeng-citroen.com.cn/index.php/'
}

Api_dealer.act  = function(objProvince, objCity, objDealer){
    this.goo = function(){
    },

        this.get_province = function(data,callback){

            $.post( Api_dealer.uri.base_url + 'api/drive_P?jp=1' , data, function(json){
                //省份
                if(json && json.code=='200' && json.data && $('#'+objProvince).length==1){
                    var _h = '';
                    $.each(json.data, function(k,v){
                        _h += '<option>'+v.provincename + '</option>';
                    });

                    $('#'+objProvince).empty().append(_h);

                    if(callback){
                        callback(json);
                    }

                }

            }, 'jsonp' );
        }
    this.get_city = function(data, callback){

        // console.debug( $('#'+objProvince +' option:selected').val() );

        $.post(Api_dealer.uri.base_url + 'api/drive_C?jp=1', 'pid='+$('#'+objProvince+'').val()+'&'+data, function(json) {

            if(json.code=='200' && json.data){
                var _h = '';
                $.each(json.data, function(k, v) {

                    _h += '<option>'+v.cityname + '</option>';
                });
                $('#'+objCity).empty().append(_h);
                if(callback){
                    callback(json);
                }
            }

        }, 'jsonp');
    }

    this.get_dealer = function(data, callback){

        // console.debug( $('#'+objProvince +' option:selected').val() );

        $.post(Api_dealer.uri.base_url + 'api/get_dealers?jp=1', 'pid='+$('#'+objProvince +' option:selected').val()+'&cid='+ $('#'+objCity+' option:selected').val()+'&'+ data, function(json) {

            if(json.code=='200' && json.data){
                var _h = '<option phone=" ">请选择</option>';
                $.each(json.data, function(k, v) {
                    _h += '<option>'+v.name + '</option>';

                });
                $('#'+objDealer).empty().append(_h);
                if(callback){
                    callback(json);
                }
            }

        }, 'jsonp');
    }


}
