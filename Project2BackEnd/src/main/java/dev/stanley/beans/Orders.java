package dev.stanley.beans;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Orders {
	
	@Id
	@Column(name = "o_id", updatable = false)
	@GeneratedValue
	private int o_id;
	
	@Column(name = "u_id")
	private int u_id;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "productname1", columnDefinition = "varchar(255) default 'Null'")
	private String productname1;
	
	@Column(name = "productname2", columnDefinition = "varchar(255) default 'Null'")
	private String productname2;
	
	@Column(name = "productname3", columnDefinition = "varchar(255) default 'Null'")
	private String productname3;
	
	@Column(name = "productname4", columnDefinition = "varchar(255) default 'Null'")
	private String productname4;
	
	@Column(name = "productname5", columnDefinition = "varchar(255) default 'Null'")
	private String productname5;
	
	@Column(name = "productname6", columnDefinition = "varchar(255) default 'Null'")
	private String productname6;
	
	@Column(name = "productname7", columnDefinition = "varchar(255) default 'Null'")
	private String productname7;
	
	@Column(name = "extra1")
	private String extra1;
	
	@Column(name="extra2")
	private String extra2;
	
	
	@Column(name = "price")
	private double price;
	
	@Column(name="comments")
	private String comments;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "pickup")
	private boolean pickup;
	
	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(name = "menuitems")
	private List<MenuItems> menuitems;

	public Orders() {
		super();
	}




	public Orders(int o_id, int u_id, String username, String productname1, String productname2, String productname3,
			String productname4, String productname5, String productname6, String productname7, String extra1,
			String extra2, double price, String comments, String status, boolean pickup, List<MenuItems> menuitems) {
		super();
		this.o_id = o_id;
		this.u_id = u_id;
		this.username = username;
		this.productname1 = productname1;
		this.productname2 = productname2;
		this.productname3 = productname3;
		this.productname4 = productname4;
		this.productname5 = productname5;
		this.productname6 = productname6;
		this.productname7 = productname7;
		this.extra1 = extra1;
		this.extra2 = extra2;
		this.price = price;
		this.comments = comments;
		this.status = status;
		this.pickup = pickup;
		this.menuitems = new ArrayList(menuitems);
	}




	public Orders(int o_id, int u_id, int price, String comments, String status, boolean pickup) {
		super();
		this.o_id = o_id;
		this.u_id = u_id;
		this.price = price;
		this.comments = comments;
		this.status = status;
		this.pickup = pickup;
		this.menuitems = new ArrayList(menuitems);
	}

	
	
	
	public String getExtra1() {
		return extra1;
	}




	public void setExtra1(String extra1) {
		this.extra1 = extra1;
	}




	public String getExtra2() {
		return extra2;
	}




	public void setExtra2(String extra2) {
		this.extra2 = extra2;
	}




	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getProductname1() {
		return productname1;
	}

	public void setProductname1(String productname1) {
		this.productname1 = productname1;
	}

	public String getProductname2() {
		return productname2;
	}

	public void setProductname2(String productname2) {
		this.productname2 = productname2;
	}

	public String getProductname3() {
		return productname3;
	}

	public void setProductname3(String productname3) {
		this.productname3 = productname3;
	}

	public String getProductname4() {
		return productname4;
	}

	public void setProductname4(String productname4) {
		this.productname4 = productname4;
	}

	public String getProductname5() {
		return productname5;
	}

	public void setProductname5(String productname5) {
		this.productname5 = productname5;
	}

	public String getProductname6() {
		return productname6;
	}

	public void setProductname6(String productname6) {
		this.productname6 = productname6;
	}

	public String getProductname7() {
		return productname7;
	}

	public void setProductname7(String productname7) {
		this.productname7 = productname7;
	}

	public List<MenuItems> getMenuitems() {
		return menuitems;
	}

	public void setMenuitems(List<MenuItems> menuitems) {
		this.menuitems = menuitems;
	}

	public int getO_id() {
		return o_id;
	}

	public void setO_id(int o_id) {
		this.o_id = o_id;
	}

	public int getU_id() {
		return u_id;
	}

	public void setU_id(int u_id) {
		this.u_id = u_id;
	}


	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public boolean isPickup() {
		return pickup;
	}

	public void setPickup(boolean pickup) {
		this.pickup = pickup;
	}

	@Override
	public String toString() {
		return "Orders [o_id=" + o_id + ", u_id=" + u_id + ", username=" + username + ", productname1=" + productname1
				+ ", productname2=" + productname2 + ", productname3=" + productname3 + ", productname4=" + productname4
				+ ", productname5=" + productname5 + ", productname6=" + productname6 + ", productname7=" + productname7
				+ ", extra1=" + extra1 + ", extra2=" + extra2 + ", price=" + price + ", comments=" + comments
				+ ", status=" + status + ", pickup=" + pickup + ", menuitems=" + menuitems + "]";
	}


	
	
	
}
	