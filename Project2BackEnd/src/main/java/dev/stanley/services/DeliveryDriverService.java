package dev.stanley.services;

import dev.stanley.beans.DeliveryDriver;

public interface DeliveryDriverService {

	public DeliveryDriver createDriver(DeliveryDriver driver);
	public DeliveryDriver getDriverByUsername(String driverUsername);
	public DeliveryDriver updateDriver(DeliveryDriver change);

}
