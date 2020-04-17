package dev.stanley.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.stanley.beans.DiscountCodes;

@Repository
public interface DiscountCodesRepository extends CrudRepository<DiscountCodes,Integer>{


}
