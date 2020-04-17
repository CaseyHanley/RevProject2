package dev.stanley.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.stanley.beans.DeliveryAddress;
import dev.stanley.repositories.DeliveryAddressRepository;

@Service
public class DeliveryAddressServiceImpl implements DeliveryAddressService {

	@Autowired
	DeliveryAddressRepository dar;
	
	@Override
	public DeliveryAddress createAddress(DeliveryAddress address) {
		return dar.save(address);
	}

	@Override
	public DeliveryAddress getAddressByUsername(String username) {
		return dar.findByUsername(username);
	}

	@Override
	public DeliveryAddress updateAddress(DeliveryAddress change) {
		return dar.save(change);
	}

	@Override
	public boolean deleteDeliveryAddress(DeliveryAddress address) {
		try {
			dar.delete(address);
			
		}catch(IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	@Override
	public List<DeliveryAddress> allAddresses() {
		return (List<DeliveryAddress>) dar.findAll();
	}

	@Override
	public List<DeliveryAddress> getAddressesByUsername(String username) {
		
		return (List<DeliveryAddress>) dar.findAllByUsername(username);
	}

}
