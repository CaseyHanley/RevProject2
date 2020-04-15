package dev.stanley.beans;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Extras {
	
	
	@Id
	@Column(name = "e_id")
	@GeneratedValue
	private int eid;
	
	@Column(name = "descriptions")
	private int descriptions;
	
	@Column(name = "ingredientname")
	private int ingredientname;
	
	@Column(name = "price")
	private int price;
	
	
	
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public int getDescriptions() {
		return descriptions;
	}
	public void setDescriptions(int descriptions) {
		this.descriptions = descriptions;
	}
	public int getIngredientname() {
		return ingredientname;
	}
	public void setIngredientname(int ingredientname) {
		this.ingredientname = ingredientname;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	public Extras(int e_id, int descriptions, int ingredientname, int price) {
		super();
		this.eid = e_id;
		this.descriptions = descriptions;
		this.ingredientname = ingredientname;
		this.price = price;
	}
	
	public Extras() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public String toString() {
		return "Extras [e_id=" + eid + ", descriptions=" + descriptions + ", ingredientname=" + ingredientname
				+ ", price=" + price + "]";
	}

	
	
}
