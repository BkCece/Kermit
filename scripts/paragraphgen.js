function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function paragraph(option) {
    this.text = paragraphs[option].text;
    this.numOfNouns = paragraphs[option].nouns;
    this.numOfVerbs = paragraphs[option].verbs;
    this.replaceNouns(nouns)
    this.replaceVerbs(verbs)
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
