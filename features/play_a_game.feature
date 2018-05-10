Feature: Play a game

  A game _Game_ can be played when a game has been [joined by a _Breaker_](./join_a_game.feature)
  The game is a series of rounds where each round is a guess by the Breaker, followed
  by a score by the Maker.

  Rules
  -----

  * A round consists of a guess followed by a score
  * Breakers make guesses
  * Makers score guesses
  * A score is one of:
    * correct number of letters [0..n] where n is the length of the maker's word
    * WIN, if the guess is correct

  Scenario: Maker asked to score
    Given Bev has joined Mike's game
    When Bev makes a guess
    Then Bev should be waiting for a score
