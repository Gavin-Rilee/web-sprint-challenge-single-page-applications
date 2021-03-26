describe('Tests app', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000/pizza')
    })
    it('Check for sanity!', () => {
        expect(1+2).to.equal(3)
        expect(45+45).not.to.equal(33)
    })
    it("Give me the name!", () => {
        cy.get('input[name="name"]').should('exist')
        cy.get('input[name="foobar"]').should('not.exist')
    })
    it("Give me the special instructions!", () => {
        cy.get('input[name="special"]').should('exist')
        cy.get('input[name="foobar"]').should('not.exist')
    })
    it('Checking names!', () => { 
        cy.get('input[name="name"]').should('have.value', "").type('Testing').should('have.value', 'Testing')   
    })
    it('Checking instructions!', () => { 
        cy.get('input[name="special"]').should('have.value', "").type('Testing').should('have.value', 'Testing')   
    })
    it('Checking Toppings!', () => {
        cy.get('input[name="Pepperoni"]').should('have.value','on')
    })
    it('Checking Toppings!', () => {
        cy.get('input[name="Cheese"]').should('have.value','on')
    })
    it('Checking Toppings!', () => {
        cy.get('input[name="Jalapeno"]').should('have.value','on')
    })
    it('Checking Toppings!', () => {
        cy.get('input[name="Sausage"]').should('have.value','on')
    })
    it('Checking Toppings!', () => {
        cy.get('input[name="Onions"]').should('have.value','on')
    })
    it('Checking Toppings!', () => {
        cy.get('input[name="Chicken"]').should('have.value','on')
    })
    it('Checking Toppings!', () => {
        cy.get('input[name="Mushroom"]').should('have.value','on')
    })
    it('Checking Toppings!', () => {
        cy.get('input[name="Futa"]').should('have.value','on')
    })
    it('Checking Toppings!', () => {
        cy.get('input[name="Spinach"]').should('have.value','on')
    })
    it('Select Dropdown', () => {
        cy.get('#size').select('Large')
        cy.get('#size').should('have.value', 'Large')
    })
    it('Activating Submit', () => {
        cy.get('button').should('be.disabled')
        cy.get('input[name="name"]').type('Testing')
        cy.get('button').should('be.disabled')
        cy.get('input[name="special"]').type('Testing instructions')
        cy.get('button').should('be.disabled')
        cy.get('#size').select('Large')
        cy.get('button').should('not.be.disabled')
    })
})