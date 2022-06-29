import { createApp } from 'vue'
import App from './App.vue'

const fs = require('fs');

createApp(App).mount('#app')

function retrieveData(fileName) {
    const toParse = fs.readFileSync(`../${fileName}`, {encoding: 'utf8', flag: 'r'});
    // return parse(toParse, {delimiter: ';', quote: false, columns: true});
    return toParse
}