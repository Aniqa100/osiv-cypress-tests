export class EntscheidMetaInfo{
    MetaInfoTab(){
        return cy.get('[akid="EntscheidDetailWindowTabbar-Meta-Info"]')
    }

    EntscheidIdNM(){
        return cy.get('[akid="EntscheidMetaInfoForm-entscheid_id"] input')
    }
}
export const entscheidMetaInfo = new EntscheidMetaInfo()