const { expect } = require("chai");
const { getToken } = require("../auth/token.auth.spec.js");
const request = require("supertest");
const config = require("../../../data/config.json");
const userParams = require("../../../data/customer/get.customer.data.json");

async function deleteCustomer(params, token) {
    const response = await request(config.baseUrl) // baseUrl
    .delete(`/customers/${params}`) // endpoint
    .set("Authorization", `Bearer ${token}`)

    return response
}

module.exports = { deleteCustomer }

describe('Delete Customer', () => {
    it('Success Delete Customer', async () => {
        const token = await getToken() // get token
        const response = await deleteCustomer(
            userParams.success.params, 
            token)

        // assertion
        expect((await response).status).to.equal(200)
    })  
},
    it('Failed Delete Customer', async () => {
        const token = await getToken() // get token
        const response = await deleteCustomer(
            userParams.failed.params, 
            token) 

        // assertion
        expect((await response).status).to.equal(404)
})
)