(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[123],{715:function(e,n){e.exports={title:"1.6.11 Release",description:"Overlay resizing, grand exchange fuzzy search, and prayer orb remaining time",author:"Jordan",body:'<p>Overlays, such as panels and screen markers can now be resized by holding <kbd>Alt</kbd> and\ndragging their edges/corners. Thanks to <a href="https://github.com/deathbeam" native="" rel="nofollow">@deathbeam</a> for adding this\nfeature.</p>\n<p><img src="/img/blog/1.6.11-Release/overlay-resizing.gif" alt="Resizing RuneLite overlays"></p>\n<p>The <code>Infobox wrap count</code> setting has been removed from RuneLite\'s config. You can resize the\ninfobox container to achieve the same effect, as shown below. If you previously had <code>Infobox wrap count</code>\nset to a value other than 4, you will have to alt-drag and resize the overlay to cause the infoboxes to\nwrap again at the desired number. Also, as was the case prior to this release, you can reset an overlay\'s\nposition and size using <kbd>Alt</kbd> and right-clicking the overlay.</p>\n<p><img src="/img/blog/1.6.11-Release/resize-infobox-container.gif" alt="Resizing infobox container to change wrap count"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Grand-Exchange" native="" rel="nofollow">Grand Exchange plugin</a> now has an\noption to use fuzzy searching, allowing you to search abbreviations or imprecise spellings to find\nitems. Thanks to <a href="https://github.com/dennisdev" native="" rel="nofollow">@dennisdev</a> for this great enhancement!</p>\n<p><img src="/img/blog/1.6.11-Release/ge-fuzzy-search.png" alt="Grand Exchange fuzzy searching"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Prayer" native="" rel="nofollow">Prayer plugin</a> now has an option to replace\nyour prayer points display in your prayer orb with the time remaining until your prayer points\nexpire. Thanks to <a href="https://github.com/dekvall" native="" rel="nofollow">@dekvall</a> for this feature.</p>\n<p><img src="/img/blog/1.6.11-Release/prayer-remaining-time.png" alt="Prayer orb time remaining"></p>\n<p>The Anti Drag plugin has been updated to remove the requirement of the <kbd>Shift</kbd> key when\noutside of PVP scenarios. An <code>On Shift Only</code> option has been added to the plugin, which must be\nenabled to work both in and outside of PVP.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Bank searches are now more responsive with the\n<a href="https://github.com/runelite/runelite/wiki/Bank" native="" rel="nofollow">Bank plugin</a> active</li>\n<li>Players can no longer accidentally reposition their mouse tooltips, and players whose mouse\ntooltips appear to be displaying far away from their cursor should see it display in the correct\nlocation now</li>\n<li>Support has been added to various plugins for gilded axe and pickaxe animations</li>\n<li><a href="https://github.com/runelite/runelite/wiki/Clue-Scroll" native="" rel="nofollow">Clue Scrolls</a> referencing Immenizz or\nvambraces are now properly recognized again since their ingame wording had changed last week</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/World-Hopper" native="" rel="nofollow">World Hopper plugin</a> no longer tries\nto hop into full worlds when hopping up/down</li>\n<li><a href="https://github.com/runelite/runelite/wiki/Screenshot" native="" rel="nofollow">Screenshots</a> are no longer taken of your\nown death with the <code>Screenshot Friend Deaths</code> option enabled</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Music" native="" rel="nofollow">Music</a> and\n<a href="https://github.com/runelite/runelite/wiki/Camera" native="" rel="nofollow">Camera</a> plugins now display tooltips showing\nthe slider value when using the ingame volume and camera zoom sliders</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Camera" native="" rel="nofollow">Camera plugin</a> has gained options to invert\nthe camera pitch and yaw mouse controls</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Music" native="" rel="nofollow">Music plugin</a> now has an option to mute\nprayer sounds</li>\n<li>When highlighting players with the <a href="https://github.com/runelite/runelite/wiki/Player-Indicators" native="" rel="nofollow">Player Indicators\nplugin</a>, the &quot;Walk here&quot; menu entry\nis now also highlighted</li>\n<li>An option to hide the precise combat level has been added to the <a href="https://github.com/runelite/runelite/wiki/Combat-Level" native="" rel="nofollow">Combat Level\nplugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Agility" native="" rel="nofollow">Agility plugin</a> now highlights the stick\non the Werewolf agility course</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Fishing" native="" rel="nofollow">Fishing plugin</a> properly updates its\noverlay to show that you are not fishing when you\'re interrupted by certain activities, such as\nlevel-up dialogs</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Quest-List" native="" rel="nofollow">Quest List plugin</a> no longer causes\nerrors when enabling it after already being logged in</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Loot-Tracker" native="" rel="nofollow">Loot Tracker</a> tracks herbiboar loot\nwhen your herb sack is open and has learned that potion drinking, etc., is not loot when hunting\nthe herbiboar</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Nightmare-Zone" native="" rel="nofollow">Nightmare Zone</a> and\n<a href="https://github.com/runelite/runelite/wiki/Discord" native="" rel="nofollow">Discord</a> plugins no longer think you are in\nthe Nightmare Zone when fighting the King Black Dragon</li>\n<li>Slayer tasks assigned to be completed within the Jormungand\'s Prison are now properly recognized\nby the <a href="https://github.com/runelite/runelite/wiki/Slayer" native="" rel="nofollow">Slayer plugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Run-Energy" native="" rel="nofollow">Run Energy plugin</a> learned the new\ngraceful set energy recovery mechanics from the update in January</li>\n<li>You are no longer considered to be &quot;not woodcutting&quot; by the <a href="https://github.com/runelite/runelite/wiki/Woodcutting" native="" rel="nofollow">Woodcutting\nplugin</a> when there is a long pause between\nlogs being chopped</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Boosts-Information" native="" rel="nofollow">Boosts Information plugin</a> no\nlonger shows the restore overlay when it does not show any visible boosts</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Kourend-Library" native="" rel="nofollow">Kourend Library plugin</a> now shows\nbooks which are in your inventory versus not yet found in the library in different colors in its\nside panel, and has an option to show a hint arrow pointing toward your target book</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Items-Kept-on-Death" native="" rel="nofollow">Items Kept on Death plugin</a>\nlearned the updated Eternal teleport crystal value</li>\n<li>Magic trees now animate correctly with the GPU plugin on</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 31 contributors this release!</p>\n<pre><code>AaronPoon (1):\n      agility: highlight \'Stick\' in Werewolf Agility Course\n\nAdam (14):\n      world controller: return service unavailable if world list isn\'t loaded\n      feed controller: return service unavailable if feed isn\'t loaded\n      client session manager: fix detecting logged in state\n      speccounter: fix some bugs and edge cases\n      stretchedmode: copy mouse event consumed flag when translating mouse events\n      client: add config option for blocking extra mouse buttons\n      party plugin: play sound effects on client thread\n      hooks: use monotonic clock for main loop tasks\n      item service: remove old item searching and item lookup methods\n      antidrag: add option to disable in pvp\n      worldhopper: skip over almost full worlds\n      screenshot plugin: fix screenshot friend deaths to not screenshot own death\n      emoji plugin: load emojis on client thread\n      devtools: add infobox generator\n\nAlexsuperfly (1):\n      OverlayRenderer: prevent moving DYNAMIC and TOOLTIP overlays\n\nBrandt Hill (1):\n      fishing: Check player animation to update fishing status\n\nCrow (2):\n      NPC Agression Timer: fix typo in notification\n      Add eternal teleport crystal value offset\n\nDaniel (1):\n      questlist: Ensure filter has non-null state on startup\n\nDennis (1):\n      ge plugin: add fuzzy search option\n\nDeon Zhao (1):\n      loottracker: Track herbiboar loot with an open herb sack\n\nHydrox6 (8):\n      clues: update Immenizz\'s master clue to reflect his NPC\'s name change\n      api: add gilded axe animation\n      woodcutting: add support for gilded axe\n      idle notifier: add support for gilded axe\n      wintertodt: add support for gilded axe\n      api: add gilded pickaxe animations\n      idle notifier: add support for gilded pickaxe\n      motherlode: add support for gilded pickaxe\n\nJordan Atwood (5):\n      boosts: Hide restore timer when no boosts are visible\n      woodcutting: Reduce visibilities, mark Nullables\n      woodcutting: Add axe animation matching helper method\n      woodcutting: Fix overlay hiding during long chop delays\n      HotColdLocation: Center some location spots\n\nLewis (1):\n      music plugin: add option to mute prayer sounds\n\nLotto (4):\n      api: remove Follow and Trade menu actions\n      player-indicators: break out decorating code into own methods\n      player-indicators: move menu logic to ClientTick\n      player-indicators: highlight the \'Walk here\' menu entry too\n\nLucas Snel (1):\n      combatlevel plugin: add option for showing precise combat level\n\nMagic fTail (1):\n      chatmessagemanager: use default timestamp if none is provided\n\nMax Weber (13):\n      grounditems: manually match item thresholds\n      grounditems: make priceChecks threadsafe\n      grounditems: reset on the executor thread\n      Notifier: Reuse Clip instances\n      http-api: remove unused fields from NPCInfo\n      kourendlibrary: don\'t throw npe when starting on the login screen\n      runelite-client: update ItemID references\n      runelite-api: add stopNow to cleanly shutdown the client\n      eventbus: make higher priority events fire first\n      camera: add option to invert camera mouse controls\n      runelite-client: add ClientShutdown event\n      grounditems: don\'t crash when having a duplicate highlight value\n      FlatTextField: forward focus requests to children\n\nMorgan Lewis (1):\n      worldmap: Fix slayer ring teleport location\n\nRobert N\xf6nnig (1):\n      prayer: Hide prayer flick indicator when minimap is hidden (#11138)\n\nSean Dewar (4):\n      runenergy: update graceful recovery rate logic\n      music: slider volume percentage tooltips\n      camera: zoom slider tooltip &amp; zoom constants\n      music: revalidate slider handle on creation\n\nSirGirion (1):\n      emoteclue: Replace vamb with vambraces in clue text\n\nTheFlemoid (1):\n      WidgetOverlay: Use TOP_RIGHT anchor for LMS widgets\n\nTheStonedTurtle (2):\n      nightmarezone: Fix area check to exclude KBD lair\n      discord: Fix NMZ area check to exclude KBD lair\n\nThomas (1):\n      slayer plugin: add Jormungand\'s Prison task location\n\nTomas Slusny (7):\n      Reset repositioned tooltip overlays\n      Mock ConfigManager in ItemStatOverlayTest to inject TooltipManager\n      Add support for resizable overlays\n      Make overlay resizing configure wrapping\n      Add OverlayPanel that contains PanelComponent\n      Make overlays use OverlayPanel instead of Overlay\n      Skip processing of input listeners with consumed events\n\nTrevor (1):\n      loot tracker plugin: submit loot on client shutdown (#11243)\n\nTyler Davis (1):\n      swingutil: Set button tooltip text in addModalTooltip\n\nUnknown (1):\n      Update Plugin Hub risk label\n\ndekvall (1):\n      prayer: display prayer time remaining in prayer orb\n\njostn (1):\n      HotColdLocation: Center Rimmington mine dig location\n\nrfick (2):\n      kourendlibrary: Indicate books not in inventory\n      kourendlibrary: Show a hint arrow above target book\n\ntrimbe (1):\n      bank plugin: improve responsiveness of bank searches\n\nypperlig (1):\n      barrowsplugin: fix null pointer exception in region check\n</code></pre>\n',image:"/img/blog/1.6.11-Release/overlay-resizing.gif"}}}]);
//# sourceMappingURL=123.92129fd6.chunk.js.map