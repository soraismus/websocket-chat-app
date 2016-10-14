// browser events (including hashchange) and socket.io events

/*
  spa.avtr.js
  -----------
  onTapNav
  onHeldstartNav
  onHeldmoveNav
  onHeldendNav
  onSetchatee
  onListchange
  onLogout
* /

/*
  spa.chat.js
  -----------
  onTapToggle
  onSubmitMsg
  onTapList
  onSetchatee
  onListchange
  onUpdatechat
  onLogin
  onLogout
*/

/*
  spa.shell.js
  ------------
  onHashchange
  onResize
  onTapAcct
  onLogin
  onLogout

  initModule = \$container ->
    $(window).bind('resize', onResize).bind('hashchange', onHashchange).trigger('hashchange')
    subscribe($container, 'spa-login', onLogin)
    subscribe($container, 'spa-logout', onLogout)
*/

/*
   spa.model.js
   ------------
   var sio = #  client-side connection to socket protocol  #

   completeLogin = \userList ->
     publish('spa-login', [user])

   people.login = \name ->
     sio.on('userupdate', completeLogin)
     sio.emit('adduser'  { cid, css, name })
   people.logout = ->
     publish('spa-logout', [user])

  chat._publish_listchange = \values ->
    publish('spa-listchange', [values])
  chat._publish_updatechat = \values ->
    msg = values[0]
    publish('spa-updatechat', [msg])
  chat._eave_chat = ->
    sio.emit('leavechat')
  chat.join_chat = ->
    sio.on('listchange', _publish_listchange)
    sio.on('updatechat', _publish_updatechat)
  chat.send_msg = \msg ->
    chat._publish_updatechat([msg])
    sio.emit('updatechat', msg)
  chat.set_chatee = \personId ->
    publish('spa-setchatee', { old_chatee, new_chatee })
  chat.update_avatar = \avatarUpdate ->
    sio.emit('updateavatar', avatarUpdate)
*/

/*
   socket.io.js
   ------------
   io
     .set('blacklist', [])
     .of('/chat')
     .on('connection', \socket ->
       socket.on('adduser', \user ->)
       socket.on('updatechat', \chat ->
         ...
         socket.emit('updatechat', { sender_id, msg_text }))
       socket.on('leavechat', ->)
       socket.on('disconnect', ->)
       socket.on('updateavatar', \avatar ->))
*/

