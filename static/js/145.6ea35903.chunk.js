(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[145],{737:function(i,e){i.exports={title:"1.7.14, 1.7.15, and 1.7.16 Releases",description:"Model outline rendering, roof removal plugin, and website tile marker viewing and improved hub plugin pages",author:"Jordan",body:'<p>We\'ve added a new model outline renderer which can draw precise outlines of NPCs and objects via\ntheir respective indicator plugins.</p>\n<table>\n<thead>\n<tr>\n<th style="text-align:center">1px outline</th>\n<th style="text-align:center">2px outline</th>\n<th style="text-align:center">10px feathered outline</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:center"><img src="/img/blog/1.7.16-Release/npc-outline-1px.png" alt="Dust devils highlighted with a 1px outline"></td>\n<td style="text-align:center"><img src="/img/blog/1.7.16-Release/npc-outline-2px.png" alt="Dust devils highlighted with a 2px outline"></td>\n<td style="text-align:center"><img src="/img/blog/1.7.16-Release/npc-outline-feather.png" alt="Dust devils highlighted with a 1px outline"></td>\n</tr>\n</tbody>\n</table>\n<p>We\'ve added a roof removal plugin which can selectively hide roofs when standing or walking under\nthem, hovering over them, or when they block the camera\'s view to your player. Experience the game\'s\nbeautiful roofs without sacrificing visibility!</p>\n<p><video src="/img/blog/1.7.16-Release/roof-removal-plugin.mp4" autoPlay=true muted=true loop=true playsInline=true preload="auto">\nYour browser does not support playing HTML5 video.\nYou can <a href="/img/blog/1.7.16-Release/roof-removal-plugin.mp4" download>download the file</a> instead.\nHere is a description of the content: Roof removal plugin demo\n</video></p>\n<h1>Website feature additions</h1>\n<p>We\'ve added a tile marker display page to the website. Just visit <a href="https://runelite.net/tile/" native="" rel="nofollow">https://runelite.net/tile/</a> and\n<a href="https://github.com/runelite/runelite/wiki/Ground-Markers#importing--exporting" native="" rel="nofollow">paste your exported ground\nmarkers</a> to see them\nvisualized on the game map, like these Olm boss fight markers. If you are logged in to website you can also\nview your saved tile markers <a href="https://runelite.net/account/tile-markers" native="" rel="nofollow">on tile markers account page</a></p>\n<p><a href="https://runelite.net/tile/show/W3sicmVnaW9uSWQiOjEyODg5LCJyZWdpb25YIjozNywicmVnaW9uWSI6MzgsInoiOjAsImNvbG9yIjoiI0ZGQ0NDQ0NDIn0seyJyZWdpb25JZCI6MTI4ODksInJlZ2lvblgiOjM2LCJyZWdpb25ZIjozOCwieiI6MCwiY29sb3IiOiIjRkZDQ0NDQ0MifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MzUsInJlZ2lvblkiOjM4LCJ6IjowLCJjb2xvciI6IiNGRkNDQ0NDQyJ9LHsicmVnaW9uSWQiOjEyODg5LCJyZWdpb25YIjozNCwicmVnaW9uWSI6MzgsInoiOjAsImNvbG9yIjoiI0ZGQ0NDQ0NDIn0seyJyZWdpb25JZCI6MTI4ODksInJlZ2lvblgiOjMzLCJyZWdpb25ZIjozOCwieiI6MCwiY29sb3IiOiIjRkZDQ0NDQ0MifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MzIsInJlZ2lvblkiOjM4LCJ6IjowLCJjb2xvciI6IiNGRkNDQ0NDQyJ9LHsicmVnaW9uSWQiOjEyODg5LCJyZWdpb25YIjozMSwicmVnaW9uWSI6MzgsInoiOjAsImNvbG9yIjoiI0ZGQ0NDQ0NDIn0seyJyZWdpb25JZCI6MTI4ODksInJlZ2lvblgiOjMwLCJyZWdpb25ZIjozOCwieiI6MCwiY29sb3IiOiIjRkZDQ0NDQ0MifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MjksInJlZ2lvblkiOjM4LCJ6IjowLCJjb2xvciI6IiNGRkNDQ0NDQyJ9LHsicmVnaW9uSWQiOjEyODg5LCJyZWdpb25YIjoyOCwicmVnaW9uWSI6MzgsInoiOjAsImNvbG9yIjoiI0ZGQ0NDQ0NDIn0seyJyZWdpb25JZCI6MTI4ODksInJlZ2lvblgiOjM3LCJyZWdpb25ZIjozNywieiI6MCwiY29sb3IiOiIjRkZGRjAwMDAifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MzcsInJlZ2lvblkiOjM5LCJ6IjowLCJjb2xvciI6IiNGRkZGMDAwMCJ9LHsicmVnaW9uSWQiOjEyODg5LCJyZWdpb25YIjoyOCwicmVnaW9uWSI6NTEsInoiOjAsImNvbG9yIjoiI0ZGRkYwMDAwIn0seyJyZWdpb25JZCI6MTI4ODksInJlZ2lvblgiOjI4LCJyZWdpb25ZIjo0OSwieiI6MCwiY29sb3IiOiIjRkZGRjAwMDAifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MzcsInJlZ2lvblkiOjUwLCJ6IjowLCJjb2xvciI6IiNGRkNDQ0NDQyJ9LHsicmVnaW9uSWQiOjEyODg5LCJyZWdpb25YIjozNiwicmVnaW9uWSI6NTAsInoiOjAsImNvbG9yIjoiI0ZGQ0NDQ0NDIn0seyJyZWdpb25JZCI6MTI4ODksInJlZ2lvblgiOjM1LCJyZWdpb25ZIjo1MCwieiI6MCwiY29sb3IiOiIjRkZDQ0NDQ0MifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MzQsInJlZ2lvblkiOjUwLCJ6IjowLCJjb2xvciI6IiNGRkNDQ0NDQyJ9LHsicmVnaW9uSWQiOjEyODg5LCJyZWdpb25YIjozMywicmVnaW9uWSI6NTAsInoiOjAsImNvbG9yIjoiI0ZGQ0NDQ0NDIn0seyJyZWdpb25JZCI6MTI4ODksInJlZ2lvblgiOjMyLCJyZWdpb25ZIjo1MCwieiI6MCwiY29sb3IiOiIjRkZDQ0NDQ0MifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MzEsInJlZ2lvblkiOjUwLCJ6IjowLCJjb2xvciI6IiNGRkNDQ0NDQyJ9LHsicmVnaW9uSWQiOjEyODg5LCJyZWdpb25YIjozMCwicmVnaW9uWSI6NTAsInoiOjAsImNvbG9yIjoiI0ZGQ0NDQ0NDIn0seyJyZWdpb25JZCI6MTI4ODksInJlZ2lvblgiOjI5LCJyZWdpb25ZIjo1MCwieiI6MCwiY29sb3IiOiIjRkZDQ0NDQ0MifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MjgsInJlZ2lvblkiOjUwLCJ6IjowLCJjb2xvciI6IiNGRkNDQ0NDQyJ9LHsicmVnaW9uSWQiOjEyODg5LCJyZWdpb25YIjozMCwicmVnaW9uWSI6MzcsInoiOjAsImNvbG9yIjoiI0ZGNjk2OUZGIiwibGFiZWwiOiJtYWdlIn0seyJyZWdpb25JZCI6MTI4ODksInJlZ2lvblgiOjM1LCJyZWdpb25ZIjo1MSwieiI6MCwiY29sb3IiOiIjRkY2OTY5RkYiLCJsYWJlbCI6Im1hZ2UifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MjgsInJlZ2lvblkiOjQ0LCJ6IjowLCJjb2xvciI6IiM2NENDQ0NDQyJ9LHsicmVnaW9uSWQiOjEyODg5LCJyZWdpb25YIjoyOSwicmVnaW9uWSI6NDQsInoiOjAsImNvbG9yIjoiIzY0Q0NDQ0NDIn0seyJyZWdpb25JZCI6MTI4ODksInJlZ2lvblgiOjMwLCJyZWdpb25ZIjo0NCwieiI6MCwiY29sb3IiOiIjNjRDQ0NDQ0MifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MzEsInJlZ2lvblkiOjQ0LCJ6IjowLCJjb2xvciI6IiM2NENDQ0NDQyJ9LHsicmVnaW9uSWQiOjEyODg5LCJyZWdpb25YIjozMiwicmVnaW9uWSI6NDQsInoiOjAsImNvbG9yIjoiIzY0Q0NDQ0NDIn0seyJyZWdpb25JZCI6MTI4ODksInJlZ2lvblgiOjMzLCJyZWdpb25ZIjo0NCwieiI6MCwiY29sb3IiOiIjNjRDQ0NDQ0MifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MzQsInJlZ2lvblkiOjQ0LCJ6IjowLCJjb2xvciI6IiM2NENDQ0NDQyJ9LHsicmVnaW9uSWQiOjEyODg5LCJyZWdpb25YIjozNSwicmVnaW9uWSI6NDQsInoiOjAsImNvbG9yIjoiIzY0Q0NDQ0NDIn0seyJyZWdpb25JZCI6MTI4ODksInJlZ2lvblgiOjM2LCJyZWdpb25ZIjo0NCwieiI6MCwiY29sb3IiOiIjNjRDQ0NDQ0MifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MzcsInJlZ2lvblkiOjQ0LCJ6IjowLCJjb2xvciI6IiM2NENDQ0NDQyJ9LHsicmVnaW9uSWQiOjEyODg5LCJyZWdpb25YIjozNSwicmVnaW9uWSI6NDMsInoiOjAsImNvbG9yIjoiIzY0RkY4NzAwIiwibGFiZWwiOiJydW5uZXIifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MzUsInJlZ2lvblkiOjQ1LCJ6IjowLCJjb2xvciI6IiM2NEZGODcwMCIsImxhYmVsIjoicnVubmVyIn0seyJyZWdpb25JZCI6MTI4ODksInJlZ2lvblgiOjMwLCJyZWdpb25ZIjo0MywieiI6MCwiY29sb3IiOiIjNjRGRjg3MDAiLCJsYWJlbCI6InJ1bm5lciJ9LHsicmVnaW9uSWQiOjEyODg5LCJyZWdpb25YIjozMCwicmVnaW9uWSI6NDUsInoiOjAsImNvbG9yIjoiIzY0RkY4NzAwIiwibGFiZWwiOiJydW5uZXIifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MzcsInJlZ2lvblkiOjQxLCJ6IjowLCJjb2xvciI6IiNGRkZGMDBGRiIsImxhYmVsIjoidGh1bWIifSx7InJlZ2lvbklkIjoxMjg4OSwicmVnaW9uWCI6MjgsInJlZ2lvblkiOjQ3LCJ6IjowLCJjb2xvciI6IiNGRkZGMDBGRiIsImxhYmVsIjoidGh1bWIifV0=" native="" rel="nofollow"><img src="/img/blog/1.7.16-Release/olm-markers-website-map.png" alt="Olm boss fight markers"></a></p>\n<p>Additionally, our <a href="https://runelite.net/plugin-hub" native="" rel="nofollow">Plugin Hub page</a> has become even more\ninformative, as you can now click on a listed plugin and its project introduction will be presented.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>A border width option has been added to the Ground Markers plugin</li>\n<li>The Inventory Viewer has an option to become hidden when your inventory tab is open</li>\n<li>The Barbarian Assault lobby and healer widgets are now moveable using our overlay system</li>\n<li>The cannon degrade timer is now shown for each stage of cannon setup, and a repair timer is added\nif your cannon degrades after being set up</li>\n<li>Recolored versions of the Blade of Saeldor and Bow of Faerdhinen correctly count toward your total\nbank value</li>\n<li>The Wintertodt plugin is now better at detecting when you have started fletching</li>\n<li>The thrall timer counts the extra time given from having a boosted magic level</li>\n<li>The XP Tracker plugin will no longer forget to draw an intermediate marker for the last level\ntoward a configured XP goal</li>\n<li>A number of Shayzien and Great Kourend clue scroll steps have had their text or enemies corrected</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 15 contributors this release!</p>\n<pre><code>Adam (7):\n      tile indicators: add border width config\n      Revert &quot;http-service: fix hiscore test&quot;\n      http-service: fix hiscore test\n      inventory viewer: add option to hide when inventory is open\n      Close various resource inputstreams\n      object indicators: don\'t mark unnamed objects\n      api: fix computing scene coord for negative local points\n\nBegOsrs (1):\n      WidgetOverlay: Make Barbarian Assault widgets moveable (#13852)\n\nCyborger1 (1):\n      clues: Fix capitalization for &quot;New Recruit Tony&quot; master anagram\n\nF.W. Dekker (1):\n      chat notifications: clarify how to enter multiple words\n\nGamma91 (1):\n      roof removal: Add missing overrides for the lighthouse and falador castle (#13862)\n\nHydrox6 (16):\n      loot manager: add phosani\'s nightmare\n      widgetoverlay: add back removed WidgetOverlays\n      combatlevel: fix attack range indicator\n      clues: fix hot/cold enemies for updated kourend locations\n      timers: make thrall timer use boosted magic level\n      overlay renderer: account for parent\'s position when clamping location\n      clues: fix the other kourend hot/cold enemies\n      chat commands: add shorthand names for phosani\'s nightmare\n      xp tracker: fix intermediate markers not showing for xp based goal ends\n      api: add roof removal api\n      plugins: add roof removal plugin\n      devtools: add tile region location and regionid to tile location tool\n      devtools: add roofs tool\n      roof removal: overrides to fix Pyramid Plunder and Yanille Bank\n      timers: add cannon repair timer\n      roof removal: change override.json file extension to .jsonc\n\nJordan Atwood (4):\n      CoordinateClue: Add South of Shayziens\' Wall clue\n      discord: Identify corrupted gauntlet separately\n      Remove unused Slf4j annotations and imports\n      CoordinateClue: Fix Crabclaw isle location\n\nLlemonDuck (1):\n      raids: screenshot overlay from client thread\n\nLoze-Put (1):\n      timers: Add cannon timer for each parts\' setup (#13856)\n\nMax Weber (6):\n      Update script arguments to 2021-6-30\n      http-api, rl-client: add phosani\'s nightmare to hiscores\n      http-service: fix hiscore test\n      music: don\'t restart when rendrawing tli\n      worldmap: fix tooltip widget id\n      runelite-api: update Quest\n\nMeeran (1):\n      ItemMapping: Add Blade of Saeldor and Bow of Faerdhinen recolor mappings (#13859)\n\nMichael (1):\n      wintertodt: improve fletching activity status detection\n\nSirWrain (1):\n      achievement diary: Fix reworded hard desert diary entry (#13770)\n\nWoox (5):\n      Add model outline renderer\n      modeloutlinerenderer: fix clip boundaries in fixed mode\n      api: add actor current orientation\n      api: add decorative object offsets\n      api: add game object model orientation\n\ngeheur (1):\n      mta: update alchemy room widgets ids\n</code></pre>\n',image:"/img/blog/1.7.16-Release/npc-outline-1px.png"}}}]);
//# sourceMappingURL=145.6ea35903.chunk.js.map