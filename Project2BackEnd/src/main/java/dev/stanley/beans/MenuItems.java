package dev.stanley.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class MenuItems {
	
	@Id
	@Column(name = "stock_id", updatable = false)
	@GeneratedValue
	private int stock_id;
	
	@Column(name ="description")
	private String description;
	
	@Column(name ="productname")
	private String productname;
	
	@Column(name ="price")
	private double price;

	public MenuItems() {
		super();
	}

	public MenuItems(int stock_id, String description, String productname, double price) {
		super();
		this.stock_id = stock_id;
		this.description = description;
		this.productname = productname;
		this.price = price;
	}

	public int getStock_id() {
		return stock_id;
	}

	public void setStock_id(int stock_id) {
		this.stock_id = stock_id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "MenuItems [stock_id=" + stock_id + ", description=" + description + ", productname=" + productname
				+ ", price=" + price + "]";
	} 

	
}
