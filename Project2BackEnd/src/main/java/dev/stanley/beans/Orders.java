package dev.stanley.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Orders {
	
	@Id
	@Column(name = "o_id", updatable = false)
	@GeneratedValue
	private int o_id;
	
	@Column(name = "u_id")
	private int u_id;
	
	@Column(name = "a_id")
	private int a_id;
	
	@Column(name = "price")
	private int price;
	
	@Column(name="comments")
	private String comments;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "pickup")
	private boolean pickup;
	
	
	
	

	public Orders() {
		super();
	}
	
	

	public Orders(int o_id, int u_id, int a_id, int price, String comments, String status, boolean pickup) {
		super();
		this.o_id = o_id;
		this.u_id = u_id;
		this.a_id = a_id;
		this.price = price;
		this.comments = comments;
		this.status = status;
		this.pickup = pickup;
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

	public int getA_id() {
		return a_id;
	}

	public void setA_id(int a_id) {
		this.a_id = a_id;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
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
		return "Orders [o_id=" + o_id + ", u_id=" + u_id + ", a_id=" + a_id + ", price=" + price + ", comments="
				+ comments + ", status=" + status + ", pickup=" + pickup + "]";
	}
	
	
	
}
