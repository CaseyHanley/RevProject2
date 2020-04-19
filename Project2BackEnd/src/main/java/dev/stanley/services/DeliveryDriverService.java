package dev.stanley.services;

import java.util.List;

import dev.stanley.beans.DeliveryDriver;

public interface DeliveryDriverService {

	public DeliveryDriver createDriver(DeliveryDriver driver);
	public List<DeliveryDriver> getDriverByUsername(String driverUsername);
	public DeliveryDriver updateDriver(DeliveryDriver change);
	public DeliveryDriver getDriverOrderById(int driverid);
	public boolean removeDriver(DeliveryDriver driver);
	public List<DeliveryDriver> alldrivers();

}
