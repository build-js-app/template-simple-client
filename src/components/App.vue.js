import dataService from '../services/dataService';
import ListComponent from './ListComponent.vue';

export default {
    components: {ListComponent},
    name: 'app',
    data () {
        return {
            message: ''
        }
    },
    created () {
        this.getMessage();
    },
    methods: {
        async getMessage() {
            let message = await dataService.getMessage();

            this.message = message ? message : 'Hello World from client';
        }
    }
}