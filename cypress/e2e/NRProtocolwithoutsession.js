describe('First test', () => {


    it('create protocol and remove it', () => {
      let url = Cypress.config().baseUrl; //accesing baseUrl
      cy.visit(url);
    cy.wait(30000);
    cy.typeLogin({ email: 'hulk1', password: 'hulk1{enter}' })

     cy.wait(30000);
     cy.get('[class="akUserInfo"]').invoke('text').then( text => {
      expect(text).to.equal('Hulk1');
      })
      cy.wait(4000);
      cy.get('[akid="itFolder-Versicherte"]').click();
      cy.wait(10000);
      cy.get('[akid="sStammQueryB-BRS_Versicherten_Name"]').type('oco{enter}');
      cy.wait(2000);
      cy.get('[akid="sStammQueryB-A60-ca8f6374a0d24fb9931417f238627d0a"]').dblclick();
      cy.wait(10000);
      cy.get('[class="dhx_cell_toolbar_def"]').click();
      cy.wait(10000);
      cy.get('[akid="SimpleSwatTabbar-Protokoll"]').click();
      cy.wait(4000);
       //Creating a new protocol
      cy.contains('[class="dhxrb_block_label"]', 'Versicherter - Protokolleintrag')
      .parents('[class="dhxrb_block_base ribbonBlock_Protokoll Ribbon Block"]')
      .find('[class="dhxrb_3rows_button"][title="Neu"]')
      .click();
      cy.wait(4000);
      
      cy.get('[akid="sProtokollDetailOverviewForm-protokolltypbez"]').click();
      cy.get('[akid="protokolltypbez-A54:111:000004491457"]').click();
      cy.wait(4000);
      cy.get('[class="dhxwin_active"][modalwindow="true"]').find('.cke_wysiwyg_div > p').type('test');
      cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]').click();
      cy.wait(4000);
      // Test if the protocoll created
      cy.get('[class=" ev_material rowselected"]').should('contain.text', 'test');
      cy.get('[class=" ev_material rowselected"]').dblclick();
      cy.wait(4000);
      cy.get('[class="dhx_cell_toolbar_def"]').click();
      
      cy.wait(1000);
      // Soft removing of a protocol
      cy.get('[class="dhxrb_3rows_button"][title="In den Papierkorb"]').click();
      cy.get('[akid="sProtokollInPapierkorbForm-geloeschtgrund"]').click();
      cy.get('[class="select2-results"]').contains('Falsche Information').click();
      cy.wait(1000);
      cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]').click(); 
      cy.get('[class="dhx_cell_toolbar_def"]').click();
      cy.wait(2000);
      cy.get('[class="dhx_cell_toolbar_def"]').click();
      cy.wait(2000);
      /* cy.contains('Liste der Protokolleinträge')
      .parents('[class="dhx_cell_hdr"]')
      .find('[title="Refresh"][class="alwaysVisiblePanelBtn class-headerPanelFontIcon-btn"]')
      .click();
      cy.get('[title="Toggle Geloescht"]').click();
      cy.wait(5000);  */
      
      //Need to add assertion for checkbox in class .fas
       /* cy.get('[akid="ProtokollQueryGrid-A53-8f475bac9111d1819e14ccd767c3d0a6"]').parents('tbody').contains('tr', 'test').then (firstTableRow => {
       cy.wrap(firstTableRow).find('.fas').click()
       cy.wrap(firstTableRow).dblclick()
       cy.wait(5000); 
      })
       cy.get('[class="dhx_cell_toolbar_def"]').click();
       cy.wait(1000);
 */
       cy.get('[class="dhxrb_3rows_button"][title="Wiederherstellen"]').click()
       cy.wait(2000);
       cy.get('[class="swal-button-container"]').contains('[class="swal-button swal-button--okreply default"]', 'Ok').click()
  
  
      cy.get('[class="dhxrb_3rows_button"][title="In den Papierkorb"]').click();
      cy.get('[akid="sProtokollInPapierkorbForm-geloeschtgrund"]').click();
      cy.get('[class="select2-results"]').type('Falsche').wait(100).get('[class="select2-results__options"]').click().wait(1000);

      cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]').click(); 
      cy.wait(2000);
      cy.get('[class="dhx_cell_toolbar_def"]').click();
      cy.wait(2000);
  /* 
      cy.contains('Liste der Protokolleinträge')
      .parents('[class="dhx_cell_hdr"]')
      .find('[title="Refresh"][class="alwaysVisiblePanelBtn class-headerPanelFontIcon-btn"]')
      .click(); */
  
      /* cy.get('[akid="ProtokollQueryGrid-A53-8f475bac9111d1819e14ccd767c3d0a6"]').parents('tbody').contains('tr', 'test').then (firstTableRow => {
        cy.wrap(firstTableRow).find('.fas').click()
        cy.wrap(firstTableRow).dblclick()
        cy.wait(3000); 
        
      }) */

      /* cy.get('[class="dhx_cell_toolbar_def"]').click();
      cy.wait(1000); */
      cy.wait(2000);
      cy.get('.ribbonBlock_ProtokollBearbeitenBlock > .dhxrb_block_items > :nth-child(3) > .dhxrb_3rows_button > .dhxrb_label_button').click()
      cy.get('[class="swal-modal confirmModal"]').find('[class="swal-button swal-button--confirm"]').contains('Bestätigen').click()
      cy.wait(1000)
  
      cy.get('[class="dhx_cell_toolbar_def"]').click();
  
   
       
  })
   
  
  })