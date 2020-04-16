package dev.stanley.services;

import java.util.List;

import dev.stanley.beans.DeliveryAddress;

public interface DeliveryAddressService {

	public DeliveryAddress createAddress(DeliveryAddress address);
	public DeliveryAddress getAddressByUsername(String username);
	public DeliveryAddress updateAddress(DeliveryAddress change);
	public boolean deleteDeliveryAddress(DeliveryAddress address);
	public List<DeliveryAddress> allAddresses();
	public List<DeliveryAddress> getAddressesByUsername(String username);
	
	
}
