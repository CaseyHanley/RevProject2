package dev.stanley.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class DeliveryDriver {

	@Id
	@GeneratedValue
	@Column(name = "driverid", updatable = false)
	private int driverid;
	
	@Column(name="driverUsername")
	private String driverUsername;
	
	
	@Column(name="oid")
	private int oid;
	
	@OneToMany(fetch = FetchType.EAGER) 
	@JoinColumn(name = "oid", referencedColumnName = "oid")
	private List<Orders> DriverOrders;
	
	


	public DeliveryDriver() {
		super();
	}



	public DeliveryDriver(int driverid, String driverUsername, int oid, List<Orders> driverOrders) {
		super();
		this.driverid = driverid;
		this.driverUsername = driverUsername;
		this.oid = oid;
		DriverOrders = driverOrders;
	}



	public DeliveryDriver(String driverUsername, List<Orders> driverOrders) {
		super();
		this.driverUsername = driverUsername;
		this.DriverOrders = driverOrders;
	}



	public DeliveryDriver(int driverid, String driverUsername, List<Orders> driverOrders) {
		super();
		this.driverid = driverid;
		this.driverUsername = driverUsername;
		this.DriverOrders = driverOrders;
	}



	public List<Orders> getDriverOrders() {
		return DriverOrders;
	}



	public void setDriverOrders(List<Orders> driverOrders) {
		DriverOrders = driverOrders;
	}



	public int getDriverid() {
		return driverid;
	}



	public void setDriverid(int driverid) {
		this.driverid = driverid;
	}



	public String getDriverUsername() {
		return driverUsername;
	}



	public void setDriverUsername(String driverUsername) {
		this.driverUsername = driverUsername;
	}







}