(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[138],{730:function(e,n){e.exports={title:"1.6.37 & 1.6.38 Release",description:"Ground marker sharing, refreshed hiscore boss icons, and filled inventory tag display",author:"Jordan",body:'<p>We\'ve added the ability to share ground markers. Click the &quot;Export Ground Markers&quot; option on the\nworld map orb to copy nearby ground markers to your clipboard, or click the &quot;Import Ground Markers&quot;\noption to load them into your game! Thanks to <a href="https://github.com/LlemonDuck" native="" rel="nofollow">@LlemonDuck</a> for\nadding this feature.</p>\n<p><video src="/img/blog/1.6.38-Release/import-ground-markers.mp4" autoPlay=true muted=true loop=true playsInline=true preload="auto">\nYour browser does not support playing HTML5 video.\nYou can <a href="/img/blog/1.6.38-Release/import-ground-markers.mp4" download>download the file</a> instead.\nHere is a description of the content: Importing a set of ground markers in the shape of the RuneLite logo\n</video></p>\n<p>The hiscore panel\'s boss icons have been refreshed and tidied up, courtesy of\n<a href="https://github.com/Psikoi" native="" rel="nofollow">@Psikoi\'s</a> excellent updated icons.</p>\n<p><img src="/img/blog/1.6.38-Release/boss-hiscore-icons.png" alt="Updated boss hiscore icons"></p>\n<p>A &quot;Fill&quot; display has been added for your inventory tags, which can be toggled alongside the existing\noutline and underline options. Thanks to <a href="https://github.com/1jz" native="" rel="nofollow">@1jz</a> for this addition.</p>\n<p><img src="/img/blog/1.6.38-Release/inventory-tags-fill-option.png" alt="Inventory tags shown with a filled-in image icon"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Support for soul wars has been added across our plugins, such as the rank in the hiscore panel and\nchat commands, tooltips on world map icons, food and potion boost information, and loot tracking\nfor spoils of war.</li>\n<li>A toggle has been added to the GPU plugin to render brighter textures so you can enjoy the\nbrighter look of your fire and infernal capes</li>\n<li>The plugin hub panel now sorts plugins by user count so you can more quickly find popular plugins</li>\n<li>The Time Tracking plugin can now show the soonest completion of a crop for your farming tracker\ncategories (eg. Show time until your first tree grows, instead of when they would all be grown)</li>\n<li>The Special Attack Counter plugin no longer resets your damage when attacking the Corporeal\nbeast\'s Dark core, Vorkath\'s Zombified spawn, or combat dummies. It also tracks damage from the\nbone dagger, bone crossbow, and barrelchest anchor, and can send special attack energy threshold\nnotifications</li>\n<li>World map icons and tooltips have been added for Watson teleport scrolls, Mahogany Homes\nlocations, ancient cavern mining rocks, and the Crabclaw caves agility shortcuts and quest\nchamber</li>\n<li>The menu entry swapper now supports swaps for Spria\'s NPC Contact, the Dwarven rock cake, and the\nSkull sceptre</li>\n<li>You can now configure the color of the Tears of Guthix vein overlays</li>\n<li>Dragon skilling tools with the Trailblazer ornament kits are now correctly recognized by their\nrespective skilling plugins</li>\n<li>The Idle Notifier plugin now supports low &amp; high run energy notifications</li>\n<li>The Time Tracking plugin has been taught the correct growth times for sweetcorn and watermelons</li>\n<li>The XP Globes plugin can now show your virtual level in the tooltip</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 24 contributors this release!</p>\n<pre><code>Adam (30):\n      http-api: add soul wars hiscores\n      hiscore panel: add soul wars zeal\n      overlay: fix layouted overlays not respecting parent bounds\n      spec counter: prevent dark core, zombified spawn, and combat dummies from reseting counter\n      gpu: add option to use old texture brightness code\n      spec counter: add spec threshold notifications\n      npc highlight: revert fill color behavior\n      config service: handle fromJson() returning null\n      gpu: fix camera position\n      runelite config: enable custom chrome only on Windows\n      Shorten many config names to fit into side panel\n      config panel: fix combobox displayed size\n      custom cursor: use cursor name for combobox labels\n      world map: consolidate world map points into one\n      client: update gluegen and jogl osx natives\n      client: update discord dependency version\n      chat notifier: restore original color when highlighting own name\n      kittype: use ordinal for index\n      Use delomboked sources for javadoc generation\n      client: update discord dependency version\n      client: rename jogl/gluegen osx natives artifacts\n      plugin hub panel: sort plugins by usercount\n      plugin list panel: remove unused executor\n      ground items: add despawn time for gwd instances\n      spec counter: add bone dagger, crossbow, and anchor\n      teamcapes: rewrite to use events\n      image util: simplify fillImage alpha check\n      inventory tags: add fill tag option\n      ground markers: add option to export and import\n      api: remove PlayerMenuOptionClicked\n\nBroooklyn (10):\n      worldmap: add Watson teleport scroll location\n      menu entry swapper: add dwarven rock cake swap\n      discord: add Soul Wars regions\n      loot tracker: Add Spoils of war (Soul Wars)\n      worldmap: add Mahogany Homes minigame locations\n      worldmap: add Soul Wars minigame and teleport locations\n      itemstats: Add Soul Wars Potion of Power and Bandages\n      agility: Add Crabclaw Caves obstacles\n      worldmap: fix Crabclaw Caves Tunnel (quest) WorldPoint\n      chatcommands: Add Soul Wars Zeal command\n\nChad J. Lewis (1):\n      WidgetInfo: Remove unused SHOP_ITEMS_CONTAINER definition (#13011)\n\nChristian Gati (1):\n      tears of guthix: add config for tears color\n\nCyborger1 (2):\n      clues: Update Yanille anvil map clue description (#12825)\n      idle notifier: Add low &amp; high energy notifications (#12995)\n\nDavid (1):\n      menu entry swapper: Add Spria to NPC Contact swap (#13070)\n\nHydrox6 (3):\n      barrows: fix reward potential formatting showing too many 0s\n      WidgetOverlay: Make Classic Resizeable Multicombat Indicator moveable\n      timetracking: Add option to show the soonest completion time of a tab\n\nJZomerlei (1):\n      Update Quest Enum to latest cache (#12999)\n\nJordan Atwood (5):\n      AnimationID: Remove incorrect trailblazer harpoon entry\n      Add support for trailblazer kit rewards\n      ChatboxTextInput: Select full message on ctrl+a\n      ChatboxTextInput: Improve open selection left/right handling\n      HotColdLocation: Fix Pirates\' Cove spot\n\nJoshua Kahn (1):\n      bank: Fix item container NPE (#13082)\n\nKevin (1):\n      loottracker: Add opened bird nest ID to loot metadata (#12936)\n\nMax Weber (4):\n      ImageUtil: rename getResourceStreamFromClass to loadImageResource\n      worldhopper: use ImageUtil for loading images\n      runelite-api: add Preferences::getHideUsername()\n      Update widget ids to 2021-1-20\n\nMorgan Lewis (1):\n      Fix growth stages of sweetcorn and watermelon\n\nMrnice98 (1):\n      world map: add mining rock info for Ancient Cavern\n\nNick (1):\n      CrypticClue: Include Varrock armour in Head chef clue solution (#13029)\n\nNick Wolff (1):\n      clues: Allow Dragon scimitar (or) for Falo the bard step (#13032)\n\nPatrick Pollock (1):\n      loottracker: Track boosted hunter level for birdhouse loot (#13068)\n\nPsikoi (1):\n      hiscore panel: update boss icons\n\nUsman Akhtar (2):\n      worldmap: Fix copper ore amount at battlefield mine (#12802)\n      plugins: Fix copied variable names\n\nZach (1):\n      itemstats: Fix Zamorak brew defence drain amount (#12921)\n\nequirs (1):\n      kittype: add arms kit type\n\njamesahhh (1):\n      menu swapper: Add Skull sceptre invoke swap (#12944)\n\nloldudester (1):\n      Fix javadoc cutting off descriptions\n\nwrightmalone (1):\n      xp globes: add option to show virtual level in tooltip\n</code></pre>\n',image:"/img/blog/1.6.38-Release/boss-hiscore-icons.png"}}}]);
//# sourceMappingURL=138.b4b32462.chunk.js.map