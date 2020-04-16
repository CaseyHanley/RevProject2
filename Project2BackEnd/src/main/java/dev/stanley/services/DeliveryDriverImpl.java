package dev.stanley.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.stanley.beans.DeliveryDriver;
import dev.stanley.repositories.DeliveryDriverRepository;

@Service
public class DeliveryDriverImpl implements DeliveryDriverService {

	@Autowired
	DeliveryDriverRepository ddr;

	@Override
	public DeliveryDriver createDriver(DeliveryDriver driver) {
		return ddr.save(driver);
	}

	@Override
	public DeliveryDriver getDriverByUsername(String driverUsername) {
		return ddr.findBydriverUsername(driverUsername);
	}

	@Override
	public DeliveryDriver updateDriver(DeliveryDriver change) {
		return ddr.save(change);
	}
	
	


}
