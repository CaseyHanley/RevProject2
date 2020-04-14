package dev.stanley.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.stanley.beans.Extras;

@Repository
public interface ExtrasRepository extends CrudRepository<Extras,Integer>{

	Extras findExtraById(int e_id);

	List<Extras> findAllExtras();

}
