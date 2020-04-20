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
import org.springframework.web.filter.CorsFilter;
import dev.stanley.beans.DeliveryAddress;
import dev.stanley.services.DeliveryAddressService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class DeliveryAddressController {

	@Autowired
	DeliveryAddressService das;
	
	@CrossOrigin
	@RequestMapping(value="/deliveryaddress", method=RequestMethod.POST, consumes="application/Json")
	public DeliveryAddress createAddress(@RequestBody DeliveryAddress address) {
		System.out.println(address);
		return das.createAddress(address);
		
	}
	
	@CrossOrigin
	@GetMapping(value="/deliveryaddress", produces="application/Json")
	public List<DeliveryAddress>allAddresses(){
		return (List<DeliveryAddress>)das.allAddresses();
		
	}
	
	@CrossOrigin
	@GetMapping(value = "/deliveryaddress/{username}")
	public DeliveryAddress getAddressByUsername(@PathVariable("username") String username) {
		System.out.println(das.getAddressByUsername(username));
		return das.getAddressByUsername(username);
	}
	
	@CrossOrigin
	@GetMapping(value = "/deliveryaddress/all/{username}")
	public List<DeliveryAddress> getAllAddressByUsername(@PathVariable("username") String username) {
		return das.getAllAddressByUsername(username);
	}
	
	@CrossOrigin
	@PutMapping(value="/deliveryaddress", consumes="application/Json")
	public DeliveryAddress updateAddress(@RequestBody DeliveryAddress change) {
		
		return das.updateAddress(change);
	}
	
	@CrossOrigin
	@DeleteMapping(value="/deliveryaddress/{aid}")
	public boolean deleteDeliveryAddress(@PathVariable("aid") int aid) {
		das.deleteDeliveryAddress(das.getAddressById(aid));
		return true;
	}
}
