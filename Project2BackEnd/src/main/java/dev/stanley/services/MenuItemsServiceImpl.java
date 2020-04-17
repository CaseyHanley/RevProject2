package dev.stanley.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.stanley.beans.MenuItems;
import dev.stanley.repositories.MenuItemsRepository;

@Service
public class MenuItemsServiceImpl implements MenuItemsService {

	@Autowired
	MenuItemsRepository mr;
	
	@Override
	public MenuItems createItem(MenuItems menuitem) {
		return mr.save(menuitem);
	}

	@Override
	public MenuItems getItem(String productname) {
		return mr.findByProductname(productname);
	}
	
	@Override
	public MenuItems getItemById(int stock_id) {
		return mr.findById(stock_id).get();
	}

	@Override
	public List<MenuItems> allItems() {
		return (List<MenuItems>) mr.findAll();
	}

	@Override
	public MenuItems updateItem(MenuItems change) {
		return mr.save(change);
	}

	@Override
	public boolean removeItem(MenuItems menuitem) {
		try {
			mr.delete(menuitem);
			
		}catch(IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		return false;
	}

}
