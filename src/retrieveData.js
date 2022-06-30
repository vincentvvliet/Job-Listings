const fs = require('fs');

export default function getData(fileName) {
    const toParse = fs.readFileSync(`../${fileName}`, {encoding: 'utf8', flag: 'r'});
    // const result = []
    // JSON.parse(toParse).forEach(job => {
    //     result.push({
    //         company: job.company,
    //         position: job.position,
    //         languages: job.languages,
    //     })
    //     console.log(job)
    // })

    return JSON.parse(toParse)
}
