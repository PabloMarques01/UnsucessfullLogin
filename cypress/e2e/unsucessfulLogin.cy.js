describe('Unsucessful Login', () => {

  beforeEach( () => {
    // Go to the page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Invalid Username and invalid Password', () => {

    // Find the Username and type an invalid credential
    cy.get("[placeholder='Username']").type("El")

    // Find the Password and type an invalid credential
    cy.get("[placeholder='Password']").type("chapo")

    // Find the Login button and click
    cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()

    // Assertion on the error message
    cy.get('.oxd-alert-content > .oxd-text').should("be.visible")
    .and("exist")

    // Assertion on the URL
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })

  it('Invalid Password', () => {

    // Find the Username and type a valid credential
    cy.get("[placeholder='Username']").type("Admin")

    // Find the Password and type an invalid credential
    cy.get("[placeholder='Password']").type("chapo")

    // Find the Login button and click
    cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()

    // Assertion on the error message
    cy.get('.oxd-alert-content > .oxd-text').should("be.visible")
    .and("exist")

    // Assertion on the URL
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })

  it('Empty Username', () => {

    // Find the Password and type a valid credential
    cy.get("[placeholder='Password']").type("admin123")

    // Find the Login button and click
    cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()

    // Assertion on the URL
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })

  it('Empty Password', () => {

    // Find the Username and type a valid credential
    cy.get("[placeholder='Username']").type("Admin")

    // Find the Login button and click
    cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()

    // Assertion on the URL
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })

  it('Empty spaces', () => {

    // Find the Login button and click
    cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()

    // Assertion on the URL
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })

  it('UpperCases (Username and Password)', () => {

    // Find the Username and type a valid credential in uppercases
    cy.get("[placeholder='Username']").type("ADMIN")

    // Find the Password and type a valid credential in uppercases
    cy.get("[placeholder='Password']").type("ADMIN123")

    // Find the Login button and click
    cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()

    // Assertion on the error message
    cy.get('.oxd-alert-content > .oxd-text').should("be.visible")
    .and("exist")

    // Assertion on the URL
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })

  it('Valid credentials with blank space behind', () => {

    // Find the Username and type a valid credential with a blank space behind
    cy.get("[placeholder='Username']").type(" Admin")

    // Find the Password and type a valid credential with a blank space behind
    cy.get("[placeholder='Password']").type(" admin123")

    // Find the Login button and click
    cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()

    // Assertion on the error message
    cy.get('.oxd-alert-content > .oxd-text').should("be.visible")
    .and("exist")

    // Assertion on the URL
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })

  it('Valid credentials with blank space next to', () => {

    // Find the Username and type a valid credential with a blank space next to
    cy.get("[placeholder='Username']").type("Admin ")

    // Find the Password and type a valid credential with a blank space next to
    cy.get("[placeholder='Password']").type("admin123 ")

    // Find the Login button and click
    cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()

    // Assertion on the error message
    cy.get('.oxd-alert-content > .oxd-text').should("be.visible")
    .and("exist")

    // Assertion on the URL
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })

  it('Valid credentials with a blank space in the middle', () => {

    // Find the Username and type a valid credential with a blank space in the middle
    cy.get("[placeholder='Username']").type("A dmin")

    // Find the Password and type a valid credential with a blank space in the middle
    cy.get("[placeholder='Password']").type("admin 123")

    // Find the Login button and click
    cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()

    // Assertion on the error message
    cy.get('.oxd-alert-content > .oxd-text').should("be.visible")
    .and("exist")

    // Assertion on the URL
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })
})