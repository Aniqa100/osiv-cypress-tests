export class EntscheidSendungenTab{
SendungenTab(){
   return cy.get('[akid="EntscheidDetailWindowTabbar-Sendungen"]')
}
FindrowbyLink(value){
   return cy.contains(value).parents('[class=" ev_material rowselected"]').find('[class="akcelllink"]')
       }
}
export const entscheidSendungenTab = new EntscheidSendungenTab()