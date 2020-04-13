package dev.stanley.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.stanley.beans.DiscountCodes;

@Repository
public interface DiscountCodesRepository extends CrudRepository<DiscountCodes,Integer>{

	List<DiscountCodes> findAllCodes();

	DiscountCodes findDiscountCodesById(int c_id);

}
