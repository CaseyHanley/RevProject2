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

import dev.stanley.beans.DeliveryDriver;
import dev.stanley.services.DeliveryDriverService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DeliveryDriverController {

	@Autowired
	DeliveryDriverService dds;
	
	@RequestMapping(value = "/drivers", method = RequestMethod.POST, consumes = "application/Json")
	public DeliveryDriver createDriver(@RequestBody DeliveryDriver driver) {
		System.out.println(driver);
		return dds.createDriver(driver);
	}
	
	@GetMapping(value = "/drivers/{driverUsername}")
	public DeliveryDriver getDriver(@PathVariable("driverUsername") String driverUsername) {
		List<DeliveryDriver> drivers = dds.getDriverByUsername(driverUsername);
		 int temp =-1;
		 for(int x =0 ; x < drivers.size(); x++) {
			 if(drivers.get(x).getDriverid()>temp){
				 temp = drivers.get(x).getDriverid();
			 }
		 }
		return dds.getDriverOrderById(temp);
				

	}
	
	@GetMapping(value = "/drivers/all")
	public List<DeliveryDriver> getAll() {
		return dds.alldrivers();

	}
	
	@PutMapping(value = "/drivers", consumes = "application/Json")
	public DeliveryDriver updateDriver(@RequestBody DeliveryDriver change) {
		return dds.updateDriver(change);
	}
	
	@DeleteMapping(value = "/drivers/{driverid}")
	public boolean deleteItems(@PathVariable("driverid") int driverid) {
		System.out.println("Executing Delete");
		return dds.removeDriver(dds.getDriverOrderById(driverid));

	}

}
