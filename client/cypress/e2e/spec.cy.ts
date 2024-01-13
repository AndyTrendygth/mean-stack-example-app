describe('Recipe Page', () => {
  beforeEach(()=>{
    cy.visit("/recipes")
    cy.wait(2000)
  })

  it('Successfully loads', () => {
    cy.contains('h1', 'Tasty Recipe List')
  })

  it('Can open the page to add a recipe', ()=>{
    cy.get('[data-cy="add-recipe"]').should("have.attr", "href", "/recipes/add")
  })

})

  