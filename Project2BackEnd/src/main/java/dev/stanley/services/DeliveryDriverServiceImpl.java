package dev.stanley.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.stanley.beans.DeliveryDriver;
import dev.stanley.repositories.DeliveryDriverRepository;

@Service
public class DeliveryDriverServiceImpl implements DeliveryDriverService {

	@Autowired
	DeliveryDriverRepository ddr;

	@Override
	public DeliveryDriver createDriver(DeliveryDriver driver) {
		return ddr.save(driver);
	}
	
	@Override
	public List<DeliveryDriver> getDriverByUsername(String driverUsername) {
		return ddr.findBydriverUsername(driverUsername);
	}

	@Override
	public DeliveryDriver updateDriver(DeliveryDriver change) {
		return ddr.save(change);
	}

	@Override
	public DeliveryDriver getDriverOrderById(int driverid) {
		return ddr.findById(driverid).get();
	}

	@Override
	public boolean removeDriver(DeliveryDriver driver) {
		try {
			ddr.delete(driver);
			return true;
		}catch(IllegalArgumentException e) {
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public List<DeliveryDriver> alldrivers() {
		return (List<DeliveryDriver>) ddr.findAll();
	}


	


}
