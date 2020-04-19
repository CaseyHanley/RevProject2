package dev.stanley.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.stanley.beans.Extras;

@Repository
public interface ExtrasRepository extends CrudRepository<Extras,Integer>{

	Extras findExtraByEid(int e_id);


}
