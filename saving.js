let saving = {}
saving.save = function(player_data){
    let playersip = player_data
    playersip.matter = JSON.stringify(playersip.matter.toJSON())
    playersip.antimatter = JSON.stringify(playersip.antimatter.toJSON())
    return JSON.stringify(playersip)
}
saving.load = function(savefile){
    let playerlip = JSON.parse(savefile)
    playerlip.matter = JSON.parse(playerlip.matter)
    playerlip.antimatter = JSON.parse(playerlip.antimatter)
    return playerlip
}