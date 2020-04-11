package dev.stanley.beans;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class DiscountCodes {
	
	@Id
	@Column(name = "dc_id")
	@GeneratedValue
	private int dc_id;
	
	@Column(name = "discountname")
	private String discountname;
	
	@Column(name = "discountamount")
	private String discountamount;
	
	
	public int getDc_id() {
		return dc_id;
	}
	public void setDc_id(int dc_id) {
		this.dc_id = dc_id;
	}
	public String getDiscountname() {
		return discountname;
	}
	public void setDiscountname(String discountname) {
		this.discountname = discountname;
	}
	public String getDiscountamount() {
		return discountamount;
	}
	public void setDiscountamount(String discountamount) {
		this.discountamount = discountamount;
	}
	
	public DiscountCodes(int dc_id, String discountname, String discountamount) {
		super();
		this.dc_id = dc_id;
		this.discountname = discountname;
		this.discountamount = discountamount;
	}
	
	public DiscountCodes() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
}
