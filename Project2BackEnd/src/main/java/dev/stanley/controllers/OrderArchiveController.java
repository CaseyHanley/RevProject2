package dev.stanley.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.stanley.aspects.AuthorizeDelete;
import dev.stanley.beans.OrderArchive;
import dev.stanley.services.OrderArchiveService;

@RestController
public class OrderArchiveController {

	@Autowired
	OrderArchiveService oas;
	
	@RequestMapping(value="/orderarchive", method=RequestMethod.POST, consumes="application/Json")
	public OrderArchive createOrder(@RequestBody OrderArchive orderarchive) {
		System.out.println(orderarchive);
		return oas.createOrderArchive(orderarchive);
	}
	
	@GetMapping(value="/orderarchive", produces="application/Json")
	public List<OrderArchive>allorderarchive(){
		System.out.println("executing get all");
		return oas.allOrderArchive();
	}
	
	@GetMapping(value="/orderarchive/{username}")
	public OrderArchive getOrder(@PathVariable("username") String username){
		System.out.println("executing get all");	
		return oas.getOrderArchive(username);
		
	}
	
	@PutMapping(value="/orderarchive", consumes="application/Json")
	public OrderArchive updateOrder(@RequestBody OrderArchive change) {
		return oas.updateOrderArchive(change);
		
	}
	
	@AuthorizeDelete
	@DeleteMapping(value="/orderarchive/{o_id}")
	public boolean deleteItems(@PathVariable("o_id") int o_id) {
		System.out.println("Executing Delete");
		return oas.deleteOrderArchive(oas.getOrderById(o_id));
		
	}
}
