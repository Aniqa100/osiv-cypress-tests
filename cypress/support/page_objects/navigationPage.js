export class NavigationPage{
    folderVersicherte(){
        cy.get('[akid="itFolder-Versicherte"]').click()
    }
    
    folderAdressen(){
        cy.get('[akid="itFolder-Adressen"]').click()
    }

}

export const navigateTo = new NavigationPage()