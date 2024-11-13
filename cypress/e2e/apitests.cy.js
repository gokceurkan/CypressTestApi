/// <reference types="cypress" />



describe('example to-do app', () => {
  
  
    it('GET USER INFO Kontrolü', () => {

        cy.request("GET","https://petstore.swagger.io/v2/user/testdeneme1")
      
    })

    it('POST USER CREATE', () => {

        const payload={
            "id": 987,
            "username": "testkullanici",
            "firstName": "test",
            "lastName": "kullanici",
            "email": "testkullanici@hotmail.com",
            "password": "123456",
            "phone": "531333333",
            "userStatus": 0
          }

        cy.request({
            method: "POST",
            url:"https://petstore.swagger.io/v2/user",
            body:payload
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
      
    })

    it('PUT User Update', () => {
        const payload={
            "id": 96,
            "username": "testdeneme1",
            "firstName": "gokce",
            "lastName": "urkan",
            "email": "gokceisildak@hotmail.com",
            "password": "123456",
            "phone": "531333333",
            "userStatus": 0
          }

        cy.request({
            method: "PUT",
            url:"https://petstore.swagger.io/v2/user/testdeneme",
            body:payload
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
        
      
    })

    it('DELETE User', () => {
        
        cy.request({
            method: "DELETE",
            url:"https://petstore.swagger.io/v2/user/testkullanici"
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
        
      
    })
})