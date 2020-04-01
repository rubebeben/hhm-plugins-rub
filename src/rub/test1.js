var room = HBInit();

room.pluginSpec = {
  name: `rub/test1`,
  author: `ruben`,
  version: `1.0.0`,
};

let players = {};

function getPlayersObject () {
	return players;
}

function onPlayerJoinHandler ( player ) {
	players[player.id] = {
		auth : player.auth,
		conn : player.auth,
		name : player.name,
		id : player.id,
	}
}

room.onRoomLink = function onRoomLink() {
  room.onPlayerJoin = onPlayerJoinHandler;
	room.getPlayersObject = getPlayersObject;
}
