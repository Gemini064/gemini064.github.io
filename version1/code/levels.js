/*
  . empty
  # wall
  @ palyer's starting point
  O: food
  +: enemy
  R: rock (unbreakable)
  B: rock (breakable)

  Rule: 
    A level is completed when all enemies have been eaten.
    Clear each level of enemies and escape the dungeon!
    (Eat rock, hit the enemy and swallow it while it's fainted)
    If the player touches alive enemies, the player is dead in this level, 
    and the player may try again.
*/


var GAME_LEVELS = [
`
##############
#..=.........#
#..RRRRRRRR..#
#.#..@.....#.#
#.#..R..R..#|#
#....R..R....#
#.RR=.....RR.#
#.O....=...O.#
#....RO.R....#
#.#..RRRR..#|#
#.#........#.#
#..RRRRRRRR..#
#............#
##############
`,`
#################
#...=.....RRRRRO#
#...RRR..RRRRR###
#..RRRRRRRRRR####
#.RR.RRRRRRRR..R#
#......RRR..@...#
#RRORRR....RRR..#
#RRRRRRRORRRR...#
#RRRRRRRRRR.R|.O#
#..R.RR.RRRR....#
#.|R.R..RRRR...##
#RRR..|RRRRRO.R##
#R.R..RRRRR.R.R##
##########RRR.###
###RRRR=...RR.###
#################
`,`
#################
#...=...=...=...#
#.#.###########.#
#.#...=.......#.#
#|#.....R.....#O#
#.#..@..R.....#.#
#.#.....R...O.#.#
#|#.....R.....#.#
#.#.O.........#|#
#.#.....=.....#.#
#.#.|.........#.#
#.#############.#
#.O..=....=...=.#
#################
`,
`
#################
#.....=..#@..#..#
#|######O#R#.##|#
#.#.=.O#R###|#..#
#.####.R.....#.##
###R#..#.#####..#
#|R...##........#
#.###..#R########
#.O###.#O..=...##
#####R.#######.##
#..#....##.RO#.##
#.##.#####.#.#.##
#...R......#.#.##
#################
`,`
#####################
#R.......=...O..#...#
########.############
#@.......O......#.O.#
####.#######.|..##..#
#R...##=.....####R.|#
#.##O###.###...####.#
#.=.#....#|###......#
###.####...######.#.#
#...#..#.#####.=..#.#
#|####.#.....####.#O#
#.#R...#####.#.O|.###
#.....=#.=...#....O##
#####################
`];