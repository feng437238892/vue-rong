const _axios = require('axios');
export default {
  methods:{
    axios:function(params,callback){

      _axios(params).then(function(res){
        callback(res);
      });

    }

  }
}
