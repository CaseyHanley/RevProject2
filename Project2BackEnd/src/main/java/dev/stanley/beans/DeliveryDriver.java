package dev.stanley.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class DeliveryDriver {

	@Id
	@GeneratedValue
	@Column(name = "driverid", updatable = false)
	private int driverid;
	
	@Column(name="driverUsername")
	private String driverUsername;
	
	@Column(name="ousername")
	private String ousername;
	
	@Column(name="oid")
	private int oid;

	public DeliveryDriver(int driverid, String driverUsername, String ousername, int oid) {
		super();
		this.driverid = driverid;
		this.driverUsername = driverUsername;
		this.ousername = ousername;
		this.oid = oid;
	}

	public DeliveryDriver() {
		super();
		// TODO Auto-generated constructor stub
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

	public String getOusername() {
		return ousername;
	}

	public void setOusername(String ousername) {
		this.ousername = ousername;
	}

	public int getOid() {
		return oid;
	}

	public void setOid(int oid) {
		this.oid = oid;
	}

	@Override
	public String toString() {
		return "DeliveryDriver [driverid=" + driverid + ", driverUsername=" + driverUsername + ", ousername="
				+ ousername + ", oid=" + oid + "]";
	}
	

	




}