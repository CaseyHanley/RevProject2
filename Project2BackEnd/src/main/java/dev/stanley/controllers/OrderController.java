package dev.stanley.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.stanley.aspects.AuthorizeDelete;
import dev.stanley.beans.Orders;
import dev.stanley.services.OrderService;

@RestController
@CrossOrigin
public class OrderController {

	@Autowired
	OrderService os;

	@RequestMapping(value = "/order", method = RequestMethod.POST, consumes = "application/Json")
	public Orders createOrder(@RequestBody Orders orders) {
		System.out.println(orders);
		return os.createOrder(orders);
	}

	@GetMapping(value = "/order", produces = "application/Json")
	public List<Orders> allOrders() {
		System.out.println("executing get all");
		return os.allOrders();
	}

	
	@GetMapping(value = "/order/{username}")
	public Orders getOrder(@PathVariable("username") String username) {
		System.out.println("executing get order");
		 List<Orders> order = os.getOrder(username);
		 int temp =-1;
		 for(int x =0 ; x < order.size(); x++) {
			 if(order.get(x).getOid()>temp){
				 temp = order.get(x).getOid();
			 }
		 }
		 return os.getOrderById(temp);
	}
		
	
	

	@PutMapping(value = "/order", consumes = "application/Json")
	public Orders updateOrder(@RequestBody Orders change) {
		return os.updateOrder(change);

	}

	@AuthorizeDelete
	@DeleteMapping(value = "/order/{o_id}")
	public boolean deleteItems(@PathVariable("o_id") int o_id) {
		System.out.println("Executing Delete");
		return os.deleteOrder(os.getOrderById(o_id));

	}

}
