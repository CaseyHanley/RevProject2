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

import dev.stanley.beans.DeliveryAddress;
import dev.stanley.services.DeliveryAddressService;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class DeliveryAddressController {

	@Autowired
	DeliveryAddressService das;
	
	@RequestMapping(value="/deliveryaddress", method=RequestMethod.POST, consumes="application/Json")
	public DeliveryAddress createAddress(@RequestBody DeliveryAddress address) {
		return das.createAddress(address);
		
	}
	
	@GetMapping(value="/deliveryaddress", produces="application/Json")
	public List<DeliveryAddress>allAddresses(){
		return (List<DeliveryAddress>)das.allAddresses();
		
	}
	
	@GetMapping(value = "/deliveryaddress/{u_id}")
	public DeliveryAddress getAddressByUsername(@PathVariable("username") String username) {
		
		return das.getAddressByUsername(username);
	}
	
	
	
	@PutMapping(value="/deliveryaddress", consumes="application/Json")
	public DeliveryAddress updateAddress(@RequestBody DeliveryAddress change) {
		
		return das.updateAddress(change);
	}
	
	
	@DeleteMapping(value="/deliveryaddress/{a_id}")
	public boolean deleteDeliveryAddress(@PathVariable("username") String username) {
		das.deleteDeliveryAddress(das.getAddressByUsername(username));
		return true;
	}
}
