
import { createStore } from 'vuex'
import journal from '../modules/daybook/store/journal'

const store = createStore({

    // esto seria de manera global
    // state () {
    //     return {
    //       count: 0
    //     }
    //   },
    //   mutations: {
    //     increment (state) {
    //       state.count++
    //     }
    //   }

    // Nombre carpeta del store de daybook
    modules: {
        journal
    }



})

export default store