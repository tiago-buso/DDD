import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("should throw error when id is empty", () => {
       expect(() => {
        let order = new Order("", "111", []);
       }).toThrowError("Id is required");
    });

    it("should throw error when customer id is empty", () => {
        expect(() => {
         let order = new Order("123", "", []);
        }).toThrowError("Customer id is required");
     });

     it("should throw error when item qtd is 0", () => {
        expect(() => {
         let order = new Order("123", "123", []);
        }).toThrowError("Items are required");
     });

     it("should calculate total", () => {
        
        const item = new OrderItem("i1", "Item 1", 100);
        const item2 = new OrderItem("i2", "Item 2", 200);
        const order = new Order("o1", "c1", [item]);        

        let total = order.total();            
        
        expect(total).toBe(100);

        const order2 = new Order("o1", "c1", [item, item2]);
        total = order2.total();      

        expect(total).toBe(300);
     });
});