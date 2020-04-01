var room = HBInit();

room.pluginSpec = {
  name: `rub/test2`,
  author: `ruben`,
  version: `1.0.0`,
  config: {},
  dependencies: [
    `rub/test1`,
  ],
  order: {
    'after': [`rub/test1`],
	},
  incompatible_with: [],
};


let players = room.getPlugin( `rub/ball-touch` ).getPlayersObject();

function onPlayerChatHandler ( player, message ) {
	if ( message == "a" ) console.dir( players );
	else{
		players[player.id].message = [];
		players[player.id].message.push( message );
	}
}

room.onRoomLink = function onRoomLink() {
  room.onPlayerChat = onPlayerChatHandler;
}