import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const fs = require('fs');

function retrieveData(fileName) {
    const toParse = fs.readFileSync(`../${fileName}`, {encoding: 'utf8', flag: 'r'});
    // return parse(toParse, {delimiter: ';', quote: false, columns: true});
    return toParse
}