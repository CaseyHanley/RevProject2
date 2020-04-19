package dev.stanley.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.stanley.beans.Orders;

@Repository
public interface OrdersRepository extends CrudRepository<Orders, Integer> {

	List<Orders> findByousername(String username);
	
	

}
