package dev.stanley.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.stanley.beans.OrderArchive;

@Repository
public interface OrderArchiveRepository extends CrudRepository<OrderArchive, Integer> {

	OrderArchive findByUsername(String username);
}
