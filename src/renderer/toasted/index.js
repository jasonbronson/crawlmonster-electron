import Toasted from 'vue-toasted'
import Vue from 'vue';

Vue.use(Toasted)

let options = {
    type : 'error',
    icon : 'error_outline',
    iconPack: 'fontawesome'
};

Vue.toasted.register('app_crash', 'Oops.. Something Went Wrong..', {
    type : 'error'
})

Vue.toasted.register('error',
    (payload) => {
        
        // if there is no message passed show default message
        if(! payload) {
    	    return "Oops.. Something Went Wrong.."
        }
        
        // if there is a message show it with the message
        return "Error " + payload;
    },
    options
)
