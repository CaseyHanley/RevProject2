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
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class OrderController {

	@Autowired
	OrderService os;
	
	@RequestMapping(value="/orders", method=RequestMethod.POST, consumes="application/Json")
	public Orders createOrder(@RequestBody Orders orders) {
		System.out.println(orders);
		return os.createOrder(orders);
	}
	
	@GetMapping(value="/orders", produces="application/Json")
	public List<Orders>allOrders(){
		System.out.println("executing get all");
		return os.allOrders();
	} 
	
	@GetMapping(value="/orders/{username}")
	public Orders getOrder(@PathVariable("username") String username){
		System.out.println("executing get all");	
		return os.getOrder(username);
		
	}
	
	@PutMapping(value="/orders", consumes="application/Json")
	public Orders updateOrder(@RequestBody Orders change) {
		return os.updateOrder(change);
		
	}
	
	@AuthorizeDelete
	@DeleteMapping(value="/orders/{o_id}")
	public boolean deleteItems(@PathVariable("o_id") int o_id) {
		System.out.println("Executing Delete");
		return os.deleteOrder(os.getOrderById(o_id));
		
	}
	
	
}
