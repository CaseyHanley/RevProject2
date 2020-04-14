package dev.stanley.services;

import java.util.List;

import dev.stanley.beans.DeliveryAddress;

public interface DeliveryAddressService {

	public DeliveryAddress createAddress(DeliveryAddress address);
	public DeliveryAddress getAddressById(int u_id);
	public DeliveryAddress updateAddress(DeliveryAddress change);
	public boolean deleteDeliveryAddress(DeliveryAddress address);
	public List<DeliveryAddress> allAddresses();
	public List<DeliveryAddress> getAddressesById(int u_id);
	
	
}
