Feature: search engine

  I want to open a search engine
  
  Scenario: Opening a google search engine page
    Given I open google page
    Then I see "Google" in the title

  Scenario: Opening a duckduckgo search engine page
    Given I open duckduckgo page
    Then I see "DuckDuckGo" in the title
    