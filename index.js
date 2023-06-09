
// Make basic player data structure, for a new fresh save file.
player = {}
player.matter_per_click = ExpantaNum(1)
player.matter = ExpantaNum(0)
player.antimatter = ExpantaNum(0)
var mainGameLoop = window.setInterval(function() {
    if (player.matter.gte(100)){
        player.antimatter.add(1)
        document.getElementById("showantimatter").innerText = player.antimatter.toHyperE().toString()
    }
  }, 200)
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
    player.matter_per_click = ExpantaNum(1)
    document.getElementById("showmatter").innerText = player.matter.toHyperE().toString()
}
function loadnews(){
    // This is absolutely busted. but for some reason news dont work if i dont do it this way.
    news.begin()
}
loadnews()
