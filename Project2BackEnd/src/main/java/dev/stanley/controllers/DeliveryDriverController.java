package dev.stanley.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class DeliveryDriverController {

	@Autowired
	DeliveryDriverService dds;
	
	@RequestMapping(value = "/drivers", method = RequestMethod.POST, consumes = "application/Json")
	public DeliveryDriver createDriver(@RequestBody DeliveryDriver driver) {
		return dds.createDriver(driver);
	}
	
	@GetMapping(value = "/drivers/{driverUsername}")
	public DeliveryDriver getDriver(@PathVariable("driverUsername") String driverUsername) {
		return dds.getDriverByUsername(driverUsername);

	}
	
	@PutMapping(value = "/drivers", consumes = "application/Json")
	public DeliveryDriver updateDriver(@RequestBody DeliveryDriver change) {
		return dds.updateDriver(change);
	}

}
