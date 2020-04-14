package dev.stanley.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.stanley.beans.Orders;

@Repository
public interface OrdersRepository extends CrudRepository<Orders, Integer> {

	Orders findByUsername(String username);
}
