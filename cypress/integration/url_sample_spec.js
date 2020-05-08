describe('Create User & Log In', () => {
    
    it('Visits Grub', () => {
       cy.visit("http://localhost:3000")
    })

    it('Click Grub spots to redirect to sign in user', () => {
        cy.get("#grub_spots").click()
    })

    it("Sign in User", () => {
        cy.get('.username').type('sherry')
        cy.get('.password').type('sherry')
        .type('{enter}')
    })

    // it("Click Log In", () => {
    //     cy.get('#Log-In').click()
    // })

    // it("Log In User", () => {
    //     cy.get('.username').type('sherry')
    //     cy.get('.password').type('sherry')
    //     .type('{enter}')
    // })

    it("Confirm Welcome message", () => {
        cy.contains("Hey sherry!")
    })
})

context("Adding a grub spot", () => {
    it("Click on Add a Grub Spot", () => {
        cy.get("#add_a_grub_spot").click()
    })

    it("Fill out form for grub spot", () => {
        cy.get("#name").type('Porch Light Kitchen')
        cy.get("#city").type('Smyrna')
        cy.get("#state_dropdown")
            .get("#state")
            .select("GA")
        cy.get("#price_dropdown")
            .get("#cost")
            .select("$$")
        cy.get("#attire_dropdown")
            .get("#attire")
            .select("casual")
        cy.get("textarea").type("Cozy Pan-Latin spot offering dishes & drinks from Puerto Rico, Argentina, Mexico & beyond.")
    
    


    })
})
    context("Submit the grub spot", () => {
        it("Submit the form", () => {
        cy.get("#submit_form").click()
    
    })

})
