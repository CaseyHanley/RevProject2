package dev.stanley.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.stanley.beans.Users;


@Repository
public interface UserRepository extends CrudRepository<Users,Integer> {
	
	Users findByUsername(String username);
	Users findByUsernameAndPassword(String username, String password);
	Users findByPassword(String password);

}
