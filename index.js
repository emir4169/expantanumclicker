
// Make basic player data structure, for a new fresh save file.
player = {}
let matter = 1
let matter_per_click = 1
player.matter_per_click = ExpantaNum(1)
player.matter = ExpantaNum(matter)
let antimatter = 0
player.antimatter = ExpantaNum(0)
// Functions for saving and loading player data.
let saving = {}
saving.save = function(){
    let savingdata = {}
    savingdata.matter_per_click = 1
    savingdata.matter = JSON.stringify(player.matter.toJSON())
    savingdata.antimatter = JSON.stringify(player.antimatter.toJSON())
    return btoa(JSON.stringify(savingdata))
}
saving.load = function(savefile){
     let playerlip = JSON.parse(atob(savefile))
     playerlip.matter = player.matter.constructor.fromJSON(playerlip.matter)
     playerlip.antimatter = player.antimatter.constructor.fromJSON(playerlip.antimatter)
    player = playerlip
}
// Make the button in index.html increase matter.
function matterclick()
{
    if (matter == 1) news.begin();
    player.matter =  player.matter.add(player.matter_per_click)
    player.antimatter = player.antimatter.add(Math.round((0.005 * player.matter)))
    player.matter_per_click = player.antimatter.root(player.matter) + 1
    document.getElementById("showmatter").innerText = player.matter.toHyperE().toString()
    document.getElementById("showantimatter").innerText = player.antimatter.toHyperE().toString()
}
