package dev.stanley.services;

import java.util.List;

import dev.stanley.beans.DeliveryAddress;

public interface DeliveryAddressService {

	public DeliveryAddressService createAddress(DeliveryAddress address);
	public DeliveryAddressService getAddressById(int u_id);
	public DeliveryAddressService updateAddress(DeliveryAddress change);
	public boolean deleteDeliveryAddress(DeliveryAddress address);
	public List<DeliveryAddress> allAddresses();
	public List<DeliveryAddress> getAddressesById(int u_id);
	
	
}
