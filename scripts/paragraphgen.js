function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function paragraph(option) {
    this.text = paragraphs[option].text;
    this.numOfNouns = paragraphs[option].nouns;
    this.numOfVerbs = paragraphs[option].verbs;
    this.numOfAdjes = paragraphs[option].adjes;
    this.left = paragraphs[option].left;
    this.right = paragraphs[option].right;
    this.replaceNouns(nouns)
    this.replaceVerbs(verbs)
    this.replaceAdjes(adjes)
}

paragraph.prototype.replaceNouns = function(nounbank) {
    for (let i = 0; i < this.numOfNouns; i++) {
        var num = getRandomInt(totalNouns)
        var noun = nounbank[num].noun
        this.text= this.text.replace(`@`, `${noun}`)
    }
}

paragraph.prototype.replaceVerbs = function(verbbank) {
    console.log("hi")
    for (let i = 0; i < this.numOfVerbs; i++) {
        var num = getRandomInt(totalVerbs)
        var verb = verbbank[num].verb
        this.text= this.text.replace(`%`, `${verb}`)
    }
}

paragraph.prototype.replaceAdjes = function(adjebank) {
    console.log("hi")
    for (let i = 0; i < this.numOfAdjes; i++) {
        var num = getRandomInt(totalAdjes)
        var adje = adjebank[num].adje
        this.text= this.text.replace(`#`, `${adje}`)
    }
}
