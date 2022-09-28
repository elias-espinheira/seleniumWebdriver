Feature: check ultima school 

    Scenario: deny signing up unavailable phone number

    Given I visit ultima school webpage
    When i go into "cursos"
    Then I should see "Escolha o curso que mais combina com você"

