package dev.stanley.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.stanley.beans.DeliveryAddress;

@Repository
public interface DeliveryAddressRepository extends CrudRepository<DeliveryAddress,Integer>{

	List<DeliveryAddress> findAllByUsername(String username);
	DeliveryAddress findByUsername(String username);
}
