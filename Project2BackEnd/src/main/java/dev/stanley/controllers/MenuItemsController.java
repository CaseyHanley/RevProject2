package dev.stanley.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.stanley.aspects.AuthorizeDelete;
import dev.stanley.beans.MenuItems;
import dev.stanley.services.MenuItemsService;

@RestController
@CrossOrigin(origins = "http://ec2-3-134-96-132.us-east-2.compute.amazonaws.com:8080", allowedHeaders = "*")
public class MenuItemsController {

	@Autowired
	MenuItemsService ms;
	
	@RequestMapping(value="/menuitems", method=RequestMethod.POST, consumes="application/Json")
	public MenuItems createItem(@RequestBody MenuItems menuitem) {
		System.out.println(menuitem);
		return ms.createItem(menuitem);
	}
	
	@GetMapping(value="/menuitems", produces="application/Json")
	public List<MenuItems>allItems(){
		System.out.println("executing get all");
		return ms.allItems();
	}
	
	@PutMapping(value="/menuitems", consumes="application/Json")
	public MenuItems updateItem(@RequestBody MenuItems change) {
		return ms.updateItem(change);
		
	}
	
	@AuthorizeDelete
	@DeleteMapping(value="/menuitems/{productname}")
	public boolean deleteItems(@PathVariable("productname") String productname) {
		System.out.println("Executing Delete");
		return ms.removeItem(ms.getItem(productname));
		
	}
	
	
}
