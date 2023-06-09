
// Make basic player data structure, for a new fresh save file.
player = {}
player.matter_per_click = ExpantaNum(1)
player.matter = ExpantaNum(0)
player.antimatter = ExpantaNum(0)
function tick(){
    // thank me later
    let anttimattergenerationyes = player.matter.gte(100)
    if (anttimattergenerationyes){
    player.antimatter = player.antimatter.add(1)
    // I AM NEVER GONNA USE THE OLD METHOD OF DOING THIS AGAIN I HATE CALCULATING HOW SMALL OF A NUMBER I HAVE TO MULTIPLY BY FOR IT
    }
}
setInterval(tick(), 200)
tick()
// Functions for saving and loading player data.
let saving = {}
saving.save = function(){
    let savingdata = {}
    savingdata.matter_per_click = JSON.stringify(player.matter_per_click.toJSON())
    savingdata.matter = JSON.stringify(player.matter.toJSON())
    savingdata.antimatter = JSON.stringify(player.antimatter.toJSON())
    return btoa(JSON.stringify(savingdata))
}
saving.load = function(savefile){
     let playerlip = JSON.parse(atob(savefile))
     playerlip.matter = player.matter.constructor.fromJSON(playerlip.matter)
     playerlip.antimatter = player.antimatter.constructor.fromJSON(playerlip.antimatter)
     playerlip.matter_per_click = player.matter_per_click.constructor.fromJSON(playerlip.matter_per_click)
    player = playerlip
}
// Make the button in index.html increase matter.
function matterclick()
{
    player.matter =  player.matter.add(player.matter_per_click.add(player.antimatter.root(player.matter)))
    player.matter_per_click = 1
    document.getElementById("showmatter").innerText = player.matter.toHyperE().toString()
    document.getElementById("showantimatter").innerText = player.antimatter.toHyperE().toString()
}
news.begin();