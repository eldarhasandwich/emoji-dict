var fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var words = require("./emoji.txt");

// console.log(words);

let data = {}

let blocks = words.split("</tr>\n<tr>")

// console.log(blocks.length)
// console.log(blocks[4])

blocks.forEach((item,index) => {
    let lines = item.split("\n")
    // console.log(lines)
    
    data[index] = {}
    lines.forEach((line) => {

        if (line.search(`class="chars"`) >= 0 && line.search(`class="andr"`) < 0) {
            // console.log(line)
            let emoji = line.split(`<td class="chars">`)[1]
            emoji = emoji.split(`</td>`)[0]
            console.log(emoji)

            data[index].emoji = emoji
        }

        if (line.search(`class="name"`) >= 0 && line.search(`class="andr"`) < 0) {
            // console.log(line)
            let string = line.split(`<td class="name">`)[1]
            string = string.split(`</td>`)[0]
            console.log(string)

            data[index].name = string
        }
    })

    if (!data[index].name || !data[index].emoji) {
        delete data[index]
    }

})

fs.writeFile("./emoji.json", JSON.stringify(data))