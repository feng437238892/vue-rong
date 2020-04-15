const mutations = {
  increment(state){
  	state.count++
  },
  dercement:function(state){
    state.count--
  },
  shows:function(state){
  	console.log(state,"dssd")
  	state.showFooter = !state.showFooter;

  },
  adds:function(state){
   console.log(state,"statestatestate")
   state.data_list = {
     message:'apple',
     price:'32'
   }
  },
  modifyTips:function(state,msg){
    state.testTxt.tips= '冯梦荣';
    // state.testTxt.tips;
   // console.log(state)
   // console.log(msg)
  },
  　updateUserInfo(state,nickName) {
         console.log(state)
         console.log(nickName)
　　　　　　state.nickName = nickName;

　},
}
export default mutations;