const actions= {
     add:function({commit,state}){
     	commit('increment')

     },
     reduce:function({commit,state}){
     	commit('dercement')
     },
     show:function({commit,state}){
     	commit('shows')
     },
     addone:function({commit,state}){
     	commit('adds')
     },
     updateUserInfo(context) {
            context.commit("updateUserInfo");
     },
}
export default actions