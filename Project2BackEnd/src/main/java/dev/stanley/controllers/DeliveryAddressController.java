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

import dev.stanley.beans.DeliveryAddress;

@RestController
public class DeliveryAddressController {

	@Autowired
	DeliveryAddressService das;
	
	@RequestMapping(value="/deliveryaddress", method=RequestMethod.POST, consumes="application/Json")
	public DeliveryAddress createAddress(@RequestBody DeliveryAddress address) {
		
		return das.createAddress(address);
		
	}
	
	@GetMapping(value="/deliveryaddress", produces="application/Json")
	public List<DeliveryAddress>allAddresses(){
		return das.getAllAddresses();
		
	}
	
	@GetMapping(value = "/deliveryaddress/{u_id}")
	public DeliveryAddress getAddressById(@PathVariable("u_id") int u_id) {
		
		return das.getAddressById(u_id);
	}
	
	
	
	@PutMapping(value="/deliveryaddress", consumes="application/Json")
	public DeliveryAddress updateAddress(@RequestBody DeliveryAddress change) {
		
		return das.updateDeliveryAddress(change);
	}
	
	
	@DeleteMapping(value="/deliveryaddress/{a_id}")
	public boolean deleteDeliveryAddress(@PathVariable("a_id") int a_id) {
		das.deleteDeliveryAddress(das.getAddressById("a_id"));
		return true;
	}
}
