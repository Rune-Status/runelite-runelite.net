(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[105],{697:function(e,n){e.exports={title:"1.5.32 Release",description:"Global pickpocket menu swap, Low Detail auto-reloading, screenshot to clipboard, and de-duplicated stacked fishing spots",author:"Jordan",body:'<p>The <a href="https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper" native="" rel="nofollow">Menu Entry Swapper plugin</a> can\nnow swap the &quot;Pickpocket&quot; menu option with the &quot;Talk-to&quot; menu option for all NPCs, not just H.A.M\nmembers. (With the exception of NPCs who can be blackjacked)</p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Low-Detail" native="" rel="nofollow">Low Detail plugin</a> will now reload your\ncurrent scene when toggled on or off to apply the changes immediately without requiring a re-log.</p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Screenshot" native="" rel="nofollow">Screenshot plugin\'s</a> <em>Upload</em> setting\nnow allows you to optionally copy the screenshot image to your clipboard when taken. Thanks to\n<a href="https://github.com/Alexsuperfly" native="" rel="nofollow">@Alexsuperfly</a> for this contribution.</p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Fishing" native="" rel="nofollow">Fishing plugin</a> no longer draws duplicate\nsprites for stacked fishing spots of the same type.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Boosts-Information" native="" rel="nofollow">Boosts Information plugin</a> can\nnow toggle displaying combat/non-combat/both boosts</li>\n<li>Examining items found in the seed box will now trigger the <a href="https://github.com/runelite/runelite/wiki/Examine" native="" rel="nofollow">Examine\nplugin</a></li>\n<li>The overlay renderer now shows drag outlines at their proper locations again</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Slayer" native="" rel="nofollow">Slayer plugin</a> correctly recognizes Lizard\nand Vampyre tasks</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Clue-Scroll" native="" rel="nofollow">Clue Scroll plugin</a> saw multiple\nfixes, correcting some STASH unit locations, fixing a Song of the Elves-related clue, fixing some\nclue items showing no names, and added some item variants to some item sets</li>\n<li>The text of a Western Provinces diary step has been updated in the <a href="https://github.com/runelite/runelite/wiki/Diary-Requirements" native="" rel="nofollow">Diary Requirements\nplugin</a> after a change since the\nrelease of the Song of the Elves quest</li>\n<li>The white pixels which appeared at the edges of game objects for some players while using MSAA\nwith the <a href="https://github.com/runelite/runelite/wiki/GPU" native="" rel="nofollow">GPU plugin</a> have been exterminated</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Death-Indicator" native="" rel="nofollow">Death Indicator plugin</a> will\ncorrectly recognize when players die when respawning in Prifddinas</li>\n<li>Braindeath Island now has a <a href="https://github.com/runelite/runelite/wiki/Skybox" native="" rel="nofollow">skybox</a> color</li>\n<li>Corrections have been made in the <a href="https://github.com/runelite/runelite/wiki/Items-Kept-on-Death" native="" rel="nofollow">Items Kept on Death\nplugin</a> to show correct values of\nAvernic defenders and Salve amulet (ei)s.</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 12 contributors this release!</p>\n<pre><code>Adam (24):\n      Revert &quot;Merge pull request #9354 from Toocanzs/centroid-fix&quot;\n      xptracker: fix calculating xp offset from offline xp\n      api: add accessor for GameState state\n      api: add setGameState\n      low memory plugin: run changeMemoryMode on game thread\n      overlay renderer: fix drawing overlay drag bounds\n      authfilter: cache sessions\n      loot tracker: batch loot submissions\n      ui: center fatal error dialog on screen\n      rs: validate loaded config\n      slayer plugin: update desert lizards task to lizards\n      low memory plugin: set low memory mode after startup\n      gpu plugin: require high detail textures\n      fishing plugin: deduplicate spot overlay color logic\n      fishing plugin: don\'t render the same fishing spot twice\n      fishingspot: don\'t expose spots map\n      api: remove unused Query class\n      menu entry swapper: expand talk-to/pickpocket swap to non-blackjack npcs\n      Fix some typos\n      config manager: overwrite defaults when unable to unmarshall values\n      screenshot plugin: add screenshot to clipboard\n      runecraft plugin: check config group before updating config\n      examine plugin: combine identical widget cases\n      examine plugin: add seed box\n\nAlexsuperfly (5):\n      slayer plugin: fix unknown tasks not decrementing counter\n      slayer: correct Vampyre task spelling\n      slayer: add additional target names to Vampyre task\n      clues: fix port sarim easy stash plane location\n      clues: fix wizards tower bridge plane location\n\nDaniel Bolink (1):\n      Update Western Provinces Diary Step after SOTE update\n\nHydrox6 (8):\n      clues: correct &quot;Has no one told you it is rude to ask a lady her age?&quot;\n      clues: Fix Bryophyta\'s staff having no name\n      clues: fix names for skilling outfits\n      gpu: fix MSAA white pixels\n      agility: fix objectid for Arandar lvl 85 obstacle\n      runecraft: fix layer of AbyssOverlay\n      clues: fix abyssal head recognition\n      death indicator: add prifddinas\n\nJordan Atwood (1):\n      slayerplugin: Fix first slayer kill not being registered\n\nQuasindro (1):\n      skybox: add Braindeath Island\n\nRon Young (1):\n      ChatboxItemSearch: fix null name check\n\nTheStonedTurtle (2):\n      itemskeptondeath: fix avernic defender price\n      ItemsKeptOnDeath - Add missing salve (ei) price offset\n\nThomas Cedeno (1):\n      clues: add agility and max capes to graceful set\n\nchestnut1693 (1):\n      boosts: add config to not display combat boosts\n\ndekvall (4):\n      Add Nullable to Actor::getName\n      Fix NPE in groundmarker plugin\n      Add Nullable to Client::getLocalPlayer\n      Add Nullable to widget dragging methods\n\nxDemoN (4):\n      item mapping: add bird nest variations\n      timers: update imbued heart to reset on death\n      agility: add missing ladder to prifddinas\n      emote: change &quot;stomp&quot; to &quot;stamp&quot;\n</code></pre>\n'}}}]);
//# sourceMappingURL=105.3c174320.chunk.js.map