import dispatcher from './dispatcher';

module.exports = {
    userLogin:function(school){
        dispatcher.dispatch({
           school:school,
           type:'school:userLogin'
        });
    },
    deleteSchool:function(school){
        dispatcher.dispatch({
           school:school,
           type:'school:deleteSchool'
        });
    }
}
