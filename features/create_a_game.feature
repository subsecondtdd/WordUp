Feature: Create a game

  A _Game_ must be created before people can play. A player creates a game by
  writing down a secret word. That player become the _Maker_.

  A _Game_ does not start until a player [joins as the _Breaker_](./join_a_game.feature).

  Rules
  -----

  * Words can be any length
  * All letters in the word must be unique (defer verification)
  * Words should be English (for now) (defer verification)

  Scenario: you create a game
    When Mike creates a game
    Then Mike's game is available to join
