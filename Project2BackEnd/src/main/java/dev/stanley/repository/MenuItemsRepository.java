package dev.stanley.repository;

import org.springframework.data.repository.CrudRepository;

import dev.stanley.beans.MenuItems;

public interface MenuItemsRepository extends CrudRepository<MenuItems,Integer> {

	
}
