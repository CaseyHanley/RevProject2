package dev.stanley.services;

import java.util.List;

import dev.stanley.beans.MenuItems;

public interface MenuItemsService {

	public MenuItems createItem(MenuItems menuitem);	
	public MenuItems getItem(String productname);	
	public MenuItems getItemById(int stock_id);	
	public List<MenuItems> allItems();
	public MenuItems updateItem(MenuItems change);
	public boolean removeItem(MenuItems menuitem);
	
	
}
