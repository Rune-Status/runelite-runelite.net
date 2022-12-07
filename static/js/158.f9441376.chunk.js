(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[158],{757:function(e,n){e.exports={title:"1.9.5 Release",description:"Clue notes and npc highlight enhancements",author:"Adam",body:'<h3>Clue notes</h3>\n<p>Notes can be attached to clue scroll hints via shift+right clicking the overlay and selecting <code>Set note</code>. The note is saved and shown again if you get the same clue step in the future.</p>\n<p><img src="/img/blog/1.9.5-Release/clue-note.png" alt="clue-note"></p>\n<h3>Per NPC highlight color and types</h3>\n<p>NPC indicators highlight color and highlight type can now be configured per NPC type by selecting the <code>Tag color</code> and <code>Tag style</code> options. This overrides the global setting configured in the plugin.</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><img src="/img/blog/1.9.5-Release/npc-color.png" alt="npc-color"></td>\n<td><img src="/img/blog/1.9.5-Release/npc-style.png" alt="npc-style"></td>\n</tr>\n</tbody>\n</table>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The world hopper has an option to filter the world list by world type</li>\n<li>Wiki FSW GE prices are now used when on a fresh start world</li>\n<li>The thrall timer has been updated for the new CA task rewards</li>\n<li>Thralls can now be hidden with the entity hider</li>\n<li>The prayer flick and orb colors are now configurable</li>\n<li>Objects\' 5th options, such as the H.A.M. Hideout trapdoor, can now be swapped with menu entry swapper</li>\n<li>A bug causing erroneous Wintertodt round start notifications to be sent has been fixed</li>\n<li>Fix tracking Dorgeshuun crossbow special attacks</li>\n<li>Zalcano damage tracker correctly tracks max hitsplat variants</li>\n<li>Menaphite remedy has been added to item identification</li>\n<li>Opponent info\'s always show (de)buffer timer option now works correctly, again</li>\n<li>TOA team sizes have been added to the pb command, eg <code>!pb toa 2</code></li>\n</ul>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 19 contributors this update!</p>\n<pre><code>Adam (53):\n      loottracker: clear session records when clearing panel\n      api: add graphics object animation and frame\n      api: exclude keycode from rt api\n      hooks: rate limit error reports\n      api: update 209\n      cache: update 209\n      api: add projectile animation accessors\n      wintertodt: fix double round notification\n      ground items: remove lots! quantity\n      zalcano: track max hitsplat variants\n      idle notifier: add blisterwood jump scare anim\n      xp updater: use wom api v2\n      api: replace gameobject angle with int\n      api: add rl object orientation and radius\n      api: add itemcontainer count method\n      api: rename spell selected to widget selected\n      api: deprecate widgetitem index\n      item manager: add wiki fsw prices\n      item mapping: add test for mapping cycles\n      ground markers: combine show import/export and clear config\n      prayer: add config for flick and orb color\n      client: update to cache 2022-11-09-rev209\n      clues: use npc ids for cipher clues\n      clues: remove male from barbarian hint\n      farming: update treznor npc id\n      menu swapper: use submenus for ui swaps\n      api: add post client tick event\n      api: add widget tick api\n      api: remove forced widget position api\n      api: add post menu sort event\n      boosts: remove unused canShowBoosts\n      spec counter: fix tracking dorgeshuun specs\n      spec counter: fix tracking melee specs\n      clues: update gypsy aris clue\n      ping: read multiple icmp packets until timeout or error\n      menu swapper: fix npe accessing widget actions\n      menu swapper: fix walk here swaps\n      menu swapper: use submenu for npc swaps\n      menu swapper: remove target on npc submenu\n      inv tags: use submenus\n      inv tags: remove old inv tag config keys\n      overlay: add callback to overlay menu entry\n      clues: add clue notes\n      clues: remove TextClueScroll\n      npc indicators: add per-npc highlight color and render style\n      cannon: increase warning threshold max to 60\n      Revert &quot;api: remove forced widget position api&quot;\n      Revert &quot;api: add widget tick api&quot;\n      menu swapper: restore use of deprioritization for walk here swaps\n      info: cleanup panel on shutdown\n      timers: add ca tier boost to thrall timer\n      world hopper: combine quick hop and region filter\n      world hopper: add world type filter\n\nClayton (1):\n      api: Remove unused MUSIC_TRACKS_UNLOCKED VarPlayer definitions (#15852)\n\nDigiridoo (1):\n      entity hider: add option to hide Thralls\n\nDylan Critz (1):\n      item identification: Add Menaphite remedy potion (#15896)\n\nJZomDev (1):\n      chat commands: add fishingtodt mapping to tempoross (#15802)\n\nJae Ren (1):\n      slayer: Add Ogre task alternative monsters (#15888)\n\nJohn Kryspin (1):\n      api: fix eighth spelling\n\nJordan Atwood (12):\n      item stats: Clean up gauntlet and CoX entries\n      item stats: Add Tombs of Amascut consumables\n      ItemMapping: Add new locked items\n      ItemMapping: Add new imbued twisted slayer helm variant\n      ItemMapping: Use ItemVariations for tradeable item variants\n      ItemMapping: Add Pharaoh\'s sceptre\n      plugins: Use ItemVariationMapping for item variant lists\n      ItemMapping: Fix black mask cycle\n      ItemMapping: Fix includeVariations field name\n      ItemMapping: Use the base variant ID for variant mappings\n      menu swapper: Fix duplicate Reset option in bank\n      timers: Remove divine potion timers on death\n\nLlemonDuck (1):\n      boosts: fix always show (de)buff timer\n\nMacweese (1):\n      game: Add isDying override for Gadderanks (#15557)\n\nMantautas Jurksa (1):\n      clues: add world map hint for music clue scrolls (#15778)\n\nMax Weber (5):\n      rl-api: add all jagex keycodes\n      rl-api: remove KeyFocusListener\n      cache: add seq animaya fields\n      cache: update ItemDefinition to 209\n      rl-client: add locked divine rune pouch\n\nMichael (1):\n      loot tracker: use price type for npc kill chat message\n\nRobin (1):\n      xp updater: add account hash on Wise Old Man update\n\nSkretzo (1):\n      skill calculator: Set coif crafting action as members-only (#15911)\n\nTimothy J. Aveni (1):\n      menu swapper: Remove extra space from ui swap chat message (#15916)\n\neemkukko (1):\n      item mapping: add ensouled hellhound head\n\nredrumze (1):\n      chat commands: add toa team sizes pb\n\nsam (1):\n      item charges: fix tracking explorer ring charges\n</code></pre>\n',image:"/img/blog/1.9.5-Release/clue-note.png"}}}]);
//# sourceMappingURL=158.f9441376.chunk.js.map