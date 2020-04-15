package dev.stanley.beans;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class DeliveryAddress {


	@Id
	@Column(name = "a_id")
	@GeneratedValue
	private int a_id;
	
	@Column(name ="u_id")
	private int uid;
	
	@Column(name ="state")
	private String state;
	
	@Column(name ="city")
	private String city;
	
	@Column(name ="address")
	private String address;
	
	@Column(name ="address2")
	private String address2;
	
	@Column(name ="zipcode")
	private int zipcode;
	
	@Column(name ="comments")
	private String comments;

	public int getA_id() {
		return a_id;
	}

	public void setA_id(int a_id) {
		this.a_id = a_id;
	}


	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public int getZipcode() {
		return zipcode;
	}

	public void setZipcode(int zipcode) {
		this.zipcode = zipcode;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "DeliveryAddress [a_id=" + a_id + ", u_id=" + uid + ", state=" + state + ", address=" + address
				+ ", address2=" + address2 + ", zipcode=" + zipcode + ", comments=" + comments + "]";
	}

	public DeliveryAddress() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DeliveryAddress(int a_id, int u_id, String state, String address, String address2, int zipcode,
			String comments) {
		super();
		this.a_id = a_id;
		this.uid = u_id;
		this.state = state;
		this.address = address;
		this.address2 = address2;
		this.zipcode = zipcode;
		this.comments = comments;
	}
	
	
	
	
	
}
