describe("My Test",()=> 
{
  it("Logs in to the website", {includeShadowDom: true}, async() => 
  { 
    // it("Logs in to the website", function() {
      cy.on("uncaught:exception", (err, runnable) => {
          return false
      });  
    await cy.visit("https://test.dsms.exodevs.com/login");
    await cy.get("body > div > div > div > div > div.row > div > form > div:nth-child(2) > div > input").type("admin@admin.com");
    await cy.get("body > div > div > div > div > div.row > div > form > div:nth-child(3) > div > input").type("123456789");
    await cy.get("body > div > div > div > div > div.row > div > form > div.text-center > div > button").click();


    const domains = [
      "example.com",
      "gmail.com",
      "yahoo.com",
      "outlook.com",
    ];
    
    // Create a list of real names
    const names = [
      "Alice","Bob","Charlie","Dave","Eve","Wade","Seth","Ivan","Riley","Gilbert","Jorge","Dan","Brian","Roberto","Ramon","Miles","Liam","Nathaniel","Ethan","Lewis","Milton"
      ,"Claude","Joshua","Glen","Harvey","Blake","Antonio","Connor","Julian","Aidan","Harold","Conner","Peter","Hunter","Eli","Alberto","Carlos"
      ,"Shane","Aaron","Marlin","Paul","Ricardo","Hector","Alexis","Adrian","Kingston","Douglas","Gerald","Joey","Johnny","Charlie","Scott","Martin","Tristin","Troy"
      ,"Tommy","Rick","Victor","Jessie","Neil","Ted","Nick","Wiley","Morris","Clark","Stuart","Orlando","Keith","Marion","Marshall","Noel","Everett","Romeo","Sebastian","Stefan","Robin"
      ,"Clarence","Sandy","Ernest","Samuel","Benjamin","Luka","Fred","Albert","Greyson","Terry","Cedric","Joe","Paul","George","Bruce","Christopher","Mark","Ron","Craig"
      ,"Philip","Jimmy","Arthur","Jaime","Perry","Harold","Jerry","Shawn","Walter"
    ];
    
    // Create a function that generates a random email address
    function generateRandomEmail() {
      // Choose a random name from the list
      const name = names[Math.floor(Math.random() * names.length)];
    
      // Choose a random domain from the list
      const domain = domains[Math.floor(Math.random() * domains.length)];
    
      // Create a unique email address using the name and domain
      return `${name}@${domain}`;
    }
    function generateRandomFname() {
      // Choose a random name from the list
      const name = names[Math.floor(Math.random() * names.length)];
    
      // Choose a random domain from the list
      //const domain = domains[Math.floor(Math.random() * domains.length)];
    
      // Create a unique email address using the name and domain
      return `${name}`;
    }
    function generateRandomLname() {
      // Choose a random name from the list
      const name = names[Math.floor(Math.random() * names.length)];
    
      // Choose a random domain from the list
      //const domain = domains[Math.floor(Math.random() * domains.length)];
    
      // Create a unique email address using the name and domain
      return `${name}`;
    }
    const randomInt = Math.floor(Math.random() * 10000);
    const randomTimestamp = Math.floor(Math.random() * Date.now());
    // Create a new Date object using the random timestamp
    const randomDate = new Date(randomTimestamp);
    // Format the date as a string in the YYYY-MM-DD format
    const randomDateString = `${randomDate.getFullYear()}-${(randomDate.getMonth() + 1).toString().padStart(2, '0')}-${randomDate.getDate().toString().padStart(2, '0')}`;
    cy.viewport('macbook-15')
    cy.viewport
    (
      
        1200,950
      
    )
    await cy.get("#sidebarnav > li:nth-child(3) > a > img").click();
    await cy.get("#bg-change > div:nth-child(1) > div.col-6.text-end > a > span").click();
    const email = generateRandomEmail();
    // Use the email address in your test
    await cy.get("#email").type(email);
    const fname = generateRandomFname();
    await cy.get("#fname").type(fname);
    const lname = generateRandomLname()
    await cy.get("#lname").type(lname)
    await cy.get("#file_number").type(randomInt)
    await cy.wait(5000)
    // cy.get('#inscription_date').should('be.not.hidden')
    //await cy.get('input #inscription_date').click().type('2020-07-03', {force: true}).should('have.value', '2020-07-03')
    //cy.get('#inscription_date').trigger('mousedown').trigger('mouseup')
    //cy.get('#inscription_date').type(' 02/11/2022{enter}')
    await cy.get('#inscription_date').invoke('attr', 'value', '2020-07-25' ).should('have.attr', 'value', '2020-07-25')
    
     /* await cy.get('#inscription_date').trigger('mousedown')
     await cy.wait(1000)
     await cy.get('#inscription_date').trigger('mouseup') */
     /* await cy.wait(1000)
     cy.get('#road_book').click() */
    // await cy.wait(50000).until(EC.element_to_be_clickable((By.ID, 'inscription_date')))
    // date_input.click()
    // self.driver.execute_script('arguments[0].value = "2020-07-03";', date_input)
    //await cy.get("#inscription_date").click().type(randomDateString)
  })
}
);



// describe("My Test Student", ()=> 
// {
//   it("Signs up for a new account", async() => 
//   {
    
//   })
// });
// describe("My Test", function() {
//   it("Visits the website", function() {
//     cy.visit("https://test.dsms.exodevs.com/login");
//     cy.title().should("Login", "Login");
//   });
// });