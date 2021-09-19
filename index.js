module.exports = function reee(d) {
  d.hook('S_CHAT', 4, (e) => {
    if (d.game.me.is(e.gameId) && e.message.includes(d.settings.message) && d.settings.enabled) {
      setTimeout(() => { d.send('C_LEAVE_PARTY', 1) }, d.settings.delay)
    }
  })
  d.command.add('tyfp', (arg, arg2) => {
    if(!arg) {d.settings.enabled = !d.settings.enabled; d.command.message(`${d.settings.enabled ? 'enabled' : 'disabled'}`)}
    if(arg == 'delay' && arg2) {d.settings.delay = parseInt(arg2); d.command.message(`delay set to ${arg2}`)}
    if(arg == 'message' && arg2) {d.settings.message = arg2; d.command.message(`message set to ${arg2}`)}
  })
}
