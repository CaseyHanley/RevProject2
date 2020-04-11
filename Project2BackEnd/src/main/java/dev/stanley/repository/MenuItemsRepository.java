package dev.stanley.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.stanley.beans.MenuItems;

@Repository
public interface MenuItemsRepository extends CrudRepository<MenuItems,Integer> {

	MenuItems findByProductname(String productname);
}
