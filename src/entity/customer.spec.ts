import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("", "John Doe");
        }).toThrowError("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new Customer("111", "");
        }).toThrowError("Name is required");
    });

    it("should change name", () => {
        let customer = new Customer("111", "John Doe");
        customer.changeName("Jane Doe");

        expect(customer.name).toBe("Jane Doe");
    });

    it("should activate a customer", () => {
        const customer = new Customer("111", "John Doe");
        const address = new Address("Stree 1", 1111, "111111", "City");
        customer.Address = address;

        customer.activate();

        expect(customer.isActive()).toBe(true);
    });


    it("should deactivate a customer", () => {
        const customer = new Customer("111", "John Doe");              

        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    });

    it("should throw error when address is undefined when you activate a customer", () => {

        expect(() => {
            const customer = new Customer("111", "John Doe");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");       
               
    });
});
