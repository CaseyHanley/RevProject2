package dev.stanley.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.stanley.beans.DeliveryDriver;

@Repository
public interface DeliveryDriverRepository extends CrudRepository<DeliveryDriver,Integer> {

	List<DeliveryDriver> findBydriverUsername(String driverUsername);
}
