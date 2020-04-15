package dev.stanley.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.stanley.beans.DeliveryAddress;

@Repository
public interface DeliveryAddressRepository extends CrudRepository<DeliveryAddress,Integer>{

	List<DeliveryAddress> finAllById(int u_id);

}
