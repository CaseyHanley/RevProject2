package dev.stanley.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.stanley.beans.DeliveryDriver;

@Repository
public interface DeliveryDriverRepository extends CrudRepository<DeliveryDriver,Integer> {

	DeliveryDriver findBydriverUsername(String driverUsername);
}
