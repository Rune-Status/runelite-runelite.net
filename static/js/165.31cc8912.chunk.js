(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[165],{443:function(e,n){e.exports={title:"1.10.23 Release",description:"New UI Look and Feel",author:"Adam",body:'<h2>New UI Look and Feel</h2>\n<p>We\'ve recently completed a large overhaul of our UI, the first change since <a href="https://runelite.net/blog/show/2018-05-24-1.4.0-Release" native="" rel="nofollow">2018</a>.\nThis allows native Window snapping support on Windows 10 and 11, on MacOS uses the native titlebar, and fixes inconsistent maximize behavior when using multiple displays of different scaling factors. The titlebar and tray icon has also been updated to a new pixelart version of the logo thanks to <code>con_no_1</code>.</p>\n<p><img src="/img/blog/1.10.23-Release/sidebar.png" alt="sidebar"></p>\n<p>Additionally I would like to apologize for how bumpy this update was. We went through several iterations of update &amp; rollback between January 13 and 30 which you might have noticed, causing the client to switch between the old and new L&amp;F multiple times. While we do rollbacks occasionally, applying this to the UI updates caused a lot more consternation due to the changes being so visible. Many of the issues brought to our attention were changes to behaviors that we didn\'t know we had or that people relied upon. We have since fixed back the behaviors of everything that we can reasonably do.</p>\n<h3>Player menu collapsing</h3>\n<p>The interface styles plugin has a new option to place player menu options into a submenu, similar to RuneScape.</p>\n<p><img src="/img/blog/1.10.23-Release/player-menus.png" alt="player menus"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>You can now locate all your dashing clue gear that is storable in the POH treasure chest with the new <code>treasure chest</code> bank tag, freeing up bank space!</li>\n<li>US servers now show east or west on the world hopper.</li>\n<li>Time tracking now correctly tracks payment to any farmer, instead of only to ones with a single patch.</li>\n<li>The <code>Window opacity</code> setting now works on more systems (MacOS/Linux) and also with custom chrome off.</li>\n<li>The wiki plugin adds a <code>View DPS</code> button to the equipment screen to open the <a href="https://tools.runescape.wiki/osrs-dps/" native="" rel="nofollow">OSRS Wiki DPS calculator</a> with your current gear.</li>\n<li>Tree respawn timers now use the Jagex respawn timers.</li>\n<li>The message from the NPC unaggression plugin being uncalibrated is now an infobox.</li>\n<li>Camera speed can now be adjusted in the camera plugin.</li>\n<li>Custom notification volume can now be adjusted under notification settings.</li>\n<li>Group ironman shared storage can now be searched using the search hotkey.</li>\n<li>Loot tracking for the Nightmare and Phosani\'s Nightmare has been fixed.</li>\n<li>A bug causing KC/PB tracking of 6+ size TOA teams to record the wrong team size has been fixed.</li>\n<li>The chat filter plugin has been optimized to no longer cause lag with an excessively large regex filter list.</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 31 contributors this update!</p>\n<pre><code>Adam (98):\n      gpu: regions: fix air altar\n      status bars: fix lms check\n      friendlist: fix friend list title component id\n      api: add AmbientSoundEffectCreated event\n      api: add ambient sound effect background ids\n      widget util: add utility method for packing component ids\n      loottracker: include relic selections in npc metadata\n      gpu: regions: add pyramid plunder\n      null check getSelectedWidget() on menu click\n      prayer: move drain rate to prayer plugin\n      prayer: add drain rate test\n      prayer: convert drain rate to drain effect\n      prayer: add ruinous powers\n      xpdrop: support multiple prayer types per prayer\n      xpdrop: rename package to xpdrop\n      xpdrop: add ruinous powers\n      rs: add js5connect error message\n      clues: add treasure chest bank tag\n      xp drops: fix coloring defensive casting\n      clues: fix treasure chest tag test\n      api: add widget createStaticChild\n      api: add widget setOnScrollWheelListener\n      bank tags: refactor ui to use layers\n      bank tags: rebuild tag tab tab on new/import/delete\n      bank tags: fix scrolling the tag tab\n      bank tags: remove separators prior to computing scroll\n      bank tags: remove use of dummy script null\n      bank tags: fix pmd violation\n      menu swapper: fix ui swapping optarget\n      raids: simplify login scout check\n      raids: fix scouting on raid reload\n      chat filter: cache filter results\n      raids: reset raid on party id change\n      bank tags: move onMenuOptionClicked subscriber to TabInterface\n      bank tags: remove unused import\n      api: add scene tile model/paint isFlat()\n      gpu: fix tile uvs\n      clues: include alternatives in treasure chest tag\n      gpu: flip y/z in projection\n      gpu: reverse z\n      api: include WidgetConfig in runtime api\n      gpu: remove radius from compute shaders\n      gpu: use floating point for vertex positions\n      music: correctly apply ambient sound mute on startup and shutdown\n      clues: use builder for cryptic clues\n      clues: add npc regions for cryptic clues\n      fishing: fix tracking Karambwanji\n      gpu: fix cl compilation on amd gpus\n      Revert &quot;gpu: fix cl compilation on amd gpus&quot;\n      Revert &quot;gpu: use floating point for vertex positions&quot;\n      world hopper: cleanup\n      world hopper: add us east/west coast flags\n      cryptic clues: fix object id initializer\n      time tracking: support payment tracking of multi-patch npcs\n      containable frame: remove setMaximizedBounds workaround\n      ui: remove contain in screen ALWAYS\n      IconTextField: fix popup suggestion list size\n      config: use default font for JPasswordField\n      containable frame: fix Window.setMinimumSize DPI scaling\n      laf: disable text antialiasing for rs fonts\n      banktags: fix tabtabs tab\n      worldpoint: use signed right shift for local to world conversion\n      laf: change titlepane height to 27px\n      ui: remove window opacity setting\n      screenshot: image capture: support insets on client frame\n      update flatlaf to 3.2.5-rl2\n      ui: readd contain in screen ALWAYS\n      add scurrius\n      hiscores: add scurrius boss icon\n      devtools: cleanup location overlays\n      ContainableFrame: apply insets to old rhs offset behavior\n      laf: change titlepane height to 23px\n      clientui: adjust for frame insets when performing display bounds check\n      ui: readd window opacity setting\n      use backgroundless logo for image icon\n      update flatlaf to 3.2.5-rl3\n      Revert &quot;update flatlaf to 3.2.5-rl3&quot;\n      update flatlaf to 3.2.5-rl4\n      api: add size x/y to ObjectComposition\n      overlay: use floating point overlay priority\n      replace OverlayPriority use with corresponding constants\n      woodcutting: use add_overlaytimer_loc for respawn timer\n      bank tags: use only dynamic components for tab layer\n      Revert &quot;api: add widget createStaticChild&quot;\n      worldmap: strip pngs\n      api: add setter for ScriptEvent op\n      bank: use scriptevent for shared bank search trigger\n      rs: add error dialog for js5io and crash errors\n      npc unaggro: remove recheckActive on LOGGED_IN\n      Revert &quot;npc unaggro: remove recheckActive on LOGGED_IN&quot;\n      npc unaggro: remove recheckActive on LOGGED_IN\n      npc unaggro: change uncalibrated overlay into an infobox\n      Revert &quot;clientui: force keep window size on when snapped on windows&quot;\n      woodcutting: fix respawn overlay on rotated objects\n      cache: update 220\n      Revert &quot;npc unaggro: remove recheckActive on LOGGED_IN&quot;\n      npc unaggro: check active before doing npc scans\n      roof removal: fix race applying roof flags with startup\n\nChristopher Michael Mescher (1):\n      world map: Add capes of achievement teleports\n\nDavid Pedersen (1):\n      xp updater: add runetracker support\n\nEmil Hansen (1):\n      ground items: fix inferno despawn timer\n\nEric White (1):\n      notifier: add flash taskbar option\n\nFelanbird (11):\n      achievement diary: update fremennik astral rune task (#17221)\n      idle notifier: add cow milking animation id\n      idle notifier: add dairy churn animation ids\n      clues: add fairy ring to mudskipper point emote step\n      achievement diary: add new kourend task\n      achievement diary: remove kourend favour\n      clues: update lizardman canyon hot-cold step\n      idle notifier: add specimen cleaning animation ids\n      world map: add AKR fairy ring\n      worldmap: fix Kourend teleport level\n      achievement diary: update various tasks\n\nGeordan Neukum (1):\n      clues: recognize (l)(t) variant of dragon defender\n\nJZomDev (1):\n      ui: don\'t apply opacity in safe mode\n\nJason O\'Neill (1):\n      npc aggro area: ignore unattackable NPCs\n\nJordan Atwood (8):\n      loot tracker: Fix TOB chest interface id\n      loot tracker: Fix interface id in tests\n      loot tracker: Track unsired loot\n      slayer: Fix initial amount when task changes\n      clues: Fix Lovada cryptic clue text\n      clientui: Support Linux WM layout\n      clues: Add Wizards\' tower region to Wizards\' tower clue\n      timers: Track god wars altar cooldown via varbit\n\nJoshua Kuan (1):\n      clues: fix single item fulfilledBy check\n\nLouis Hong (1):\n      notifier: add custom notification volume control\n\nLukas H\xf6nig (2):\n      achievement diary: add 30 Constr. req. to crane repair task\n      woodcutting: fix division by zero computing hourly rate\n\nMacweese (3):\n      clues: fix comment grammar\n      clues: add felling axes\n      clues: add trailblazer tools\n\nMax Weber (31):\n      api: add Animation::restartMode accessors\n      runepouch: skip empty slots in grid view\n      api: expose drawFrustum &amp; drawWidgetText\n      fairyring: add vinery fairy ring\n      kourendlibrary: remove dark manuscripts\n      runelite-client: use FlatLaf\n      devtools: add swing inspector\n      clientui: optimize for FlatLaf\n      config: optimize for FlatLaf\n      clientui: apply client size config correctly\n      clientui: use sidebar pref width as min width\n      clientui: add 4px border in custom chrome mode\n      clientui: do not try to shift the frame in screen when not changing size\n      clientui: do not show custom chrome border when maximized\n      clientui: do not include insets in game size config\n      clientui: correctly apply suction when expanding via min size change\n      ContainableFrame: fix dpi scaled minimum size hack\n      ContainableFrame: restore old rhs offset behavior\n      ContainableFrame: set suction when shifted by native containment\n      ContainableFrame: use hungarian to prevent window / content coord misuse\n      clientui: listen for sidebar hotkeys when the client is not focused\n      clientui: give client focus when closing or hiding the sidebar\n      clientui: synchronously update the root pane\'s size\n      rl-client: remove ItemVariationMappingTest\n      ContainableFrame: remove non-native containedInScreen==ALWAYS code\n      ContainableFrame: always contain &amp; suction when snapped on windows\n      clientui: force keep window size on when snapped on windows\n      clientui: save game size instead of window size when keeping game size\n      clientui: remember last restored bounds when starting maximized\n      skillcalculator: remove checkbox panel background\n      config: remove unused JCheckBox::setBackground\n\nPhraZier (1):\n      bank: support group storage with search hotkey\n\nPortAGuy (1):\n      party: tie ping duration to system time\n\nRasmus Karlsson (2):\n      clues: reword Varrock Apothecary cryptic clue solution\n      clues: clarify Burthorpe Games Room emote clue location\n\nRobin (1):\n      update wise old man API endpoints\n\nRon Young (1):\n      overlay manager: revalidate overlays on profile change\n\nYenof (1):\n      clues: Add Team Cape 0/X/I to emote clue steps (#17273)\n\nYvesW (5):\n      prayer: disable reordering on shutdown\n      idle notifier: add crystal felling axe (inactive) animation\n      wintertodt: add crystal felling axe (inactive) animation\n      woodcutting: add crystal felling axe (inactive) animation\n      chat commands: fix theatre of blood: entry mode Previously the branch was unreachable: the label contained uppercase symbols while the selector is lowercase-only (boss.toLowerCase())\n\ngeheur (3):\n      clues: fix hotcold class initialization\n      bank tags: only close chatbox interface when clicking bank ops\n      prayer: reorder prayers on profile change\n\niProdigy (1):\n      chat commands: fix off-by-one team size for out-of-order toa pb\n\nldahleen54 (1):\n      config: allow using tab key for hotkeys\n\npkhermouch (1):\n      cryptic clues: update Sinclair Mansion solution\n\nsam (1):\n      Trailblazer league reloaded rune pouch up to 6 runes.\n\nsmol-tako (2):\n      item identification: add Forgotten brew and Blighted super restore\n      chat history: fix Copy to clipboard for friend dms\n\nsonnypb (1):\n      timers: add Spellbook Swap timer\n\ntesting-ongithub (8):\n      worldmap: fix Lovakengj mine cart location\n      worldmap: add new minecart locations\n      worldmap: rename minecarts to match in-game list\n      worldmap: fix DIP fairy ring location\n      worldmap: add ALR fairy ring\n      worldmap: alphabetize fairy rings\n      worldmap: use Zanaris fairy code rather than location\n      worldmap: comment fairy rings that don\'t exist on the world map\n\ntimleafy (1):\n      worldmap: add mining guild west amethyst\n</code></pre>\n',image:"/img/blog/1.10.23-Release/sidebar.png"}}}]);
//# sourceMappingURL=165.31cc8912.chunk.js.map