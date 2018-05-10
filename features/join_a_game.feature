Feature: Join a game

  A _Game_ starts when a player joins a game [created by a _Maker_](./create_a_game.feature)
  The joining player then becomes the _Breaker_.

  Rules
  -----

  * Only one breaker per game
  * Maker can join their own game
  * Players are anonymous

  Scenario: Breaker joins a game
    Given Mike has created a game
    When Bev joins Mike's game
    Then Mike should be waiting for a guess
